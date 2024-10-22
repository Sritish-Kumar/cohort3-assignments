import { quizData } from "./data.js";

// function setAttributes(ele, attr) {
//   for (let key in attr) {
//     ele.setAttribute(key, attr[key]);
//   }
// }

// function loadQuestion(ques) {
//   let inp1 = document.createElement("input");
//   inp1.setAttribute("name", "ques");
//   inp1.setAttribute("required", "");
//   setAttributes(inp1, {
//     type: "radio",
//     id: "ans1",
//   });

//   let label1 = document.createElement("label");
//   setAttributes(label1, {
//     for: "ans1",
//   });

//   let inp2 = document.createElement("input");
//   inp2.setAttribute("name", "ques");

//   setAttributes(inp2, {
//     type: "radio",
//     id: "ans2",
//   });

//   let label2 = document.createElement("label");
//   setAttributes(label2, {
//     for: "ans2",
//   });

//   let div1 = document.createElement("div");
//   div1.className = "inputs";

//   div1.append(inp1, label1, inp2, label2);

//   document.querySelector("body").appendChild(div1);
// }

// loadQuestion(quizData[0]);

let score = 0;
let quesIndex = 0;

function loadQuestion(question) {
  let quesHeading = document.querySelector("p");

  quesHeading.innerText = question["question"];

  let labels = document.querySelectorAll("label");
  const options = ["a", "b", "c", "d"];
  for (let i = 0; i < labels.length; i++) {
    labels[i].innerText = question[options[i]];
  }

  const selectedRadio = document.querySelector('input[name="q"]:checked');
  if (selectedRadio) {
    selectedRadio.checked = false; // Deselect the currently selected radio
  }
}

function ansCheck(ans) {
  let inputAns = document.querySelector('input[name="q"]:checked');

  if (inputAns.value === ans) {
    score++;
    console.log(score);
  }
}

function handelSubmit(event) {
  event.preventDefault();

  ansCheck(quizData[quesIndex]["correct"]);

  if (quesIndex < quizData.length - 1) {
    quesIndex++;
    loadQuestion(quizData[quesIndex]);
  } else {
    let div = document.querySelector(".inputs");
    div.parentNode.removeChild(div);

    document.querySelector(
      "p"
    ).innerText = `You answered ${score}/4 questions correctly`;
    form.removeEventListener("submit", handelSubmit);

    let btn = document.querySelector("button");
    btn.innerHTML = "Relod";
    btn.style.backgroundColor = "#894aaa";
    btn.addEventListener("click", () => {
      location.reload();
    });
  }
}

// First Question
loadQuestion(quizData[quesIndex]);

let form = document.getElementById("quiz");
form.addEventListener("submit", handelSubmit); // every time u click the submit button calls submitHandel
