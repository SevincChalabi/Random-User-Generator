

const userButton = document.querySelector('#user-button')
const randomUser = document.querySelector('#random-user')
const randomNumber = document.querySelector('#phone')
const randomPicture = document.querySelector('#profile-image')


function getData() {
    fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data=> { 
        console.log(data.results[0])

        const firstName = data.results[0].name.first;
        const lastName = data.results[0].name.last;
        const phone  = data.results[0].phone

        randomUser.textContent = `${firstName} ${lastName}`;
        randomNumber.textContent = `${phone}`;
        randomPicture.setAttribute('src', data.results[0].picture.thumbnail)
    })
}

userButton.addEventListener('click', getData)
