---
sidebar_position: 2
---

# Initial Setup

When you launch the overlay for the first time, you'll be asked to perform the initial setup. Please remember that to
use the overlay you need to have Minecraft: Java Edition installed on your computer.

## Log File

Please begin by selecting the appropriate log file location depending on which Minecraft client you're using. If
your game's log file is a non-predefined location, please use the `Custom` option and set the location by pressing
the `Set` button. You'll need to do that if, for example, you're not using the default `.minecraft` folder for your
game's files or if you're using a launcher such as GDLauncher.

:::caution

If you've installed the app through Snapcraft on Linux, you won't be able to use it with a log file placed in a
hidden directory or outside your home directory. Unfortunately, by default, the default Minecraft launcher and
most other clients use such a location.

As a workaround, you can either change the log file's location in your launcher/client's settings, or [install the
app using the AppImage](/overlay/getting-started/installation/linux-portable) instead.

:::

![](/img/docs/overlay/getting-started/initial-setup/select-log-file.png)

## API Key

Afterwards, you'll be asked to enter your Hypixel API key. If you have one already, please enter it.

If you do not have one yet, you can use the in-game command `/api new` on Hypixel to receive a new API key.

![](/img/docs/overlay/getting-started/initial-setup/run-api-new.png)

:::info

The API key should get automatically detected by the overlay. If it is not, it's possible that your log file is not
set correctly or there is some other issue with it.

:::

## Username

Next, enter the username of the Minecraft account that you'll be playing on.

![](/img/docs/overlay/getting-started/initial-setup/enter-username.png)

## Log In

The last part of the initial setup process is logging in with your Cubelify account.

:::note

This is not required; however, if you do not log in, some features will be unavailable.

:::

To log in, press the `Log In` button.

![](/img/docs/overlay/getting-started/initial-setup/press-log-in-overlay.png)

A login page will open in your browser. If you see a message telling you that you must log in, press the `Log In`
button in the top right corner. If it does not, skip this part.

![](/img/docs/overlay/getting-started/initial-setup/press-log-in-browser.png)

You then might receive a prompt from Discord asking you authorize Cubelify. To do that, press `Authorize`.

:::info

We're requesting this information from Discord in order to be able to identify you and, in the future, to be able to
see your servers for the Discord bot dashboard. **This is a secure process. We will not receive full access to your
Discord account.**

:::

![](/img/docs/overlay/getting-started/initial-setup/authorize-discord.png)

You'll be then asked to approve the login attempt. To do that, press `Approve`.

:::danger

Never approve login attempts which you do not recognize.

:::

![](/img/docs/overlay/getting-started/initial-setup/approve-log-in.png)

Afterwards, return to the overlay.

### Link Account

If you see a message asking you to link your Minecraft, press the `Link Account` button in order to do that.

:::info

This is also not required, though it is recommended to gain full access to all features.

:::

The Cubelify account settings page will then open. Locate the *Minecraft Accounts* section and press `Add` to add a new
Minecraft account. This will open a dialog.

![](/img/docs/overlay/getting-started/initial-setup/add-minecraft-account.png)

First, please enter the username of the account you'll be adding.

:::tip

You do not necessarily have to add the same account you'll be playing on. It's recommended that you add the account
with the highest Bed Wars level here.

:::

![](/img/docs/overlay/getting-started/initial-setup/add-minecraft-account-username.png)

Afterwards, launch Minecraft: Java Edition. Connect to the multiplayer server `verify.cubelify.com`.

![](/img/docs/overlay/getting-started/initial-setup/connect-verification-server.png)

You'll receive a verification code, that you'll then need to enter in your browser.

![](/img/docs/overlay/getting-started/initial-setup/verification-code.png)

![](/img/docs/overlay/getting-started/initial-setup/add-minecraft-account-code.png)

After you do that, simply press `Add` to add the account and return to the overlay.

![](/img/docs/overlay/getting-started/initial-setup/added-minecraft-account.png)

## Finish

Press `Finish` to end the setup.

![](/img/docs/overlay/getting-started/initial-setup/finish.png)

The overlay is now ready to use!

![](/img/docs/overlay/getting-started/initial-setup/ready.png)
