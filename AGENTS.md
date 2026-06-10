# AGENTS.md

## Project Overview

Create a simple calendar web application using React and Vite.

The application should:

* Display a monthly calendar.
* Allow users to move to previous and next months.
* Highlight today's date.
* Allow users to click a day and add a short text note.
* Store notes in browser localStorage.
* Be responsive for desktop and mobile devices.

---

## Technology Stack

* React 19
* TypeScript
* Vite
* CSS Modules
* localStorage for persistence

Do not use:

* Redux
* Context API
* External calendar libraries
* Backend services

---

## Folder Structure

src/
├── components/
│   ├── Calendar.tsx
│   ├── CalendarGrid.tsx
│   ├── DayCell.tsx
│   └── NoteModal.tsx
├── hooks/
│   └── useCalendar.ts
├── types/
│   └── calendar.ts
├── utils/
│   └── dateUtils.ts
├── App.tsx
└── main.tsx

---

## Coding Standards

* Use TypeScript only.
* Use functional React components.
* Use React hooks.
* Avoid class components.
* Keep components under 200 lines when possible.
* Prefer reusable utility functions.
* Add comments only when logic is non-obvious.

---

## UI Requirements

### Calendar View

* Show current month by default.
* Show weekday headers:

  * Sun
  * Mon
  * Tue
  * Wed
  * Thu
  * Fri
  * Sat

### Navigation

Provide:

* Previous Month button
* Next Month button

### Today Highlight

* Today's date should have a visible border.

### Notes

When a day is clicked:

* Open a modal dialog.
* Allow entering a short note.
* Save note to localStorage.
* Display an indicator on dates that contain notes.

---

## State Management

Use:

* useState
* useEffect

Do not introduce additional state management libraries.

---

## Styling

* Clean minimalist appearance.
* Mobile-first design.
* Use CSS Grid for calendar layout.
* Support screen widths down to 320px.

---

## Build Requirements

Application must build successfully using:

npm install

npm run dev

npm run build

npm run preview

---

## Definition of Done

The task is complete when:

1. Calendar displays correctly.
2. Month navigation works.
3. Today's date is highlighted.
4. Notes can be created and edited.
5. Notes persist after browser refresh.
6. npm run build completes without errors.
7. No TypeScript errors exist.
