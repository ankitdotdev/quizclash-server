# QuizClash – Backend (In Progress)

QuizClash is a real-time multiplayer MCQ platform where users compete individually in live quiz rooms with synchronized timers, instant scoring, and dynamic leaderboards.

The system focuses on:
- Real-time synchronization
- Data integrity
- Accurate scoring
- Scalable room-based architecture


---

## Project Overview

QuizClash simulates a competitive test environment.

Multiple users join a live room, answer timed MCQs simultaneously, and receive instant score updates based on correctness and response time.

The backend ensures:
- No duplicate answers
- No late submissions
- Reliable score calculation
- Clean relational modeling


---

## Problem Statement

Most quiz platforms are static or solo-based. They lack:
- Real-time competition
- Instant scoring
- Live ranking
- Structured performance tracking

There is a need for a synchronized multiplayer quiz system that ensures fairness, speed, and engagement.


---

## Solution

QuizClash provides:

- Room-based real-time quiz sessions
- Admin-controlled question flow
- Timed question broadcasting
- Instant score calculation
- Live leaderboard updates

The backend ensures:
- One answer per user per question
- Timestamp-based validation
- Score consistency
- Full answer history tracking


---

## Core Features (Current Scope)

- Real-time individual multiplayer quiz
- Room creation with unique code
- Admin-controlled quiz start
- Timed questions
- One answer per user per question
- Instant score update
- Live leaderboard
- Final ranking display


---

## User Roles

### Admin
- Creates room
- Adds questions
- Starts quiz
- Controls game flow

### Player
- Joins room using code
- Answers questions within time limit
- Views live score and ranking


---

## High-Level System Flow

1. Admin creates room  
2. Questions are attached to the room  
3. Players join room  
4. Admin starts quiz  
5. Question is broadcast via Socket.IO  
6. Players submit answer  
7. Backend validates:
   - Within time limit
   - Not duplicate
8. Score updates  
9. Leaderboard broadcast  
10. Game ends and final ranking is shown  


---

## Tech Stack

Backend:
- Node.js
- Express
- Socket.IO

Database:
- MySQL / PostgreSQL (Relational)

Frontend:
- Next.js

Hosting:
- Backend: Render
- Frontend: Vercel


---

## Database Design (Core Tables)

- Users
- Rooms
- Room Questions
- Room Participants
- Player Answers

Design Principles:
- Score stored separately for fast leaderboard reads
- Answer history stored for validation and analytics
- Unique constraints prevent duplicate answers
- Foreign keys maintain relational integrity


---

## Real-Time Architecture

Socket.IO handles:
- Room join events
- Question broadcast
- Timer synchronization
- Answer submission
- Score updates
- Game completion event

Each quiz room maps to a Socket.IO room to isolate events.


---

## Data Integrity Strategy

- UNIQUE(room_id, user_id) prevents duplicate joins
- UNIQUE(room_id, question_id, user_id) prevents duplicate answers
- Score updated only after validation
- Timestamp validation prevents late submissions


---

## Scalability Considerations

- Room isolation using socket rooms
- Indexed foreign keys
- Lightweight relational schema
- Stateless backend for horizontal scaling


---

## Security Considerations

- Role-based access control
- Room code validation
- Password-protected rooms
- Server-side answer validation
- Prevention of multiple submissions


---

## Flow Chart

[<img width="4284" height="17569" alt="QuizClash Flow Chart" src="https://github.com/user-attachments/assets/eaf9d605-8ec9-4d9e-b155-bc0f39ec806c" />](https://excalidraw.com/#json=fvYtSuAZbKa2NGNxSx4g6,Fyt3knk1B9wuqlf086Ms8A)


---


## Schema Design

https://dbdiagram.io/d/QuizClash-698b33ebbd82f5fce2439d09

---
## Future Scope

- Team battles
- Performance analytics


