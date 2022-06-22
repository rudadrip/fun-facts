async function grabApi() {
    fetch('https://api.api-ninjas.com/v1/facts?limit=1', {
        headers: {
            'X-Api-Key': API_KEY
        }
    }).then(response => response.json().then(post => changeInner(post[0].fact)))
}
function changeInner(replacement) {
    document.getElementById("change").innerHTML = replacement;
}