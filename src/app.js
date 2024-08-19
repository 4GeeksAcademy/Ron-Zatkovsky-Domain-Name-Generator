/* eslint-disable */

function generateDomainName() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  for (let item of pronoun) {
    for (let item2 of adj) {
      for (let item3 of noun) {
        return item + item2 + item3 + ".com";
      }
    }
  }
}

window.onload = function() {
  //write your code here
  const query = document.getElementById("domainName");
  query.innerHTML = generateDomainName();
  console.log("Hello Rigo from the console!");
};
