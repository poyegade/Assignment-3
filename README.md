# Soccer Team Manager

A lightweight, responsive web app for organizing a soccer team roster. Add players by name, keep track of the squad size, and remove players when the roster changes.

## Features

- Add players to the roster by entering a name.
- Remove individual players from the roster.
- See the roster count update as players are added or removed.
- Get clear feedback when the roster is empty.
- Use the app on desktop, tablet, or mobile screens.
- No dependencies, build tools, or account required.

> The roster is held in the current browser page and resets when the page is reloaded.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/poyegade/Assignment-3.git
   ```

2. Open the project folder:

   ```bash
   cd Assignment-3
   ```

3. Open `index.html` in a modern web browser.

Alternatively, open the project folder in a code editor and use its local web server or preview extension.

## Usage

1. Enter a player's name in the **Player name** field.
2. Select **Add Player** to add the player to the roster. The field clears after the player is added.
3. Select **Remove** next to a player to remove them from the roster.
4. The player count and empty-roster message update automatically.

Names containing only whitespace are not added.

## Technologies

- **HTML5** for the page structure and form.
- **CSS3** for the responsive layout, cards, and visual styling.
- **Vanilla JavaScript** for adding and removing players and updating the roster display.
