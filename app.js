/**
 * 
 * Collaborate Simple Quiz Single-Page Web App Project
 * 
 * 
 * Technical requirements:
 * 
 * App should include a render() function, that regenerates the view each time the store is updated. 
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * May add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * 
 */


/*=============================================
=            Storage Variables            =
=============================================*/

//database object
const questionDB = {

  questions: [
    {
      question: 'What is the size of the Foreign Exchange Market?',
      answers: [
        '$84 Billion',
        '$6 Trillion',
        '$40 Billion',
        '$4 Trillion' 
      ],
      correctAnswer: '$6 Trillion'
    },
    {
      question: 'The Foreign Exchange Market is opened:',
      answers: [
        '5 days a week and closes at 4PM EST',
        '24/6 from Sunday 5PM-Friday 5PM',
        'From Monday to Friday 8AM-5PM EST',
        '365 days a year'
      ],
      correctAnswer: '24/6 from Sunday 5PM-Friday 5PM'
    },
    {
      question: 'The assets traded on the Foreign Exchange Market are:',
      answers: [
        'Money',
        'Currency Pairs',
        'Options',
        'CFDs'
      ],
      correctAnswer: 'Currency Pairs'
    },
    {
      question: 'If we want to Buy Euros and Sell Japanese Yens we would Buy:',
      answers: [
        'CHFJPY',
        'EURJPY',
        'GBPJPY',
        'EURCHF'
      ],
      correctAnswer: 'EURJPY'
    },
    {
      question: 'A standard lot size is equal to:',
      answers: [
        '15,000',
        '100,000',
        '10,000',
        '50,000'
      ],
      correctAnswer: '100,000'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0,
  incorrectAnswers: 0
};

//stores the correct answer to the current question
let currentCorrectAnswer = '';

//reference to the DOM's injection site
const mainContainer = $('main');

//right/wrong images
const celbratoryImg = 'https://123emoji.com/wp-content/uploads/2017/08/sticker-14-226.png';
const incorrectImg = 'https://k60.kn3.net/taringa/C/0/A/F/5/1/lighth/F53.jpg';


/*=============================================
=            Render Functions            =
=============================================*/

/**
 * render()
 * 
 * Conditionally replaces the content of the main container, 
 * based on the state of the question database-object
 */
render = () => {
  if (!questionDB.quizStarted) {
    //render the start page
    mainContainer.html(generateStartPageTemplate(questionDB));
  } else if (questionDB.quizStarted) {
      if(questionDB.questionNumber < questionDB.questions.length){
        //render quiz 
        mainContainer.html(generateQuestionTemplate(questionDB));
      } else {
        //render end quiz page
        mainContainer.html(viewEndGame());

      }
    
  }
};



/*=============================================
=            Template/View Generators            =
=============================================*/

/**
 * generateStartPageTemplate()
 * 
 * Generates the start page view
 * Includes a Welcome and short description of the quiz
 * @param {object} dataSet - the database object
 */
const generateStartPageTemplate = (dataSet) => {

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


/**
 * generateQuestionTemplate()
 * 
 * Generates the question view
 * 
 * @param {object} dataSet - the database object
 * @returns {string} - returns HTML template string
 */
const generateQuestionTemplate = (dataSet) => {

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
        <p class="score-counter">Question ${dataSet.questionNumber + 1} of ${dataSet.questions.length}</p>
      </div>
      <div class="answerBtn">
        <button type="submit" id="submitAnswerBtn" class="submitBtn">
          Submit Answer
        </button>
      </div>
    </form>`;

  return questionPageHTML;
};

/**
 * generateAnswerSetHTML()
 * 
 * Generates radio-button based answer option 
 * @param {string} answer - represents the answer item stored at a given index in the answers array
 * @returns {string} - returns HTML template string
 */
const generateAnswerSetHTML = (answer) => {
  let answerRadioButton = `
      <div class="response-item">
        <input type="radio" id="answer-choice-${answer}" name="answer-choice" value="${answer}">
        <label for="answer-choice-${answer}">${answer}</label>
      </div>
      `;
  return answerRadioButton;
}

/**
 * viewQuestionCorrect()
 * 
 * generates correct answer view
 */
const viewQuestionCorrect = () => {

  correctAnswerHTML = `
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
  `;
  
  mainContainer.html(correctAnswerHTML);
};

/**
 * viewQuestionWrong()
 * 
 * Generates wrong answer view
 */
const viewQuestionWrong = () => {
  const wrongAnswerHTML = `
  <article class="wrongAnswer">
    <h1>Nope!</h1>
    <h2>Mark this down as a learning opportunity</h2>
    <img src="${incorrectImg}" alt="faceplant image">
    <div id="reveal-correct">
      <h3>The correct answer is ${currentCorrectAnswer}</h3>
    </div>
    <div class="scoreContainer">
      <h2>Score: ${questionDB.score}</h2>
      <h3>Correct: ${questionDB.score}</h3>
      <h3>Incorrect: ${questionDB.incorrectAnswers}</h3>
    </div>
    <button id="nextQuestionBtn" type="submit" class="submitButton">
      Next Question
    </button>
  </article>
  `;

  mainContainer.html(wrongAnswerHTML)
  
};


/**
 * viewEndGame()
 * 
 * Generates the end of game view
 */
const viewEndGame = () => {

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

/*=============================================
=            Event Handlers            =
=============================================*/

/**
 * Handle Start Quiz button
 */
mainContainer.on('click', 'button#start', (event) => {
  //prevent from from submitting
  event.preventDefault();
  //update quiz-started state
  questionDB.quizStarted = true;
  //Generate question-view
  mainContainer.html(generateQuestionTemplate(questionDB));
});

/**
 * handles the question submit button
 * checks if the selected answer matches the correct answer
 *   updates tracking info: player score, right answers, 
 *   wrong answers, question number
 */
mainContainer.on('click', 'button#submitAnswerBtn', (event) => {
  //prevents default form submission
  event.preventDefault();

  //check answer
  checkAnswer();
});


/**
 *handles next question button 
 */
mainContainer.on('click', 'button#nextQuestionBtn', (event) => {
  //prevent form submission
  event.preventDefault();

  //load next question
  render();
});

/**
 * Handles New-Quiz / Reset Button
 */
mainContainer.on('click', 'button#resetBtn', (event) => {
  console.log('new quiz button fired')
  //prevent form submission
  event.preventDefault();

  //reset game data
  questionDB.quizStarted = false;
  questionDB.questionNumber = 0;
  questionDB.score = 0;
  questionDB.incorrectAnswers = 0;

  //load start page
  render();
});

/*=============================================
=            Helper Functions            =
=============================================*/
  
/**
 * checkAnswer()
 * 
 * checks if the selected answer matches the correct answer.
 * updates tracking info: player score, question number.
 * conditionally calls view (right answer/ wrong answer).
 */
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

/**
 * Determines if player passed
 * 
 * @returns {boolean} true - player score >= passing requirements
 * @returns {boolean} false - player score < passing requirements
 */
const didPlayerPass = () => {
  // >= 80% = pass
  const passRequirement = 0.8;

  //calculate pass/fail
  // (players-score/number of questions)
  let playerFinalScore = (questionDB.score/questionDB.questions.length);
  
  return ( playerFinalScore >= passRequirement) ? true : false;
}


/*=============================================
=            Load Main Container-App            =
=============================================*/

//Primary function container that runs when DOM loads
$(render);


// 🥳🥳🥳🥳🥳