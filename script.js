// Create button Start Quiz
function StartQuiz(){
    const btnStartQuiz = document.createElement("button");
    const textBtnStartQuiz = document.createTextNode("Start Quiz");
    btnStartQuiz.appendChild(textBtnStartQuiz);
    const bodyElementStartQuiz = document.getElementsByTagName("body")[0];
    bodyElementStartQuiz.appendChild(btnStartQuiz);

}
StartQuiz()


//Add first Question
function pTag_1(){
    const pTagQn_1 = document.createElement("p");
    const textQn_1 = document.createTextNode("What is the size of a newborn kangaroo?");
    pTagQn_1.appendChild(textQn_1);
    const bodyElementQn_1 = document.getElementsByTagName("body")[0];
    bodyElementQn_1.appendChild(pTagQn_1).style.display = 'none';
}
pTag_1();


//Hover button StartQuiz
function showpTag_1(){
    document.addEventListener('click', StartQuiz =>{
        StartQuiz.target.style.display = 'none';
        var root = document.querySelector('p'),
            iter = document.createNodeIterator(root, NodeFilter.SHOW_TEXT),
            textnode;

        // Show first Question
        while (textnode = iter.nextNode()) {
            console.log(textnode.textContent)
            document.write(textnode.textContent)
        }
    });
}

showpTag_1();





//Add Answers to buttons
const quastions_1 = ['1 inch', '2 inch', '3 inch', '4 inch'];
function addQn_1_ToBtn(){
    for (let i = 0; i < quastions_1.length; i++) {
        const btnQn_1 = document.createElement("button");
        const textQn_1 = document.createTextNode(quastions_1[i]);
        btnQn_1.appendChild(textQn_1);
        document.body.appendChild(btnQn_1)//.style.display = 'none';

        if (i == [0]){
            btnQn_1.addEventListener('click', function(e){
                e.target.style.backgroundColor = "green";
            });
            console.log(`Correct answer is ${quastions_1[i].toUpperCase()} \n`);
        }
        else if (i == [1] || i == [2] || i == [3]){
            btnQn_1.addEventListener('click', function(e){
                e.target.style.backgroundColor = "red";
            });
            console.log(`Wrong answer is ${quastions_1[i]} \n`);
        }
        else{
            console.log("ERROR: you didnt choose answer!");
        }
    }
}
addQn_1_ToBtn();


//Hover button StartQuiz
function showQn_1_ToBtn(){
    document.addEventListener('click', StartQuiz =>{
        StartQuiz.target.style.display = 'none';
        var root = document.querySelector('button'),
            iter = document.createNodeIterator(root, NodeFilter.SHOW_ELEMENT),
            textnode;

        // Show button of Question one
        while (textnode = iter.nextNode()) {
            console.log(textnode.textContent)
            document.write(textnode.textContent)
        }
    });
}

showQn_1_ToBtn();


//Add second Question
function pTag_2(){
    const pTagQn_2 = document.createElement("p");
    const textQn_2 = document.createTextNode("Which animal is known to spend 90% of its day, sleeping?");
    pTagQn_2.appendChild(textQn_2);
    const bodyElementQn_2 = document.getElementsByTagName("body")[0];
    bodyElementQn_2.appendChild(pTagQn_2)//.style.display = 'none';
}
pTag_2();

//Add Answers to buttons of question 2
const quastions_2 = ['Panda', 'Koalas', 'Tiger', 'Cat'];
function addQn_2_ToBtn(){
    for (let i = 0; i < quastions_2.length; i++) {
        const btnQn_2 = document.createElement("button");
        const textQn_2 = document.createTextNode(quastions_2[i]);
        btnQn_2.appendChild(textQn_2);
        document.body.appendChild(btnQn_2).style.display = 'none';

        if (i == [1]){
            btnQn_2.addEventListener('click', function(event){
                event.target.style.backgroundColor = "green";
            });
            console.log(`Correct answer is ${quastions_2[i].toUpperCase()} \n`);
        }
        else if (i == [0] || i == [2] || i == [3]){
            btnQn_2.addEventListener('click', function(event){
                event.target.style.backgroundColor = "red";
            });
            console.log(`Wrong answer is ${quastions_2[i]} \n`);
        }
        else{
            console.log("ERROR: you didnt choose answer!");
        }
    }
}
addQn_2_ToBtn();


//Create Submit button
function submitButton(){
    const buttonTag = document.createElement("button");
    const buttonTextNode = document.createTextNode("Submit Answer");
    buttonTag.appendChild(buttonTextNode);
    const bodyElementSubmit = document.getElementsByTagName("body")[0];
    bodyElementSubmit.appendChild(buttonTag)//.style.display = 'none';
}
submitButton();


//Create counter
var incrementor = 0;
var btnQncounter = "";
function answersCounter(){
    while(incrementor < quastions_1.length){
        btnQncounter = `The correct answer is ${quastions_1[0]} The wrong answer ${quastions_1[1],[2],[3]} \n`;
        incrementor ++;
        const pQncounter = document.createElement("p");
        const textQnconter = document.createTextNode(btnQncounter);
        pQncounter.appendChild(textQnconter);
        document.body.appendChild(pQncounter);

    }
}
answersCounter();

//Select answers
// addEventListener('selectionchange', (event) => {});
// onselectionchange = (event) => { };

// document.querySelector('p');
// button.addEventListener('click', answersCounter => {
//   p.textContent = `The correct answer is: ${answersCounter.detail}`;
// });

