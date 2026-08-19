# My Sample Renamer

> Quickly rename Arrangement View audio clips in Ableton Live using a personal sample-naming convention with a date prefix, shared base name, revision tag, and sequential numbering.

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
- Changes clip names only — it does not crop, consolidate, render, move, or export audio files for you

## Requirements

This Extension currently requires:

- **Ableton Live 12 Suite Beta 12.4.5 or later**
- The packaged `.ablx` may work on Windows, but it has not yet been tested
- The packaged extension file: `my-sample-renamer-1.0.0.ablx`

> [!IMPORTANT]
> Ableton Extensions are currently part of Ableton Live's public beta workflow. They do not work in Live Standard, Intro, Lite, or earlier Live versions. You do **not** need the Ableton Extensions SDK or Node.js just to install and use the `.ablx` file. [Ableton Extensions FAQ](https://help.ableton.com/hc/en-us/articles/27303428331420-Ableton-Extensions-FAQ)

## More on Ableton Extensions

Want to learn more about what Ableton Extensions are or how to build your own?

- [Read about Extensions on Ableton.com](https://www.ableton.com/en/live/extensions)
- [Explore the Extension SDK](https://ableton.github.io/extensions-sdk)
- [Join Ableton’s Discord](https://discord.gg/ableton) to connect with other users and developers

## Disclaimer

This project was developed with help from AI tools, which assisted with parts of the code, troubleshooting, and documentation. I remain responsible for the design, testing, and final decisions, but it may not be written in the most elegant way.

If AI-assisted development isn’t your thing, no hard feelings at all. Thanks for giving it a look anyway.

## Installation

1. Download `my-sample-renamer-1.0.0.ablx` from this repository's [Releases](../../releases) page.
2. Open **Ableton Live 12 Suite Beta**.
3. Open **Settings/Preferences**:
   - macOS: press `Cmd + ,`
   - Windows: open **Options → Preferences**
4. Select **Extensions**.
5. Drag `my-sample-renamer-1.0.0.ablx` into the Extensions settings page.
6. Restart Live when prompted.

For normal use of the installed `.ablx`, make sure **Developer Mode is turned off**.

## How to Use

1. Switch to **Arrangement View**.
2. Make a **time selection** over the clips you want to rename on the relevant audio track lane or lanes.
3. Right-click inside the selected area.
4. Choose **Extensions → my-sample-renamer: Rename Selected Clips**.
5. Type the shared base name for the samples.
6. Click **Rename Clips**.

Every clip that overlaps your selected lane(s) and time range is renamed in Arrangement order.

## Example workflow

You have several bounced kick variations arranged next to each other and want to save them as reusable samples.

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

## Undo

The whole rename operation is performed as one Ableton Live transaction.

Press:

- macOS: `Cmd + Z`
- Windows: `Ctrl + Z`

...once to restore all clip names from that rename pass.

## Safety

My Sample Renamer changes **only the names of Arrangement View audio clips that overlap the active time selection on the selected track lane or lanes**.

It does not change:

- Audio files or samples on disk
- MIDI notes
- Clip placement, length, looping, or warp settings
- Track names or colors
- Devices, effects, parameters, automation, routing, or mixer settings
- Session View clips

Still, as with any tool that changes a Live Set, test it first in a duplicate or saved version of an important project.

## Troubleshooting

### I do not see "Extensions" in the right-click menu

Check all of the following:

- You are running **Ableton Live 12 Suite Beta 12.4.5 or later**
- You installed the `.ablx` file in **Settings/Preferences → Extensions**
- You restarted Live after installation
- **Developer Mode is off** when using the packaged `.ablx`
- You are in **Arrangement View**, not Session View
- You created a **time selection** and right-clicked inside the selected range on the correct audio track lane

Extensions are context-sensitive: Live only shows them when the selected item matches the Extension's supported context.

### I installed it but an older version appears to run

Remove the old version from **Settings/Preferences → Extensions**, install `my-sample-renamer-1.0.0.ablx`, then restart Live.

### Can I use this in Live Standard, Intro, or Lite?

No. The Ableton Extensions public beta currently requires **Live 12 Suite Beta 12.4.5 or later**.

## Building From Source

If you want to edit or develop the Extension yourself:

```bash
npm install
npm start
```

Build an installable package with:

```bash
npm run package
```

This produces an `.ablx` file in the project folder.

Development requires the Ableton Extensions SDK, Node.js, and a compatible Ableton Live 12 Suite Beta installation. See the [official Ableton Extensions SDK documentation](https://ableton.github.io/extensions-sdk/).

## Version History

### v1.0.0

- Initial release
- Batch-renamed Arrangement View audio clips using the `MM.DD {Sample Name} br0 {number}` naming convention
- Prompted for one shared sample name and applied sequential numbering in Arrangement order

## License

MIT License. See [`LICENSE`](./LICENSE) for details.

## Credits

Built by Tyler W. Supernor with the [Ableton Extensions SDK](https://ableton.github.io/extensions-sdk/).

Ableton Live is a trademark of Ableton AG. This project is an independent community tool and is not affiliated with or endorsed by Ableton AG.
