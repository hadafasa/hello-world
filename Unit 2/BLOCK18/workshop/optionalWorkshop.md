## Manual Test Suite for Puppy Bowl Web Application </br>

## Feature: Main Page </br>
// Requirement: Should show a nicely formatted list of all players </br>

// Functional Test: Check that the main page displays a list of all players in a formatted manner </br>
- Expected Result: All players should be displayed in a formatted list with their name, breed, assigned team (if any), and a "See details" and "Remove" button next to each player </br>

// Requirement: Each player on the roster should be shown with two buttons: </br>
- A "See details" button that lets us view the details for that player. This should show at least: </br>
- The player's name, breed, and assigned team (or "unassigned" if they do not have a team) </br>
- A larger version of the picture </br>
- A button to go back to the main list </br>

// Functional Test: Check that the "See details" button for each player displays the player's details, including name, breed, assigned team (or "unassigned"), and a larger version of the picture </br>
- Expected Result: Clicking on the "See details" button should display the player's details in a new view, which includes their name, breed, assigned team (if any), and a larger version of the picture. There should also be a button to go back to the main list. </br>

// Functional Test: Check that the "Remove" button for each player removes the player from the roster </br>
- Expected Result: Clicking on the "Remove" button for a player should remove that player from the roster without a page refresh. </br>

## Feature: Adding Player(s) </br>
// Requirement: There should be a form on the page that allows us to add a new player. </br>
- The form should have at least two inputs and a button: </br>
- One input for the player name </br>
- One input for the player's breed </br>
- A submit button to send the data and add the player to the roster </br>

- Functional Test: Check that the "Add Player" form is displayed on the page </br>
- Expected Result: The "Add Player" form should be displayed on the page with at least two inputs (for name and breed) and a "Submit" button. </br>

// Functional Test: Check that submitting the "Add Player" form adds a new player to the roster </br>
- Expected Result: Entering a name and breed into the "Add Player" form and hitting "Submit" should add a new player to the roster without a page refresh. </br>

- Requirement: When entering a name and breed into the form and then hitting "submit", the new player should pop up in the roster without a page refresh. </br>

## Feature: Removing Player(s) </br>
// Requirement: When removing a player, they should disappear from the roster without a page refresh. </br>

// Stretch Goals: </br>
- Feature: Single Player View: </br>
- Requirement: Show all of the teammates (all players assigned to the same team) as the current player. </br>

// Functional Test: Check that the single player view displays all of the teammates for the current player </br>
- Expected Result: Clicking on a player's name in the roster and then clicking on the "See details" button should display a single player view that includes all of the player's teammates. </br>

- Requirement: Add a dropdown so that users can change the team assignment for the current player. </br>

// Functional Test: Check that the dropdown menu allows users to change the team assignment for the current player </br>
- Expected Result: The dropdown menu should allow users to select a team to assign the current player to, and the team assignment should change in the single player view and in the roster immediately, without a page refresh. </br>

// Feature: Adding Player's Images: </br>
- Requirement: Add an input to the form which lets us provide an image URL when adding a player. The linked image should show up as the player's portrait </br>
- Test that the form has a field for player name and player bread </br>
- Test that the form has a button to submit the data and add the player to the roster </br>
- Test that after adding a new player, the player is displayed in the roster without a page refresh </br>
- Test that the player's name and breed are displayed correctly in the roster after adding them </br>
- Test that the player's portrait is not displayed if no image URL is provided </br>
- Test that if an image URL is provided, the player's portrait is displayed correctly in the roster </br>
- Test that if the form is submitted with empty fields, an error message is displayed prompting the user to fill in all required fields </br>