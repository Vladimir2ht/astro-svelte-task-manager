# Test Home Assignment: Full-Stack Developer (Astro, Svelte, Prisma, Node.js)

## Objective:
This assignment is not just a test, but an opportunity to evaluate your skills in full-stack development, mainly using Astro with Svelte for the frontend and server-side logic. You will also use Prisma with SQLite for database management. The task involves building a simple task management web application, a project that could potentially impact many users.

## Assignment:
You are tasked with building a web-based “Task Manager” application. This application will allow users to create, view, update, and delete tasks. Each task will have a title, description, priority (low, medium, high), and due date. Additionally, users should be able to mark tasks as completed or active.
Requirements:

1. ### Backend (Astro Server Actions + Prisma):
	• Use Astro’s Server Actions to handle server-side logic and asynchronous requests. You can find more details on server actions here.
	• Use Prisma ORM to manage an SQLite database.
	• The application should include the following server actions:
		◦ Create a new task.
		◦ Fetch all tasks.
		◦ Fetch a single task by ID.
		◦ Update a task by ID (mark it as completed, and edit title/description/priority).
		◦ Delete a task by ID.
	• Ensure validation and proper error handling using Zod or another validation library.

2. ### Frontend (Astro + Svelte):
	• Build the front end using Astro with Svelte components.
	• Ensure the front end uses server-side rendering (SSR) for optimal performance and SEO.
	• Create a simple and responsive UI where users can:
		◦ View all tasks in a list format.
		◦ Create a new task.
		◦ Update a task (change status, edit fields).
		◦ Delete a task.
		◦ Filter tasks by priority and completion status (e.g., view only high-priority or completed tasks).
	• Use Tailwind CSS for styling.

3. ### Database:
	• SQLite is used as the database to store tasks.
	• Set up a simple Prisma schema for the task model, which includes fields like title, description, priority, due date, and completion status.

4. ### Bonus (Optional):
	• Implement an OpenAI API integration where users can auto-generate a task description based on a given title.

5. ### Testing:
	• Write basic unit tests for server actions and Svelte components using Jest or another testing framework of your choice.
	• Ensure proper test coverage for the server actions and critical parts of the front end.

## Local Setup:
Provide clear instructions on how to run the application locally. Ensure the setup process includes the 

## following:
	• How to install dependencies and run the application.
	• Any necessary environment variables or configurations.
	• How to run tests locally.
	
## Note:
The final result should be one Astro application that uses server-side rendering and Astro server actions to handle asynchronous requests.

We understand that this assignment may cover a broad scope. You don’t have to complete everything — just focus on as much as you can within the given time frame. This is your opportunity to showcase your strengths and unique skills. Prioritize quality over quantity, and we look forward to seeing what you can do.

## Expectations:
	• The assignment should be completed in 5-7 days.
	• Ensure high-quality code with proper structure and readability.
	• Provide clear error messages and handle edge cases.
	• Follow best practices for working with Prisma, server actions, and Svelte.

## What will be evaluated:
	• Code quality and structure.
	• Use of Astro with server actions and Svelte.
	• API design and error handling.
	• UI design and responsiveness.
	• Use of testing frameworks and overall test coverage.
	• Clarity of the local setup instructions.

## Deliverables:
	1. A link to the GitHub repository with all the code.
	2. A short README file explaining your approach, any challenges you faced, and instructions on how to set up and run the project locally.

Good luck! We look forward to reviewing your submission.
(Task for 5 hours.)