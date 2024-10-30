# README

This is a sample app written in Rails and React in response to the assignment here:
https://you.ashbyhq.com/Stepful/assignment/9d2ccf66-1b81-4483-9564-b72495bb233a

I have created a postgres database with several tables:
Coach
- id
- name
- phone number
Student
- id
- name
- phone number
Timeslot
- start time
- coach_id
- student_id

A few example users can be created with the seeds.rb script.

I considered merging Coach and Student into one table called User - but as this product scales the two tables will diverge significantly and the similarities may become less important. In the far future, it may be useful to have a User table which owns several 'coach' and 'student' roles, perhaps in different departments or subject matters.

The React app calls several Rails routes in order to get and display data. In a completed product, I might have been more explicit about creating a ReSTfully routed API, but since the only client here is the built-in react app, that seemed like overkill.

Starting from the root url, you can choose which person to log in as, and in a coach role, you may create a new timeslot that will be available to a student to book.

Next steps:
Going forward, I'd like to display
- a coaches upcoming (unbooked) timeslots for their review, and allow deletion
- a coaches upcoming (booked) timeslots for their review, displaying the student's phone number so the two can connect
- a student page where they can see a list of available timeslots by coach, and book them, as well as a list of their own upcoming booked timeslots with coache's phone number so the two can connect.

Interviewer notes
I am obviously a React-beginnger, so I hope you will forgive some of the crudity here. I limited myself to two days work because I thought it more important that you see what I can do in a few hours rather than what I can polish in a full week of solid work.
