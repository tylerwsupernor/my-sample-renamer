import {
  initialize,
  ActivationContext,
  Clip,
  DataModelObject,
  Track,
} from "@ableton-extensions/sdk";
import modalHtml from "../ui/interface.html";

type ArrangementSelectionArg = {
  time_selection_start?: number;
  time_selection_end?: number;
  selected_lanes?: Array<{ id: bigint }>;
};

function isArrangementSelectionArg(value: unknown): value is ArrangementSelectionArg {
  if (!value || typeof value !== "object") {
    return false;
  }

  return "selected_lanes" in value;
}

function isClipObject(value: DataModelObject<"1.0.0">): value is Clip<"1.0.0"> {
  return value instanceof Clip;
}

function isTrackObject(value: DataModelObject<"1.0.0">): value is Track<"1.0.0"> {
  return value instanceof Track;
}

function clipOverlapsTimeSelection(
  clip: Clip<"1.0.0">,
  selectionStart: number,
  selectionEnd: number
): boolean {
  return clip.startTime < selectionEnd && clip.endTime > selectionStart;
}

function uniqueClips(clips: Array<Clip<"1.0.0">>): Array<Clip<"1.0.0">> {
  const seen = new Set<string>();
  const result: Array<Clip<"1.0.0">> = [];

  for (const clip of clips) {
    const key = clip.handle.id.toString();

    if (seen.has(key)) {
      continue;
    }

    seen.add(key);
    result.push(clip);
  }

  return result;
}

export function activate(activation: ActivationContext) {
  const context = initialize(activation, "1.0.0");

  context.commands.registerCommand("sample-renamer.renameSelected", async (...args) => {
    const modalResult = await context.ui.showModalDialog(
      `data:text/html,${encodeURIComponent(modalHtml)}`,
      420,
      220
    );

    console.log("Modal result:", modalResult);

    const typedName = String(modalResult ?? "").trim();

    if (!typedName || typedName === "New Sample") {
      console.log("Modal did not return a real typed name.");
      return;
    }

    const firstArg = args[0];

    if (!isArrangementSelectionArg(firstArg)) {
      console.log("Command was not invoked from an arrangement selection.");
      return;
    }

    const selectionStart = Number(firstArg.time_selection_start ?? 0);
    const selectionEnd = Number(firstArg.time_selection_end ?? 0);
    const selectedLanes = Array.isArray(firstArg.selected_lanes)
      ? firstArg.selected_lanes
      : [];

    if (!selectedLanes.length) {
      console.log("No arrangement lanes selected.");
      return;
    }

    if (!(selectionEnd > selectionStart)) {
      console.log("No arrangement time range selected.");
      return;
    }

    const clipsToRename: Array<Clip<"1.0.0">> = [];

    for (const laneHandle of selectedLanes) {
      const laneObject = context.getObjectFromHandle(laneHandle, DataModelObject);

      if (isTrackObject(laneObject)) {
        for (const clip of laneObject.arrangementClips) {
          if (isClipObject(clip) && clipOverlapsTimeSelection(clip, selectionStart, selectionEnd)) {
            clipsToRename.push(clip);
          }
        }
        continue;
      }

      const parentObject = laneObject.parent;

      if (parentObject && isTrackObject(parentObject)) {
        for (const clip of parentObject.arrangementClips) {
          if (isClipObject(clip) && clipOverlapsTimeSelection(clip, selectionStart, selectionEnd)) {
            clipsToRename.push(clip);
          }
        }
      }
    }

    const uniqueTargets = uniqueClips(clipsToRename).sort(
      (a, b) => a.startTime - b.startTime
    );

    if (!uniqueTargets.length) {
      console.log("No arrangement clips found in the selected time range.");
      return;
    }

    context.withinTransaction(() => {
      uniqueTargets.forEach((clip, index) => {
        clip.name = `08.18 ${typedName} br0 ${index + 1}`;
      });
    });

    console.log(`Renamed ${uniqueTargets.length} clip(s).`);
  });

  void context.ui.registerContextMenuAction(
    "AudioTrack.ArrangementSelection",
    "Rename Selected Clips",
    "sample-renamer.renameSelected"
  );

  void context.ui.registerContextMenuAction(
    "MidiTrack.ArrangementSelection",
    "Rename Selected Clips",
    "sample-renamer.renameSelected"
  );
}
