/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  const store = {
    // 5 or more questions are required
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
        correctAnswer: '24/6'
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
    score: 0
  };


funtion render() {
  //This function generates the view each time the store is updated
};

funtion viewStartPage() {
  //view the starting page that will include. Welcome and short description. 
  //Start Quiz button
};

function viewQuestion() {
  //Will  generate the questions on each page
  //keep track of which question we are on
  //keep track of right and wrong answers.
  //display answer right or wrong 
  //Submit button
};

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
  adfafad
};
/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)