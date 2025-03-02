---
sidebar_position: 1
---

# Troubleshooting

Here are some common issues you might face when trying to use the overlay.

## Prerequisites

When faced with any issue you should first try the two basic steps listed below:

1. Restart the overlay.
2. Update the overlay (if you're not using the latest version).

### Updating

#### App Installer

The overlay should normally automatically update in the background within 24 hours. If it does not, however, you can
follow the [installation guide](/overlay/getting-started/installation/windows-app-installer) to update the overlay to
the latest version.

#### MS Store

If you're using the MS Store version you'll need to update the overlay through there.

#### Other

If you're not using the MS Store version you can update by right-clicking the overlay's tray icon (should be located
in the bottom right corner on Windows and top right corner on macOS) and pressing "Check for updates". A pop-up
should then appear in the overlay informing you about the availability of updates.

Please note that the auto updater might not always work on macOS. If it does not, please update manually by download
the latest version from [the website](https://cubelify.com/overlay/download/macos).

![](/img/docs/overlay/troubleshooting/tray-check-for-updates.png)

## Common Issues

Here are some steps you should take when faced with the most common issues:

- [Players aren't added](#players-arent-added)
- [Monthly stats are not shown](#monthly-stats-are-not-shown)

If you can't locate the issue you're having in this list or the troubleshooting steps listed below did not help, please
contact [support](#support).

### Players Aren't Added

If players aren't added to the overlay - their names do not appear at all in the players table (please note that
this is a different problem than players being added but their stats not being shown) - then it's most likely an
issue with your log file setting or an incompatible mod.

Begin by opening Basic Settings.

![](/img/docs/overlay/troubleshooting/open-settings-basic.png)

Verify if your current log file setting value reflects the launcher/client/mod you're using.

![](/img/docs/overlay/troubleshooting/basic-settings.png)

If it does not, please check if it's listed in the presets list. If it is, select it and verify if it works.

![](/img/docs/overlay/troubleshooting/log-file-setting.png)

### Monthly Stats Are Not Shown

If you're not seeing monthly stats for a player (but lifetime stats are shown), make sure that:

1. The player has at least 700 wins in one of the gamemodes supported the overlay.
2. You don't have the *Always Use API Key* setting enabled in *Settings &rarr; Advanced*.
3. You don't have a *Custom Hypixel API Proxy Player URL* configured in *Settings &rarr; Advanced*.
4. You have Free+ active in the overlay.

#### Custom Log File

:::caution

If you're using an unofficial modified version of a client please try using the preset for that client first before
attempting to select a custom log file. Please note that we do not officially support any modified version of clients.

:::

In case of some clients or non-standard configurations you might have to use the "Custom" option. When you select it,
a "Set" button will appear that after pressing will open a file picker dialog, allowing you to select a log file
manually. In most cases it'll be located in your Minecraft folder under the `logs/latest.log`.

![](/img/docs/overlay/troubleshooting/log-file-custom.png)

#### LabyMod

If you're using LabyMod, there are some mods that may be incompatible with the overlay - this mostly includes mods
that may be modifying the messages in the in-game chat, for example by adding timestamps for messages or
additionally highlighting your name in messages. If you're using mods matching these criteria please try disabling
them - that may resolve the issue.

## Support

You can receive support by creating a ticket in [the Cubelify Discord server](https://discord.gg/cubelify). To do
that, join the Cubelify Discord server (a Discord account is required) and open the `#create-a-ticket` channel.
Locate the button for the category of the issue you're having (you'll most likely want to select "Overlay"), fill
out the form (please make sure to fill out all the fields) and submit it. A private channel will then be created
through which our staff will be able to assist you with your issue.
