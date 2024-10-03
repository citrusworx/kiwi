# SugarCubes Documentation

## Overview

**SugarCubes** are the fundamental nodes in Sugar’s visual scripting system, designed to represent various actions, conditions, and data flows within your application. Each SugarCube serves as a building block in your app’s logic, allowing you to visually map out how your app behaves and responds to user interactions.

SugarCubes can be connected together to create sequences, branches, and loops, making it easy to design complex logic without traditional code.

## Types of SugarCubes

### 1. **Action SugarCubes**

Action SugarCubes are responsible for triggering specific behaviors or tasks in your application. These can include:

- **Navigation**: Redirect to another page or view within the app.
- **Data Processing**: Send or retrieve data from APIs, databases, or user input.
- **UI Interactions**: Show, hide, or update a component on the screen (e.g., display a popup, enable/disable a button).

### 2. **Event SugarCubes**

Event SugarCubes listen for user actions or system triggers that prompt the app to perform certain actions. These can include:

- **On Click**: When a button or component is clicked.
- **On Load**: When a view, page, or component is loaded or becomes visible.
- **Custom Events**: Any custom-defined events triggered by the user or specific app actions.

### 3. **Condition SugarCubes**

Condition SugarCubes help control the flow of logic based on certain conditions or checks. These allow for branching behavior, enabling your app to take different actions depending on the situation. Examples include:

- **If/Else Conditions**: Check if a specific condition is true or false (e.g., "If user is logged in, go to Dashboard").
- **Comparison**: Compare values, like checking if a number is greater than or less than another number.
- **Switch/Case**: Handle multiple potential values and execute different flows based on each case.

### 4. **Data SugarCubes**

Data SugarCubes manage and transform the data used within your application. They help you handle user input, perform calculations, and interact with external APIs or databases. These SugarCubes may include:

- **Variables**: Store and manipulate data values.
- **Data Binding**: Link UI components with underlying data models to ensure changes are reflected automatically.
- **Transformation**: Perform calculations, string manipulations, or data parsing before passing data to other nodes.

### 5. **Control Flow SugarCubes**

Control Flow SugarCubes help manage the sequence of operations in your visual scripting, allowing for looping, waiting, and branching. Examples include:

- **Loops**: Repeat a sequence of actions (e.g., "For Each Item in List").
- **Delays & Timers**: Introduce a wait time or interval before executing the next action.
- **Break/Continue**: Control loop execution by breaking out of a loop or skipping to the next iteration.

## Connecting SugarCubes

To build your app’s logic, you need to connect SugarCubes together using **wires**, which represent the flow of logic or data. SugarCubes generally have the following connection points:

- **Input Connectors**: Points where a wire connects to trigger the SugarCube’s action or behavior.
- **Output Connectors**: Points where the SugarCube sends the result of its action, triggering subsequent SugarCubes.

### Example Connections

1. **Event → Action**: Connect an "On Click" Event SugarCube to a "Navigate" Action SugarCube to redirect the user when they click a button.
2. **Condition → Action**: Connect a "If Condition" SugarCube to two different Action SugarCubes, one for the "true" path and another for the "false" path.
3. **Data → UI Interaction**: Link a Data SugarCube containing user input to an Action SugarCube that displays the data in a specific UI component.

## Commonly Used SugarCubes

### 1. **Button Click**

- **Type**: Event
- **Description**: Triggers an action when a specified button is clicked.
- **Usage**: Connect the "Button Click" SugarCube to any Action SugarCube to define what happens when a user clicks the button.

### 2. **Set Variable**

- **Type**: Data
- **Description**: Sets or updates a variable with a specified value.
- **Usage**: Use this SugarCube to store user input, results from API calls, or any other data that needs to be referenced throughout the app.

### 3. **API Call**

- **Type**: Action
- **Description**: Makes a request to an external API and retrieves data.
- **Usage**: Connect this SugarCube to an Event or Condition SugarCube to initiate the API call, and then connect its output to other SugarCubes to handle the response.

### 4. **Condition Check (If/Else)**

- **Type**: Condition
- **Description**: Checks if a condition is true or false and branches the flow accordingly.
- **Usage**: Use this SugarCube to control the flow of your logic based on specific criteria, such as user authentication status.

### 5. **Loop Through Items**

- **Type**: Control Flow
- **Description**: Repeats an action for each item in a collection (e.g., an array or list).
- **Usage**: Use this SugarCube to iterate over data items, such as rendering a list of products on a page.

## Tips & Best Practices

- **Modularize Your Logic**: Break down complex flows into smaller, reusable groups of SugarCubes to maintain clarity and make debugging easier.
- **Name Your SugarCubes**: Use descriptive names for each SugarCube to understand what they do at a glance.
- **Test Frequently**: Regularly test your flows as you build them to quickly identify and resolve any issues.

## Conclusion

SugarCubes make visual scripting easy and efficient in Sugar by providing a rich set of nodes that cover all the necessary aspects of application logic. Whether you're building a simple interaction or a complex data-driven app, SugarCubes provide a flexible, no-code/low-code way to define how your app behaves and responds to user input.

To dive deeper into each type of SugarCube and explore their properties and options, please refer to the full [SugarCubes Documentation](https://docs.sugarapp.com/sugarcubes). Happy building