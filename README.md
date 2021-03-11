# Getting Started with H Card Builder

This project developed by React.js and Typescript for creating a card using the information of a user.

## Used programming languages & libraries

Material.ui has been used as a UIKit.\
Jest and Enzyme has been used for testing purposes.\
Hooks has been used in order to functional component programming.\
Typescript has been used for adding type checking to Javascript.\

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

## Assupmtions

Detailed information which is used to create the card - will be entered by the user - can be found in `src\data\data.json`:

Assumped that `phone number` must be started by `0` and 10 numbers.\
Assumped that `post code` must be 4 numbers.\
`Max` shows the maximum number of characters allowed for each field.\
`Equal` shows the exact number of characters for each field.\
`Upper` means that the character's field should be displayed in uppercase.\
Assumped that all fields must be filled until the card has been created.

Assumped that image size must not be exceeded more than 80K and its format must be one the following formats:\
.jpg\
.jpeg\
.gif\
.png\
.tiff\
.jfif

Test has been developed and the test data can be found in `src\data\testData.json`.

The webpage is mobile-responsive.
