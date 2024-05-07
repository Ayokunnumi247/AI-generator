function aiGenerator(response) {
  console.log("recipe generated");
  new Typewriter("#information", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipes(event) {
  event.preventDefault();
  let generalInput = document.querySelector("#input-data");
  let apiKey = "8e4efa33a280aof6c33fe6a0t3ab54ec";
  let context =
    "please make it short and in a form of a list of things to do one after the other, not more than 4 lines";
  let prompt = `you are an amazing AI that knows different type of food recipes around the world,generate food recipes of ${generalInput.value} `;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  console.log("generating recipe");
  console.log(`prompt:${prompt}`);
  console.log(`context:${context}`);

  axios.get(apiUrl).then(aiGenerator);
}

let answerElement = document.querySelector("#recipe-form");
answerElement.addEventListener("submit", generateRecipes);
