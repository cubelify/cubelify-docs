---
sidebar_position: 3
---

# Basic Usage

After you launch the overlay and complete the [initial setup](./initial-setup.md), you'll then be taken to the main
view.

## Main View

This is the main view of the overlay. It consists of the app bar and the players table.

![](/img/docs/overlay/getting-started/basic-usage/home.png)

### Players Table

The players table is the primary element of the interface. It contains all the added players.

![](/img/docs/overlay/getting-started/basic-usage/players-table.png)

The **column labels** are located on the top of the table. They specify what information is shown in a specific column
of the table. For example, a column with the label "Name" will contain usernames of players. You can make the overlay
sort players by the value of this column by clicking it. Clicking it again will toggle the sort order between descending
and ascending.

The **player info** section contains the values for all the columns that are enabled for a player. By default, for Bed
Wars, these columns include the player's level (which is the first column) and their FKDR (the fourth column).

The **player icons** section contains the icons for the player. You can hover each of them to find out what they mean.
For example, the light blue icon on the left of this screenshot is used for the player set in the overlay that is always
shown.

The **player menu** button opens the player options. The most important of them is `Report`, which will report the
player to Cubelify. The player will then be flagged for you and other users.

### App Bar

The app bar contains buttons, allowing you to access some of the overlay's most important features.

![](/img/docs/overlay/getting-started/basic-usage/app-bar.png)

#### Menu

The first button opens the app's menu. It contains shortcuts to the other views the app has.

![](/img/docs/overlay/getting-started/basic-usage/menu.png)

#### Refresh Players

This button allows you to update the players' stats and other information. You can opt to only refresh the stats of
players from certain sources as well—for example, you may only want to update players from your own party.

![](/img/docs/overlay/getting-started/basic-usage/refresh-players.png)

#### Remove Players

This button allows you to remove players from a specific source from the overlay—for example, you may want to only
remove players who mentioned you in the chat.

![](/img/docs/overlay/getting-started/basic-usage/remove-players.png)

#### Options

This button opens the options menu, which contains some basic options which allow you to customize the behavior of the
overlay, including which game's stats are displayed, the specific mode(s), the statistic by which players are sorted,
and the sorting direction.

![](/img/docs/overlay/getting-started/basic-usage/options.png)

#### Search Players

This field allows you to manually add a player by their name to the overlay. All you have to do is type their name and
then press Enter.

![](/img/docs/overlay/getting-started/basic-usage/search-players.png)

:::tip

You can also add a player by typing `/w +username` (e.g. `/w +Metriusz`) in the Minecraft chat (Only works in Hypixel).

:::

## In Game

To show the stats of players in game, just join a queue and then type `/who`. Optionally, you can enable `Auto Who` by
going to `Settings` -> `Basic` -> Scroll down to `Auto Who`. It should automatically type `/who` for you once you join a
Bed Wars queue.

![](/img/docs/overlay/getting-started/basic-usage/who.png)

Players in that queue will then automatically be added to the overlay and their stats will be shown.

![](/img/docs/overlay/getting-started/basic-usage/in-game.png)
