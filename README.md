# My Sample Renamer

**My Sample Renamer** is an Ableton Live Extension for quickly naming audio clips in Arrangement View using a personal sample-naming convention:

```text
MM.DD {Sample Name} br0 {number}
```

It was made to remove redundant naming steps from a sample-creation workflow. Select the Arrangement clips you want to turn into samples, enter one shared sample name, and the extension names each clip in sequence. You can then crop or consolidate the clips and drag them straight into your created-samples folder with clean, consistent names already in place.

For example, entering `Kick Bounce` on August 18 creates:

```text
08.18 Kick Bounce br0 1
08.18 Kick Bounce br0 2
08.18 Kick Bounce br0 3
```

## What it does

- Batch-renames clips in Ableton Live’s **Arrangement View**.
- Uses the selected Arrangement track lane(s) and selected time range to determine which clips to rename.
- Opens a simple dialog where you enter one base sample name.
- Adds the date prefix, `br0` label, and an ordered number automatically.
- Numbers clips from left to right in the Arrangement.
- Makes the rename pass as one action, so you can use Live’s normal Undo command if needed.

## Install

This extension is distributed as an `.ablx` file:

```text
my-sample-renamer-1.0.0.ablx
```

To install it:

1. Open a compatible version of **Ableton Live with Extensions support**.
2. Drag `my-sample-renamer-1.0.0.ablx` into Live, or use Live’s Extensions installation option.
3. Once installed, the tool appears in the **Extensions** submenu when you right-click an eligible Arrangement selection.

## How to use it

1. Open **Arrangement View** in Ableton Live.
2. Select the track lane or lanes containing the audio clips you want to name.
3. Drag a time selection over the clips you want included.
4. Right-click inside the selected Arrangement area.
5. Choose **Extensions → my-sample-renamer: Rename Selected Clips**.
6. Type the shared base name for the samples.
7. Click **Rename Clips**.

Every clip that overlaps your selected lane(s) and time range is renamed in Arrangement order.

## Example workflow

You have several bounced kick variations arranged next to each other and want to save them as reusable samples:

1. Select the bounced clips in Arrangement View.
2. Run **Rename Selected Clips**.
3. Enter `Kick Bounce`.
4. The extension creates names such as:

```text
08.18 Kick Bounce br0 1
08.18 Kick Bounce br0 2
08.18 Kick Bounce br0 3
```

5. Crop or consolidate the clips as needed.
6. Drag the finished audio files into your created-samples folder.

The clips have already been named consistently, so there is no need to rename each file manually afterward.

## Naming format

The current naming structure is:

```text
MM.DD {Sample Name} br0 {number}
```

Where:

- `MM.DD` is the date prefix used by the extension.
- `{Sample Name}` is the name you type into the dialog.
- `br0` is your personal bounce / revision label.
- `{number}` increments for every renamed clip, starting at `1`.

## Notes

- The extension works from **Arrangement View**, not Session View.
- Make sure you have an actual time selection and relevant track lane selected before opening the context menu.
- The extension renames the Ableton clips; it does not render, crop, consolidate, move, or export audio files for you.
- Test it on a copied Set the first few times if you are working in an important project.
- Use `Cmd + Z` in Live to undo the entire rename batch if you need to revert it.

## Author

Tyler Supernor

## Version

1.0.0
