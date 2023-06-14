
function getAndSetMadLibValues() {
  const person1Input = document.getElementById("person1Input").value;
  const person2Input = document.getElementById("person2Input").value;
  const animalInput = document.getElementById("animalInput").value;
  const exclamationInput = document.getElementById("exclamationInput").value;
  const verbInput = document.getElementById("verbInput").value;
  const nounInput = document.getElementById("nounInput").value;
  document.querySelector("span#person1a").innerText = person1Input;
  document.querySelector("span#person1b").innerText = person1Input;
  document.querySelector("span#person1c").innerText = person1Input;
  document.querySelector("span#person2a").innerText = person2Input;
  document.querySelector("span#person2b").innerText = person2Input;
  document.querySelector("span#animal").innerText = animalInput;
  document.querySelector("span#verb").innerText = verbInput;
  document.querySelector("span#noun").innerText = nounInput;
  document.querySelector("span#exclamation").innerText = exclamationInput;
  document.querySelector("div#story").removeAttribute("class");
}


function setForSubmissionEventHandler() {
  let form = document.querySelector("form");
  form.onsubmit = function (e) {
    e.preventDefault();
    getAndSetMadLibValues();
    document.querySelector("div#story").removeAttribute("class");
  };
}

function clearResetButton() {
  let story = document.getElementById("clearStory");
  story.addEventListener("reset", function (e) {
    document.querySelector("div#story").addAttribute("class");
    console.log("clearResetButton is executing")
  )
};
}


window.onload = function () {
  setForSubmissionEventHandler();

};