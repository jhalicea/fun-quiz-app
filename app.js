/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: '<h2>What color is broccoli?<h2>',
      answers: [
        `<input type="radio" id="Red" name="questions" value="Red"> 
        <label for="Red">Red</label>`,

        `<input type="radio" id="Orange" name="questions" value="Orange"> 
        <label for="Orange">Orange</label>`,

        `<input type="radio" id="Pink" name="questions" value="Pink"> 
        <label for="Pink">Pink</label>`,

        `<input type="radio" id="Green" name="questions" value="Green"> 
        <label for="Green">Green</label>`
      ],
      correctAnswer: 'green'
    },
    {
      question: 'What is the current year?',
      answers: [
        '1970',
        '2015',
        '2019',
        '2005'
      ],
      correctAnswer: '2019'
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
      if(store.questionNumber < 5){
        questionView();
      } else if (store.questionNumber > 5){
        store.quizStarted = false;
        questionFinalScore()
      }
  };

};



function startView(){
// this function will be responsible for the start view of the quiz app
  const welcomeQuizHTML = `<h2>Welcome To The Quiz App</h2> <button class='btn'>Start The Quiz</button>`
  $('main').html(welcomeQuizHTML);
  store.quizStarted = true;
  btnListener();
};



function btnListener(){
  $('.btn').on('click', function(){
    render();
  })
}



function questionView(){
// this function will be responsible for the question view of the quiz app

const questionAnswers = 
  `<form id="quiz-app">
  ${store.questions[store.questionNumber].question}
  ${store.questions[store.questionNumber].answers.join('')}
  <button class='btn'>Submit</button>
  </form>`;

  $('main').html(questionAnswers);
  btnListener()
};



function questionCorretView(){
// this function will be responsible for the question correct view of the quiz app
  console.log('render question correct');
};



function questionWrongView(){
// this function will be responsible for the question wrong view of the quiz app
  console.log('render wrong view');
};



function questionFinalScore(){

};



function app(){
  render();
  questionCorretView();
  questionWrongView();
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