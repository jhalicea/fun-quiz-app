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
  score: 0,
  incorrectAnswers: 0
};

//reference to the DOM's injection site
const mainContainer = $('main');

//right/wrong images
const celbratoryImg = 'https://123emoji.com/wp-content/uploads/2017/08/sticker-14-226.png';
const incorrectImg = 'https://k60.kn3.net/taringa/C/0/A/F/5/1/lighth/F53.jpg';

// render card into DOM
render = () => {
  //This function generates the view each time the store is updated
  if (!questionDB.quizStarted) {
    //render the start page
    mainContainer.html(generateStartPageTemplate(questionDB));
  } else if (questionDB.quizStarted) {
      if(questionDB.questionNumber < questionDB.questions.length){
        //render quiz 
        mainContainer.html(generateQuestionTemplate(questionDB));
      } else {
        //render end quiz page
        console.log('fire end of game');
        mainContainer.html(viewEndGame());
      }
    
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

//Handle Start Quiz button
mainContainer.on('click', 'button#start', (event) => {
  //prevent from from submitting
  event.preventDefault();
  //update quiz-started state
  questionDB.quizStarted = true;
  //Generate question-view
  mainContainer.html(generateQuestionTemplate(questionDB));
})

//stores the correct answer to the current question
let currentCorrectAnswer = '';

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
  currentCorrectAnswer = currentQuestionObj.correctAnswer;

  // find the corresponding question-object in the questionDB
  // Generate the question-page view
  let questionPageHTML = `
    <form>
      <h2>Question ${currentQuestionNumber + 1}:</h2>
      <h3>${currentQuestionObj.question}</h3>

      <fieldset id="answer-choices">`;
  
  // Access the answer options from the question object,
  answerOptions.forEach(answerOption => {
    // For each answer, generate the html and add to 'questionPageHTML'
    questionPageHTML += generateAnswerSetHTML(answerOption);
  })
    
  questionPageHTML += `
      </fieldset>
      <div>
        <p>Question ${dataSet.questionNumber + 1} of ${dataSet.questions.length}</p>
      </div>
      <div>
        <button type="submit" id="submitAnswerBtn" class="submitBtn">
          Submit Answer
        </button>
      </div>
    </form>`;

  return questionPageHTML;
};

//Called upon an array's item.
//Will generate radio-button based answer option
const generateAnswerSetHTML = (answer) => {
  let answerRadioButton = `
      <div class="response-item">
        <input type="radio" id="answer-choice-${answer}" name="answer-choice" value="${answer}">
        <label for="answer-choice-${answer}">${answer}</label>
      </div>
      `;
  return answerRadioButton;
}

//handles the question submit button
//checks if the selected answer matches the correct answer
  //updates tracking info: player score, right answers, 
      // wrong answers, question number
mainContainer.on('click', 'button#submitAnswerBtn', (event) => {
  //prevents default form submission
  event.preventDefault();

  //check answer
  checkAnswer();
});

//checks if the selected answer matches the correct answer
  //updates tracking info: player score, question number
  //conditionally calls view (right answer/ wrong answer)
const checkAnswer = () => {
  let selectedAnswer = $('[type=radio]:checked').val();

  //increment question number
  questionDB.questionNumber += 1;

  if (selectedAnswer === currentCorrectAnswer){
    //increment player score
    questionDB.score += 1;
    
    //call correct answer page
    viewQuestionCorrect()
  } else {
    //increment incorect answer count
    questionDB.incorrectAnswers += 1;
    
    //call wrong answer page
    viewQuestionWrong()
  }
}


function viewQuestionCorrect() {
  //display if question is correct
  //celebratory image
  //show current score
  //display next question button
  mainContainer.html(
    `
    <article class="correctAnswer">
      <h1>Correct!</h1>
      <img src="${celbratoryImg}" alt="celebratory image">
      <div class="scoreContainer">
        <h2>Score: ${questionDB.score}</h2>
        <h3>Correct: ${questionDB.score}</h3>
        <h3>Incorrect: ${questionDB.incorrectAnswers}</h3>
      </div>
      <button id="nextQuestionBtn" type="submit" class="submitButton">
        Next Question
      </button>
    </article>
    `
  )

};

function viewQuestionWrong() {
  //display if question is wrong
  //Sad image
  //Show current score
  //show the correct answer
  //display the next question button
  mainContainer.html(
    `
    <article class="correctAnswer">
      <h1>Nope!</h1>
      <h2>Mark this down as a learning opportunity</h2>
      <img src="${incorrectImg}" alt="faceplant image">
      <div class="scoreContainer">
        <h2>Score: ${questionDB.score}</h2>
        <h3>Correct: ${questionDB.score}</h3>
        <h3>Incorrect: ${questionDB.incorrectAnswers}</h3>
      </div>
      <button id="nextQuestionBtn" type="submit" class="submitButton">
        Next Question
      </button>
    </article>
    `
  )
  
};

//handle next question button
mainContainer.on('click', 'button#nextQuestionBtn', (event) => {
  console.log('next question button fired')
  //prevent form submission
  event.preventDefault();

  //load next question
  render();
} )


function viewEndGame() {
  //Diplay a tally of the score
  //Display pass or fail. >= 4 pass.  
  //Reset button
  let endGameTemplate = `
    <article class="endQuiz">
        <h1>End of Quiz</h1>
  `;

  if (didPlayerPass()){
    endGameTemplate += `
      <div class="pass">
        <h2 class="pass">Looks like you need more of a challenge!</h2>
        <img src=${celbratoryImg} alt="celebratory duck">
      </div>
    `;
  } else {
    endGameTemplate += `
    <div class="fail">
        <h2 class="fail">Looks like you aren't living up to your potential</h2>
        <img src=${incorrectImg} alt="faceplant">
      </div>
    `;
  }

  endGameTemplate += `
      <div class="scoreContainer">
        <h2>Score: ${questionDB.score}</h2>
        <h3>Correct: ${questionDB.score}</h3>
        <h3>Incorrect: ${questionDB.incorrectAnswers}</h3>
      </div>
      <button id="resetBtn" class="resetButton" type="reset">New Quiz</button>

    </article>
  `;

  //inject generated HTML
  mainContainer.html(endGameTemplate);
};

// determines if player passed
// returns true if player passed, else false
const didPlayerPass = () => {
  // >= 80% = pass
  const passRequirement = 0.8;

  //calculate pass/fail
  // (players-score/number of questions)
  let playerFinalScore = (questionDB.score/questionDB.questions.length);
  console.log('final score: ', playerFinalScore);
  console.log('pass requirement: ', passRequirement)
  console.log( ( playerFinalScore >= passRequirement) ? true : false )
  return ( playerFinalScore >= passRequirement) ? true : false;

}

//Primary function container that runs when DOM loads
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


/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)