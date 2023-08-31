const apiKey = "07371f92108a5b03340186ea3aa6dd8fa4f81f1e"
const apiUrl = "https://api-ssl.bitly.com/v4/shorten"
const shortLink = document.querySelector("#short_link")
const resultContainer = document.querySelector("#result_container")

const headers = {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
}

const handleLink = () => {

    resultContainer.style.opacity = "1"

    const longUrl = document.querySelector("#link_input").value
    const requestBody = {
        long_url: longUrl,
    }

    if (longUrl === "") {
        resultContainer.style.opacity = "0"
        alert("Por favor, preencha o campo com um link")
    } else {
        fetch(apiUrl, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(requestBody),
        })
            .then(response => response.json())
            .then(data => {
                shortLink.innerHTML = data.id
            })
            .catch(error => {
                console.error('Erro:', error)
            });
    }


};

const shortenButton = document.querySelector("#button_action_input")
shortenButton.addEventListener("click", handleLink)

const copyButton = document.querySelector("#copy_button")
copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(shortLink.textContent)
})
