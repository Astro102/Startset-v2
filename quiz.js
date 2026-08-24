var quizD = [                                                              //Questions
    {
        question: "Q1.How many planets are there in our Solar System?",
        a: 5,
        b: 7,
        c: 8,
        d: 6,
        ans: "ans3"
    },
    {
        question: "Q2.How many moons do earth have?",
        a: 1,
        b: 2,
        c: 0, 
        d: 3,
        ans: "ans1"
    },
    {
        question: "Q3.What type of telescope uses mirrors?",
        a: "Reflector",
        b: "Refractor",
        c: "Both",
        d: "None",
        ans: "ans1"
    },
    {
        question: "Q4.What nebulas are?",
        a: "Planets",
        b: "Clouds and dust in space",
        c: "Galaxies",
        d: "Just a word",
        ans: "ans2"
    },
    {
        question: "Q5.Which is the coldest planet in our SolarSystem?",
        a: "Jupiter",
        b: "Earth",
        c: "Mars",
        d: "Neptune",
        ans: "ans4"
    },
    {
        question: "Q6.Which of this is not a Planet?",
        a: "Sun",
        b: "Earth",
        c: "Jupiter",
        d: "Mars",
        ans: "ans1"
    },
    {
        question: "Q7.Which Planet has the largest ring system in our SolarSystem?",
        a: "Moon",
        b: "Saturn",
        c: "Venus",
        d: "Jupiter",
        ans: "ans2"
    },
    {
        question: "Q8.Which type of telescope uses lens?",
        a: "Reflector",
        b: "Refractor",
        c: "Both",
        d: "None",
        ans: "ans2"
    },
    {
        question: "Q9.Which planet is closest to the Sun?",
        a: "Venus",
        b: "Earth",
        c: "Mars",
        d: "Mercury",
        ans: "ans4"
    },
    {
        question: "Q10.Which planet is the biggest in our solar system?",
        a: "Sun",
        b: "Jupiter",
        c: "Saturn",
        d: "Uranus",
        ans: "ans2"
    },

]


const question = document.querySelector('#q');                  //const value for question
const ans1 = document.querySelector('#label1');                 //const value for ans1
const ans2 = document.querySelector('#label2');                   //const value for ans2
const ans3 = document.querySelector('#label3');                   //const value for ans3
const ans4 = document.querySelector('#label4');                   //const value for ans4
const submit = document.querySelector('#submit');               //const value for submit
const previous = document.querySelector('#previous');
const answers = document.querySelectorAll('.answer');               //const value for answers //submit 
const disScores = document.querySelector('#scorearea');

let qCount = 0;    //establishing varible where array count is set to 0
let score = 0;     //score variable to 0 

const loadQuestion = () => {                       //function 
    
    const qlist = quizD[qCount];
    
    question.innerText = qlist.question;
    
    ans1.innerText = qlist.a;
    ans2.innerText = qlist.b;
    ans3.innerText = qlist.c;
    ans4.innerText = qlist.d;
}


loadQuestion();

const getCheckAnswer = () =>{
    let answer;
    
    answers.forEach((curAnsElem) => {                      //forEach loop to display the option user selected
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });
    return answer; 
}

const deselectAll = () => {                                          //for refreshing the selected option during previous question
    answers.forEach((curAnsElem) =>  curAnsElem.checked = false);
}

submit.addEventListener('click', () =>{                   //onclick function for submit button
    const checkans = getCheckAnswer();
    console.log(checkans); 
    
    if( checkans === quizD[qCount].ans){                  //if statement for incrementing scores of user 
        score++;
    };
    
    deselectAll();
    qCount++;                                             //increment of question as user clicks on submit button
    
    if (qCount < quizD.length){
        loadQuestion();
    }
    else{
        disScores.innerHTML = `
        <h3 id="final"> You scored ${score}/${quizD.length} 🌞🌞</h3>
        <button class="btn" onclick="location.reload()">Play Again</button>
        `;
        
        disScores.classList.remove('scores')
    }
})


let qtitle = document.getElementById('questions');
let qhead = document.getElementById('q');
let option1 = document.getElementById('label1');
let option2 = document.getElementById('label2');
let option3 = document.getElementById('label3');
let option4 = document.getElementById('label4');
let over = document.getElementById('submit');
let final1 = document.getElementById('final');
let final2 = document.querySelector('.scores');

qtitle.addEventListener('mouseover',() => q.style.color = 'black');
qtitle.addEventListener('mouseout',() => q.style.color = 'white');

qtitle.addEventListener('mouseover',() => label1.style.color = 'black');
qtitle.addEventListener('mouseout',() => label1.style.color = 'white');

qtitle.addEventListener('mouseover',() => label2.style.color = 'black');
qtitle.addEventListener('mouseout',() => label2.style.color = 'white');

qtitle.addEventListener('mouseover',() => label3.style.color = 'black');
qtitle.addEventListener('mouseout',() => label3.style.color = 'white');

qtitle.addEventListener('mouseover',() => label4.style.color = 'black');
qtitle.addEventListener('mouseout',() => label4.style.color = 'white');

qtitle.addEventListener('mouseover',() => final2.style.color = 'black');
qtitle.addEventListener('mouseout',() => final2.style.color = 'white');