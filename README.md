# My Sample Renamer

**My Sample Renamer** is an Ableton Live Extension for quickly naming audio clips in Arrangement View using a personal sample-naming convention:

```text
MM.DD {Sample Name} br0 {number}
```

Built to remove repetitive naming from the sample-creation workflow: select bounced clips, enter one shared name, and rename the entire selection in sequence.

## Features

- Batch-renames selected audio clips in **Arrangement View**
- Uses the selected track lane(s) and time range to identify clips
- Prompts for one shared sample name
- Automatically adds a date prefix, `br0` revision label, and sequence number
- Numbers clips from left to right in Arrangement order
- Runs as a single action, so the batch can be undone with Ableton Live's normal Undo command

## Naming Format

```text
MM.DD {Sample Name} br0 {number}
```

| Element | Description |
| --- | --- |
| `MM.DD` | Current month and day |
| `{Sample Name}` | The shared name entered in the extension dialog |
| `br0` | Personal bounce / revision label |
| `{number}` | Sequential clip number, beginning at `1` |

For example, entering `Kick Bounce` on August 18 produces:

```text
08.18 Kick Bounce br0 1
08.18 Kick Bounce br0 2
08.18 Kick Bounce br0 3
```

## Install

This extension is distributed as an `.ablx` file:

```text
my-sample-renamer-1.0.0.ablx
```

## Installation

1. Download `my-sample-renamer-1.0.0.ablx` from this repository's [Releases](../../releases) page.
2. Open **Ableton Live 12 Suite Beta**.
3. Open **Settings/Preferences**:
   - macOS: press `Cmd + ,`
   - Windows: open **Options → Preferences**
4. Select **Extensions**.
5. Drag `my-sample-renamer-1.0.0.ablx` into the Extensions settings page.
6. Restart Live when prompted.


## How to use it

1. Open **Arrangement View** in Ableton Live.
3. Drag a time selection over the clips you want to rename.
4. Right-click inside the selected area.
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

- The extension works in **Arrangement View**.
- Make sure you have an actual time selection and relevant track lane selected before opening the context menu.
- The extension renames the Ableton clips; it does not render, crop, consolidate, move, or export audio files for you.
- Test it on a copied Set the first few times if you are working in an important project.
- Use `Cmd + Z` in Live to undo the entire rename batch if you need to revert it.
- Feel free to make it your own, I'm assuming you have a different naming convention than I do.

## Author

Tyler W. Supernor

## Version

1.0.0
