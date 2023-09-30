# Resume creater

## Elevator pitch

Have you ever found it is so hard to create a good resume? The Resume creater application is all you will need! You could log in to your own account in this website and save all your work! You just need to fill out a few question about yourself and then the website will just created a resume for you!

## Design

![Resume creater diagram](Resume-frame.jpg)

## Key features

- User could create an account and log in to the website
- User could save their work and resume
- User could edit their resume
- User could download their resume
- Results are persisently stored

## Technologies

- **HTML** - Use the correct TML structre for this application.
- **CSS** - Use CSS to make the website looks better.
- **JavaScript** - Use JavaScript to make the website more interactive.
- **Service** - Backend service with endpoints for:
  - login
  - retrieving choices
  - submitting questions
- **DB** - Store users, their answers, in database.
- **Login** - Register and login users. Credentials securely stored in database. Can't answer the question unless authenticated.
- **WebSocket** - Both the client and the server can send and receive data at the same time.
- **React** - Application ported to use the React web framework.

## HTML deliverable

For this deliverable I built out the structure of my application using HTML.

- **HTML pages** - Two HTML page that represent the ability to login and submit the answers.
- **Links** - The login page automatically links to the question page. The question page contains links for every questions.
- **Text** - Each of the questions is represented by a textual description.
- **Images** - No image yet. 😔
- **Login** - Input box and submit button for login.
- **Database** - The answer represent data pulled from the database.
- **WebSocket** - The answers represent the tally of realtime.
