---
sidebar_position: 1
---

# Chat Commands

Chat commands allow you to control the overlay using the Minecraft chat. This allows you to perform various
operations without having to focus the overlay. Chat commands can be triggered by typing `/w <command>` in the
Minecraft chat (e. g. `/w +Metriusz` will add the player Metriusz to your overlay).

## Adding players

You can add a player to the overlay by using the `/w +<username>` chat command, where `<username>` is the username
of the player you would like to add - for example `/w +Metriusz` will add the player called Metriusz to the overlay.

![](/img/docs/overlay/features/chat-commands/adding-players.png)

## Removing players

### By source

These are the commands to remove all players from a specific source.

| Source        | Command              |
|---------------|----------------------|
| All           | `/w --`, `/w --all`  |
| Game          | `/w --game`          |
| Party         | `/w --party`         |
| Party Invites | `/w --party_invites` |
| Chat          | `/w --chat`          |
| Chat Mentions | `/w --chat_mentions` |
| Manual        | `/w --manual`        |

### By username

You can remove a player from the overlay by using the `/w -<username>` chat command, where `<username>` is the
username of the player you would like to remove - for example `/w -Metriusz` will remove the player called Metriusz
from the overlay.

![](/img/docs/overlay/features/chat-commands/removing-players-by-username.png)

## Refreshing players

These are the commands to refresh all players from a specific source.

| Source        | Command              |
|---------------|----------------------|
| All           | `/w **`, `/w **all`  |
| Game          | `/w **game`          |
| Party         | `/w **party`         |
| Party Invites | `/w **party_invites` |
| Chat          | `/w **chat`          |
| Chat Mentions | `/w **chat_mentions` |
| Manual        | `/w **manual`        |
| Me            | `/w **me`            |

## Various

These are the commands to quickly control various elements of the overlay.

| Action               | Command                             |
|----------------------|-------------------------------------|
| Hide or show         | `/w $h`, `/w $hide_or_show`         |
| Toggle click-through | `/w $c`, `/w $toggle_click_through` |
| Quit                 | `/w $q`, `/w $quit`                 |

## Switching game

These are the commands to quickly switch the current game in the overlay.

| Game           | Command                        |
|----------------|--------------------------------|
| Bed Wars       | `/w %bed_wars`, `/w %bw`       |
| Duels          | `/w %duels`, `/w %d`           |
| SkyWars        | `/w %skywars`, `/w %sw`        |
| Wool Wars      | `/w %wool_wars`, `/w %ww`      |
| Murder Mystery | `/w %murder_mystery`, `/w %mm` |
