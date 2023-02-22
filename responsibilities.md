# Data

## Data layer

- List of monthly goals

  - Title (string)
  - Description (string)
  - Status isCompleted (boolean)

- List of weekly sub-goals
  - Title (string)
  - Description (string)
  - Status isCompleted (boolean)

## Data modifications

- Delete monthly goal
- Add monthly goal
- Modify monthly goal
- Add weekly sub-goal to monthly goal
- Modify weekly sub-goal in monthly goal
- Delete weekly sub-goal from monthly goal

# Components

## App

- Render the entire application.

## Layout

- Render the main content of the page

## Navbar

- Render the navigation bar.
- Provide links to the Home and Goals pages.

## HomePage

- Render the list of monthly goals.
- Render the form to add a monthly goal.

## MonthlyGoals

- Receives the list of monthly goals
- Receives the add monthly goal action creator
- Receives the delete monthly goal action creator
- Receives the modify monthly goal action creator
- Sends each monthly goal to MonthlyGoalItem component
- Sends addMonthlyGoal function to "Add" button

- Allow users to add new monthly goals.
- Allow users to delete existing monthly goals.
- Allow users to update the name and description of existing monthly goals.
- Allow users to expand/collapse monthly goals to show/hide their corresponding weekly sub-goals.

## MonthlyGoal

- Receives the monthly goal object
- Receives the delete monthly goal action creator
- Receives the modify monthly goal action creator
- Shows the monthly goal name in a heading
- Shows the list of WeeklyGoalItem components for each weekly goal associated with this monthly goal
- Shows a button to delete the monthly goal
- Shows a button to modify the monthly goal

- Render a single monthly goal.
- Show the name and description of the goal.
- Show the progress of the goal based on its weekly sub-goals.
- Allow users to expand/collapse the goal to show/hide its corresponding weekly sub-goals.

## WeeklyGoal

- Receives the weekly goal object
- Receives the delete weekly goal action creator
- Receives the modify weekly goal action creator

- Shows the weekly goal name
- Shows a button to delete the weekly goal
- Shows a button to modify the weekly goal
- Allow users to mark the sub-goal as completed.

## Button

- Receives an action
- Shows the user action ("Delete", "Add" or "Modify") inside a button
- On click executes the received action
