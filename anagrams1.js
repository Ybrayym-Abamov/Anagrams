const button = document.getElementById("findButton");
let resultArray = []
button.onclick = function () {
    let typedText = document.getElementById("input").value;
   
    let alphaTyped = typedText.toLowerCase().split("").sort().join("").trim();
    for (let i = 0; i < words.length; i++) {
        let alphaWords = words[i].toLowerCase().split("").sort().join("").trim()
        if (alphaTyped === alphaWords) {
            resultArray.push(words[i])

        }

    }
    writeToDOM(resultArray);
}

function writeToDOM(resultArray) {
    let div = document.createElement("div");
    let textContent = document.createTextNode(resultArray);
    div.appendChild(textContent);
    let destination = document.getElementById("Anagrams");
    destination.appendChild(div);
}

