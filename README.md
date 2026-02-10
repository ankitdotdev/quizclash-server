# QuizClash BACKEND- In Progress
QuizClash is a real-time multiplayer MCQ platform where users compete solo or in teams, answering questions under time pressure with live scoring, rankings, and instant feedback.


STRUCTURE
1. Project Overview
2. Problem Statement
3. Solution
4. Core Features
5. User Roles
6. High-Level System Architecture
7. Tech Stack
8. Database Design (high level)
9. API Overview
10. Real-Time Flow
11. Scalability & Performance Considerations
12. Security Considerations
13. Future Scope
14. Local Setup (later)

---

# **QuizClash**

## **Project Overview**

QuizClash is a real-time multiplayer MCQ platform where users compete individually or in teams to test their knowledge under time pressure. Players join live rooms, answer questions simultaneously, and see instant scores and rankings as the game progresses.

The platform is designed to make learning engaging, competitive, and measurable through real-time feedback and leaderboards.

---

## **Problem Statement**

Most students and learners consume content through books, PDFs, and videos, but rarely get an effective way to test and reinforce what they have learned. Traditional quiz apps are usually static, solo-based, and lack engagement, while classroom tests lack excitement and instant feedback.

There is a need for a platform that combines **learning, competition, and real-time interaction** so that users can test themselves in a fun but high-pressure environment that improves retention and performance.

---

## **Solution**

QuizClash turns learning into a live competition.
Instead of passively consuming content, users actively participate in real-time quizzes, competing against friends, classmates, or teammates.

By introducing live rooms, timers, instant scoring, and rankings, QuizClash creates a game-like environment that:

* Improves focus
* Encourages repeated practice
* Makes learning enjoyable and memorable

---

## **Core Features**

* Real-time MCQ gameplay
* Individual, group, or team-based matches
* Live rooms with access codes and passwords
* Admin-hosted quiz sessions
* Live timers for each question
* Instant scoring and ranking
* Leaderboards for individuals and teams
* Question upload by admin (Excel or manual)

---

## **User Roles**

### **Admin**

* Creates rooms
* Uploads questions
* Starts and controls the game
* Monitors players and scores

### **Player**

* Joins rooms using a room code
* Plays quizzes individually or as part of a team
* Answers questions in real time
* Views live scores and rankings

---

## **High-Level System Flow**

1. Admin creates a quiz room and uploads questions
2. A room code and password are generated
3. Players join the room using the code
4. Admin starts the quiz
5. Questions are broadcast in real time
6. Players submit answers within the time limit
7. Scores update live
8. Final rankings are displayed when the game ends

---

## **Tech Stack**

**Backend**

* Node.js

**Frontend**

* Next.js

**Database**

* PostgreSQL or MySQL (SQL-based for relational data and analytics)

**Real-Time Communication**

* Socket.IO

**Hosting**

* Backend: Render
* Frontend: Vercel

---

## **Database Design (High Level)**

The system is designed using relational modeling for scalability and flexibility.

**Main Entities**

* Users
* Rooms
* Room Participants
* Teams
* Questions
* Room Questions
* Answers
* Scores

This allows:

* Users to join multiple rooms
* Teams to exist inside rooms
* Accurate scoring and ranking
* Match history and analytics

---

## **Real-Time Flow**

Socket.IO is used to handle:

* Player joins and leaves
* Question broadcasts
* Countdown timers
* Answer submissions
* Live score updates
* Final result announcements

This ensures all players stay synchronized during a live match.

---

## **Scalability & Performance Considerations**

* Socket rooms are used to isolate game sessions
* Database indexes on room, user, and score tables
* Stateless backend with real-time layer
* Support for horizontal scaling of game servers

---

## **Security Considerations**

* Room access protected by codes and passwords
* Role-based access (Admin vs Player)
* Validation of answer submissions
* Prevention of duplicate or late answers

---

## **Flow Chart**

<img width="4284" height="17569" alt="image" src="https://github.com/user-attachments/assets/eaf9d605-8ec9-4d9e-b155-bc0f39ec806c" />




---

## **Future Scope**

* AI-based question generation
* Public tournaments
* User profiles and match history
* Skill ratings
* Anti-cheat mechanisms
* Mobile app

---

--- To be continued...
