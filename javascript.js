// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");

content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

const redParagraph = document.createElement("p");
redParagraph.classList.add("red");
redParagraph.textContent = "Hey I'm red!";
redParagraph.style.color = "red";
container.appendChild(redParagraph);

const blueHeader = document.createElement("h3");
blueHeader.classList.add("blue");
blueHeader.textContent = "I'm a blue h3!";
blueHeader.style.color = "blue";
container.appendChild(blueHeader);

const pinkDiv = document.createElement("div");
pinkDiv.classList.add("pink");
pinkDiv.style.backgroundColor = "pink";
pinkDiv.style.border = "2px solid black";
container.appendChild(pinkDiv);

const nestedHeader = document.createElement("h1");
nestedHeader.textContent = "I'm in a div";
pinkDiv.appendChild(nestedHeader);
const nestedParagraph = document.createElement("p");
nestedParagraph.textContent = "ME TOO!";
pinkDiv.appendChild(nestedParagraph);

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("keydown", () => {
        alert(button.id);
    });
});

