/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
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
      correctAnswer: '2019'
    },
    {
      question: 'What is the best city?',
      answers: [
        'san juan',
        'tampa',
        'ponce',
        'bayamon'
      ],
      correctAnswer: 'San Juan'
    },
    {
      question: 'What is the best sci-fi show?',
      answers: [
        'stranger things',
        'Battlestar Galactica',
        'The 100',
        'Utopia'
      ],
      correctAnswer: 'Battlestar Galactica'
    },
    {
      question: 'What is the best age?',
      answers: [
        '18 or less',
        '21 or more',
        '30 or more',
        '100 or more'
      ],
      correctAnswer: '100 or more'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};


function render(){
// this function will be responsible for rendering the quiz app in
// the DOM
  if(store.quizStarted === false) {
    startView();
  } else if(store.quizStarted === true){
      if(store.questionNumber + 1 <= store.questions.length){
        console.log(store.questions.length);
        questionView();
      } else {
        // store.quizStarted = false;
        questionFinalScore();
      }
  };

};



function startView(){
// this function will be responsible for the start view of the quiz app
  const welcomeQuizHTML = `<h2>Welcome To The Quiz App</h2> 
                          <input id="btn" type="button" value="Start The Quiz">`

  $('main').html(welcomeQuizHTML);
  store.quizStarted = true;
  btnListener();
};



function btnListener(){
  $('#btn').on('click', function(event){
    event.preventDefault();
    render();
  })
}

function btnAnswerListener(correctAnswer){
  $('#btn').on('click', function(event){
    event.preventDefault();
    answerValue = $('input[name="questions"]:checked').val();
    gradeAnswer(answerValue, correctAnswer);
  })
}

function questionView(){
// this function will be responsible for the question view of the quiz app
let questionNumber = store.questionNumber;
let question = store.questions[questionNumber].question;
let correctAnswer = store.questions[questionNumber].correctAnswer;


let answersHTML = generateAnswers(questionNumber);
const questionHTML = `<form id="quiz-app">
                      <h2>${question}</h2>
                      ${answersHTML}
                      <input id="btn" type="button" value="Submit">
                      </form>`;


  $('main').html(questionHTML);
 
  btnAnswerListener(correctAnswer);
};

function gradeAnswer(answerValue, correctAnswer){
  console.log(answerValue)
  
  if(answerValue === correctAnswer){
    store.questionNumber++
    questionCorretView();
  } else {
    store.questionNumber++
    questionWrongView();
  }
 
};



function generateAnswers(questionNumber){
  let answersHTML ='';

  for(let answer of store.questions[questionNumber].answers){
  answersHTML += `<input type="radio" id="${answer}" name="questions" value="${answer}">
                  <label for="${answer}">${answer}</label>`;
  console.log(answersHTML);
  }
  return answersHTML;
};



function questionCorretView(){
// this function will be responsible for the question correct view of the quiz app
  console.log('render question correct');
  render()

};



function questionWrongView(){
// this function will be responsible for the question wrong view of the quiz app
  console.log('render wrong view');
  render();
};



function questionFinalScore(){
  console.log('yayyyyyyyyyyyyyyyyyyy');
  store.questionNumber = 0;
  store.quizStarted = false;
  store.score = 0;

};



function app(){
  render();
};



//when the page loads, call app()
$(app());































/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
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

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)



// function generateQuestion(answer){
//   // const questionViewHTML =
//   //   `<form id="quiz-app">
//   //       <input type="radio" id="${answer}" name="questions" value="${answer}">
//   //       <label for="${answer}">${answer}</label>
//   //       <button class='btn'>Submit</button>
//   //   </form>`;

//   //   return questionViewHTML
// };
// console.log(question);
  // // let answer = store.questions[0].answers[0];
  // // console.log(store.questions[store.questionNumber].answers[store.questionNumber]);

  // // <h2>${question}</h2>
  // const questionAnswers = store.questions[store.questionNumber].answers.map((answer) => generateQuestion(answer));

  // // const questionViewHTML =
  // //   `<form id="quiz-app">
        
  // //       <input type="radio" id="${answer}" name="questions" value="${answer}">
  // //       <label for="${answer}">${answer}</label>
  // //       <button class='btn'>Submit</button>
  // //   </form>`;


  // // const questionViewHTML = `<h2>${question}</h2>`
  
  // // for(i = 0; i < store.questions.questions.answer; i++){
  // //   let answer = store.questions[i].answers[i];
    
  // //   `<form id="quiz-app">
  // //       <input type="radio" id="${answer}" name="questions" value="${answer}">
  // //       <label for="${answer}">${answer}</label>
  // //       <button class='btn'>Submit</button>
  // //   </form>`;
  // // }
  
  
  // // `<h2>${store.questions[0].question}</h2> <button class='btn'>Submit</button>`
  // // $('main').html(questionViewHTML);
  // // console.log('render question View');
  // // btnListener()


  // if(store.quizStarted === false)
  // if(store.questionNumber === 0){
  //   generateQuestion()
  // }



// function btnListener(){
//   $('.btn').on('click', function(){
//     if(store.questionNumber < 5){
//       questionView();
//     } else if (store.questionNumber > 5){
//       store.quizStarted = false;
//       questionFinalScore()
//     }
    
//   })
// }