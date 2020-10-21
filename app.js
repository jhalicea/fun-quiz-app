//storage object
const questionDB = {

  questions: [
    {
      question: 'What color is broccoli?',
      answers: [
        'red',
        'orange',
        'pink',
        'green'
      ],
      correctAnswer: 'green'
    },
    {
      question: 'What is the current year?',
      answers: [
        '1970',
        '2015',
        '2020',
        '2005'
      ],
      correctAnswer: '2020'
    },
    {
      question: 'What is the current year?',
      answers: [
        '1970',
        '2015',
        '2020',
        '2005'
      ],
      correctAnswer: '2020'
    },
    {
      question: 'What is the current year?',
      answers: [
        '1970',
        '2015',
        '2020',
        '2005'
      ],
      correctAnswer: '2020'
    },
    {
      question: 'What is the current year?',
      answers: [
        '1970',
        '2015',
        '2020',
        '2005'
      ],
      correctAnswer: '2020'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

//reference to the DOM's injection site
const mainContainer = $('main');

// render card into DOM
render = () => {
  //This function generates the view each time the store is updated
  if (!questionDB.quizStarted) {
    //render the start page
    mainContainer.html(generateStartPageTemplate(questionDB));
  } else if (questionDB.quizStarted) {
    //render quiz 
  }
};

const generateStartPageTemplate = (dataSet) => {
  //view the starting page that will include. Welcome and short description. 
  let startPageHTML = `
    <article id="startPage">
      <h1>Basic Foreign Exchange Market Quiz</h1>
      <div class="quizDescription">
        <p>This is a basic foreign exchang market quiz</p>
        <p>There will be ${dataSet.questions.length} questions</p>
        <p>Click the button below to begin!</p>
      </div>
      <button id="start">Start Quiz</button>
    </article>
  `;
  
  return startPageHTML;
};

//HandleStart Quiz button
mainContainer.on('click', 'button#start', (event) => {
  //prevent from from submitting
  event.preventDefault();
  //Generate question-view
  mainContainer.html(generateQuestionTemplate(questionDB));
})



const generateQuestionTemplate = (dataSet) => {
  //Will  generate the questions on each page
  //keep track of which question we are on
  //keep track of right and wrong answers.
  //display answer right or wrong 
  //Submit button


  //Based on the question number that the user is on:
  let currentQuestionNumber = dataSet.questionNumber;
  let currentQuestionObj = dataSet.questions[currentQuestionNumber];
  let answerOptions = currentQuestionObj.answers;
  let correctAnswer = currentQuestionObj.correctAnswer;

  // find the corresponding question-object in the questionDB
  // Generate the question-page view
  let questionPageHTML = `
    <form>
      <h2>Question ${currentQuestionNumber + 1}:</h2>
      <h3>${currentQuestionObj.question}</h3>

      <fieldset id="answer-choices">`;
  
  // 🚧
  // Access the answer options from the question object,
  
  answerOptions.forEach(answerOption => {
    // For each answer, generate the html and add to 'questionPageHTML'
  })
  // 🚧
    
  questionPageHTML += `
      </fieldset>
      <div>
        <p>Question ${dataSet.questionNumber + 1} of ${dataSet.questions.length}</p>
      </div>
      <div>
        <button type="submit" class="submitBtn">
          Submit Answer
        </button>
      </div>
    </form>`;

  return questionPageHTML;
};

//Called upon an array's item.
//Will generate radio-button based answer option
const generateAnswerSetHTML = (questionItem) => {
  let answerOption = `
      <div class="response-item">
        <input type="radio" id="answer-choice-${VALUE}" name="answer-choice" value="${VALUE}">
        <label for="answer-choice-${VALUE}">${VALUE}</label>
      </div>
      `;
}

const handleQuestionSubmit = () => {
  //handles the question submit button
  //prevents default form submission
  //checks if the selected answer matches the correct answer
  //updates tracking info: player score, right answers, 
      // wrong answers, question number
}

function viewQuestionCorrect() {
  //display if question is correct
  //celebratory image
  //show current score
  //display next question
};

function viewQuestionWrong() {
  //display if question is wrong
  //Sad image
  //Show current score
  //show the correct answer
  //display the next question button
};

function viewEndGame() {
  //Diplay a tally of the score
  //Display pass or fail. >= 4 pass.  
  //Reset button
};

$(render);

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 * 
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates
function returnHTMLTemplates() {
  // adfafad
};
/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)