# Interactive Quiz App

A dynamic quiz application built using **HTML, CSS, and JavaScript**. Users can select quiz categories, difficulty levels, and the number of questions. After completing the quiz, the app displays the score with a smooth animation and allows retrying the quiz.

## Features

- Choose **category**, **difficulty**, and **number of questions**.  
- Dynamic quiz fetched from Open Trivia Database API.  
- Displays current question and total questions.  
- Highlights correct and wrong answers with **SweetAlert2** feedback.  
- Shows **final score** after completing the quiz.  
- **Retry button** (arrow) to start a new quiz.  
- Fully responsive with animated background and wave effects.  
- Styled with **Bootstrap** and custom CSS.  

## Technologies

- HTML5  
- CSS3 (custom + Bootstrap)  
- JavaScript (ES6 Modules)  
- [SweetAlert2](https://sweetalert2.github.io/) for notifications  
- Open Trivia Database API  

## Project Structure

quiz-app/
│
├─ index.html # Main HTML file
├─ css/
│ ├─ bootstrap.min.css
│ └─ style.css # Custom styles
├─ js/
│ ├─ index.js # Main entry point
│ ├─ setting.js # Handles quiz settings and API calls
│ ├─ question.js # Handles quiz questions and user interactions
│ └─ result.js # Displays final score and handles retry
└─ README.md

## How to Run
1. Clone the repo:
   git clone https://github.com/YOUR_USERNAME/interactive-quiz.git
2. Open `index.html` in your browser.

