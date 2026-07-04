# Grocery List App

The Grocery List App is a simple web application that allows users to create and manage their grocery shopping list. Users can add new grocery items, mark them as completed once purchased, and remove items that are no longer needed. The application provides a clean and responsive interface, making it easy to keep track of shopping tasks.
 
## Design Process

This application is designed for anyone who wants a quick and convenient way to manage a grocery shopping list. Other than that the grocery list can serve as reminder of what user wants to purchase so that user wont forget what they want to buy so that user dont need to go double trip to the shop.

## User Story

- As a shopper, I want to add grocery items so that I can remember what I need to buy.
- As a shopper, I want to mark grocery items as completed so that I know which items I have already purchased.
-As a Shopper, I want to be able to unmark the items if i accidentally press the wrong one.
- As a shopper, I want to delete grocery items so that I can remove items I no longer need.

## Features

This application provides a simple interface for managing grocery items through a RESTful API.
 
### Existing Features
-Add Item – allows users to add new grocery items to the shopping list.
-View Items – displays all grocery items currently stored in the application.
-Mark Item – allows users to mark grocery items as completed using a checkbox.
-Unmark Item - allows users to unmark grocery items in case user accidentally check it.
-Delete Item – allows users to remove grocery items from the list.
-Input Validation – prevents users from submitting empty grocery items by displaying an error message.
-Responsive Layout – provides a user-friendly interface across desktop and mobile devices.
-Easy to use- Allows Desktop User to press enter after typing the item in the input box so that user dont need to use mouse to press add button.

In addition, you may also use this section to discuss plans for additional features to be implemented in the future:

### Features Left to Implement
- Edit Existing Grocery Items
- Can Have sperate section where user can retrieve Grocery List According To Grocery List ID and also another section where user can create a new list.

## Technologies Used

- HTML5
Used to structure the user interface.

- Tailwind CSS(https://tailwindcss.com)
Used to create a responsive and modern user interface with utility classes.

- JavaScript(https://developer.mozilla.org/en-US/docs/Web/JavaScript)
Used to handle user interactions, DOM manipulation, and API requests.

- Fetch API(https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
Used to communicate with the backend REST API.

- Node.js(https://nodejs.org)
Provides the runtime environment for the backend server.

- Express.js(https://expressjs.com)
Used to build the RESTful API and serve static frontend files.

## Testing

- Add Item
    1) Open the application.
    2) Enter a grocery item into the input field.
    3) Click the Add button.
    4) Verify that the new item appears in the grocery list.

- Empty Input Validation
    1) Open the application.
    2) Leave the input field empty.
    3) Click the Add button.
    4) Verify that the message "Please enter an item first!" is displayed.

- Mark Item
    1) Add a grocery item.
    2) Click the checkbox beside the item.
    3) Verify that the box is check updated.

- UnMark Item
    1) Refresh The Page
    2) Click the checkbox beside the item.
    3) Verify that the The box is uncheck updated.

- Delete Item
    1) Add a grocery item.
    2) Click the Delete button.
    3) Verify that the item is removed from the grocery list.

- API Testing
    1) GET /items returns all grocery items.
    2) POST /items successfully creates a new grocery item.
    3) PUT /items/id updates the completion status of an existing item.
    4) DELETE /items/id removes the selected grocery item.

## Credits

### Content
- Used Gpt To Help Me With The ReadMe File.

### Media
- No external images or media were used in this project.

### Links
Figma Wireframe: https://www.figma.com/design/y3YkS0OmFBP8hZjgcoyrq1/grocerylist?node-id=0-1&t=mCmtdYAMwU3S9PbX-1

GitHub Repository: https://github.com/RZNCQ/FED_GroceyList

Live Demo (Render): https://fed-groceylist.onrender.com

### Acknowledgements

- I received inspiration for this project from Forgetting Grocery Items My Mom Asked To Get And Its Quite Annoying to Go for Another Round Trip To The Supermarket As The Supermarket Is Quite a Distance. Thus It Inspired me to came out with the grocery list app to keep track of which item already in my supermarket trolley or which item have not yet taken.