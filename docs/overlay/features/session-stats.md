---
sidebar_position: 2
---

# Session Stats

The session stats feature allows you to view other players' daily, weekly and monthly stats.

## Setup

Before you can start using session stats you'll first have to configure them.

Begin by opening Basic Settings.

![](/img/docs/overlay/features/session-stats/go-to-settings-basic.png)

Locate the Session Stats settings section.

![](/img/docs/overlay/features/session-stats/session-stats-settings.png)

### Settings

#### API Key

The first setting that you can see here and that you are **required** to configure in order to use session stats is
the Observer API key. To obtain it, you'll need to join the [Cubelify Discord server](https://discord.gg/cubelify)
(or a different server with the Observer bot). After doing that, you'll need to use the `/apikey` slash command.

![](/img/docs/overlay/features/session-stats/slash-apikey.png)

The response you receive will contain an API key.

![](/img/docs/overlay/features/session-stats/slash-apikey-response.png)

You'll need to copy that key and paste it into the `API Key` field in Session Stats settings.

![](/img/docs/overlay/features/session-stats/api-key-pasted.png)

#### Mode and Days

The mode setting allows you to customize the period of time for which stats will be shown.

| Option  | Description                           |
|---------|---------------------------------------|
| Daily   | Will show daily stats                 |
| Weekly  | Will show weekly stats                |
| Monthly | Will show monthly stats               |
| Days    | Will show stats for the last `x` days |

If you choose the `Days` option, you'll also be able to customize the number of days via the `Days` field.

#### Auto-Register

This setting will toggle whether the overlay will automatically register players above network level 25 so that
their session stats start being recorded by Observer and are shown in the future. Enabled by default.

### Columns

After completing the steps mentioned above you'll also need to add the columns for the session stats you'd like the
overlay to show.

Begin by opening Columns Settings.

![](/img/docs/overlay/features/session-stats/go-to-settings-columns.png)

Press the green `+` button in the bottom right-hand corner to start adding a new column.

![](/img/docs/overlay/features/session-stats/columns-settings-plus.png)

Scroll down until you see columns with names starting with `Session `.

![](/img/docs/overlay/features/session-stats/columns-settings-add.png)

Press the name of the column that you'd like to add to the overlay.

If you've done everything correctly, you should see it appear on the list.

![](/img/docs/overlay/features/session-stats/columns-settings-added.png)

Remember that you can rearrange columns by dragging-and-dropping them.

![](/img/docs/overlay/features/session-stats/columns-settings-rearrange.png)

Repeat these steps for any additional columns you may want to add.

Once you finish adding the columns, the session stats feature will be ready to use!

## Usage

Return to the home screen. If you've done everything correctly you should now be able to see the session stats
columns that you've added. Notice that their labels are prefixed with `S. ` to differentiate them from all-time
stats.

![](/img/docs/overlay/features/session-stats/usage.png)

:::info

If the session stats columns are empty it most likely means that the Observer API key you provided is invalid.
Please try regenerating it and entering it again. If the issue is not resolved, please contact support via the
[Cubelify Discord server](https://discord.gg/cubelify).

:::
