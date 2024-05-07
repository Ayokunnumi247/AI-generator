function aiGenerator(event) {
  event.preventDefault();
  new Typewriter("#information", {
    strings: ["the recipt wil go here"],
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
let answerElement = document.querySelector("#recipt-form");
answerElement.addEventListener("submit", aiGenerator);
