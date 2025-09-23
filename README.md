# Interactive Science Quiz

An interactive quiz game featuring 10 science questions with immediate feedback, progress tracking, and a 70% passing threshold to challenge your scientific knowledge.

## Features

### Core Functionality
- **10 randomized questions** from a curated question bank
- **Exact spelling validation** for accurate assessment
- **Progress tracking** with visual progress bar
- **Skip functionality** for unknown questions
- **Real-time feedback** for correct, incorrect, and skipped answers
- **Pass/fail scoring** with 70% threshold requirement

### User Experience
- **Responsive design** that works on desktop and mobile devices
- **Auto-focus input** for seamless typing experience
- **Enter key submission** for faster interaction
- **Clean, modern interface** with gradient backgrounds
- **Visual feedback** with color-coded responses
- **Score visualization** with circular progress indicator

## Demo
[Live Demo](https://jericho066.github.io/interactive-science-quiz/)

## Technology Stack

- **HTML5** - Semantic structure and accessibility
- **CSS3** - Modern styling with flexbox, gradients, and animations
- **Vanilla JavaScript** - Quiz logic, DOM manipulation, and user interactions

## File Structure

```
science-quiz/
├── index.html          # Main HTML structure
├── script.js           # Quiz logic and functionality
├── style.css           # Styling and responsive design
└── README.md           # Project documentation
```

## How to Run

1. **Clone or download** the project files
2. **Open `index.html`** in any modern web browser
3. **Start the quiz** by clicking the "Start Quiz" button

No server setup or build process required - runs entirely in the browser.

## Quiz Rules

- **One question at a time** - Linear progression through questions
- **No returning** - Cannot revisit previous questions once answered/skipped
- **Exact spelling required** - Answers must match exactly (case-insensitive)
- **70% to pass** - Score 7 or more out of 10 questions correctly
- **Special case handling** - "Isaac Newton" accepts both "isaac newton" and "sir isaac newton"

## Browser Compatibility

Works on all modern browsers including:
- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+

## Customization Options

### Adding Questions
Edit the `questionsAndAnswers` array in `script.js`:

```javascript
const questionsAndAnswers = [
    { question: "Your question here?", answer: "exact answer" },
    // Add more questions...
];
```

### Modifying Pass Threshold
Change the passing score requirement in the `showResults()` function:

```javascript
const passed = score >= 7; // Change 7 to desired threshold
```

### Styling Changes
Modify colors, fonts, and layout in `style.css`. Key color variables are defined in the gradient backgrounds and button styles.

## Responsive Breakpoints

- **Desktop**: 769px and above - Full two-column layout
- **Mobile**: 768px and below - Single column, adjusted padding and font sizes

## Educational Value

This quiz covers fundamental scientific concepts suitable for:
- **Middle school students** (grades 6-8)
- **High school review** 
- **General knowledge assessment**
- **Science literacy evaluation**

## Future Enhancement Ideas

- **Timer functionality** for added challenge
- **Question categories** with topic selection
- **Difficulty levels** with varying question complexity
- **Score history tracking** using localStorage
- **Hint system** for educational support
- **Multiple choice options** alongside fill-in-the-blank
- **Audio feedback** for interactions
- **Certificate generation** for passing scores

## License

This project is licensed under <a href="https://github.com/jericho066/interactive-science-quiz/blob/main/LICENSE">MIT</a> License.
