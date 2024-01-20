---
sidebar_position: 2
---

# Initial Setup

When you launch the overlay for the first time you'll be asked to perform the initial setup. Please remember that to
use the overlay you need to have Minecraft: Java Edition installed on your computer.

## Log File

Please begin by selecting the appropriate log file location depending on which Minecraft client you're using. If
your game's log file is a non-predefined location, please use the `Custom` option and set the location by pressing
the `Set` button. You'll need to do that if, for example, you're not using the default `.minecraft` folder for your
game's files or if you're using a launcher such as GDLauncher.

:::caution

If you've installed the app through Snapcraft on Linux, you'll not be able to use it with a log file placed in a
hidden directory or outside your home directory. The only exception to this rule are the following locations:

- `~/.minecraft/logs/latest.log`
- `~/.lunarclient/offline/multiver/logs/latest.log`
- `~/.minecraft/logs/blclient/minecraft/latest.log`

As a workaround, you can either change the log file's location in your launcher or client's settings, or [install the
app using the AppImage](/overlay/getting-started/installation/linux-portable) instead.

:::

![](/img/docs/overlay/getting-started/initial-setup/select-log-file.png)

## Username

Next, please enter the username of the Minecraft account that you'll be playing on.

![](/img/docs/overlay/getting-started/initial-setup/enter-username.png)

## Log In

The last part of the initial setup process is logging in with your Cubelify account.  To log in, press the `Log In`
button.

![](/img/docs/overlay/getting-started/initial-setup/press-log-in-overlay.png)

A login page will open in your browser. If you see a message telling you that you must log in, press the `Log In`
button in the top right corner. If it does not, skip this part.

![](/img/docs/overlay/getting-started/initial-setup/press-log-in-browser.png)

You then might receive a prompt from Discord asking you authorize Cubelify. To do that, press `Authorize`.

:::info

We're requesting this information from Discord in order to be able to identify you and, in the future, to be able to
see your servers for the Discord bot dashboard. This is a secure process that does not require you to share your
Discord account credentials with us and only grants us the privileges you approve.

:::

:::tip

Make sure that the Discord username shown here matches the username of the account you're using and will use in the
later steps to join the Cubelify Discord server.

:::

![](/img/docs/overlay/getting-started/initial-setup/authorize-discord.png)

You'll be then asked to confirm that you're trying to log in to the Cubelify Overlay. To do that, press *Yes*. You may
then be asked to confirm that you want to open the Cubelify Overlay app.

![](/img/docs/overlay/getting-started/initial-setup/approve-log-in.png)

## Link

You may then be asked to link in the Cubelify Discord server in order to activate Free+ and continue. To do that, you'll
need to join the [Cubelify Discord server](https://discord.gg/cubelify) and link using `/link` in the *#link* channel.
If after linking the overlay does not show that Free+ is active, please consult the
[Free+ troubleshooting guide](/overlay/troubleshooting/inactive-free-plus).

## Finish

Press `Finish` to end the setup.

![](/img/docs/overlay/getting-started/initial-setup/finish.png)

The overlay is now ready to use!

![](/img/docs/overlay/getting-started/initial-setup/ready.png)
