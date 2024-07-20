info = {
    social: {
        youtube: 'https://youtube.com/planetoftheweb',
        linkedin: 'https://linkedin.com/in/planetoftheweb',
        blog: 'https://raybo.org'
    }
}

function listObject(data) {
    let querySelector = document.querySelector.bind(document);

    let output = '';
    for (let key in data) {
        output += `${key}: ${data[key]}<br>`;
    }
    querySelector("#output").innerHTML = output;
}

listObject(info.social)