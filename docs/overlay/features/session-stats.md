---
sidebar_position: 1
---

# Session Stats

The session stats feature can allow you to more accurately determine one's skill, free from the bias of early-on final
deaths. It allows you to display session stats of any set length up to 100 days back, and can show session FKDR, WLR,
FKs/Level, etc.

## Setup

The session stats feature utilizes the [Observer API](https://api.invite.observer). In order to use it, you will need to
obtain an Observer API key, which you can get by joining [our Discord server](https://discord.gg/cubelify) and using the
Observer bot's `/apikey` command.

Open the "Basic" tab in the menu.

![](/img/docs/overlay/features/session-stats/open-settings.png)

Scroll down and locate the "Session Stats" tab.

![](/img/docs/overlay/features/session-stats/settings.png)

In the **API key** field, you must provide the valid Observer API key aforementioned.

The **mode** field allows you to set the length of the session. Two groups of choices are available here:

- Pick the "Days" mode, and manually set the length of the session.
- Pick "Monthly", "Weekly" or "Daily", which will fetch their session stats since the start of the respective time
  period.

The **auto-register** toggle allows the overlay to automatically start tracking players who people who are at least
network level 25 and are not already being tracked. Their session stats won't immediately be shown, but if you happened
to queue them later, you'd see their stats.

## Usage

Open the "Columns" tab in the menu, and click on the green "+" button

![](/img/docs/overlay/features/session-stats/open-columns.png)

Scroll down and locate the "Session" family of stats.

![](/img/docs/overlay/features/session-stats/locate-session-stats-columns.png)

You can add any of these stats to the column list and their respective stats will be displayed like normal.

![](/img/docs/overlay/features/session-stats/session-stats-example.png)

