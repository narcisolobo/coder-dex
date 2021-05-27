var cardsContainer = document.querySelector('#cards-container')
var currentUsername = ''

function getUsername(element) {
  console.log(element.value)
  currentUsername = element.value
}

function makeCoderCard(data) {
  var card =
`<div class="card">
  <img class="card-image" src="${data.avatar_url}" alt="${data.login}">
  <div class="card-body">
      <h3>${data.name}</h3>
      <h4>${data.login}</h4>
      <p>Location: ${data.location}</p>
      <p>Repositories: ${data.public_repos}</p>
  </div>
</div>`
  return card
}

async function search(event) {
  event.preventDefault()
  // console.log("https://api.github.com/users/" + currentUsername)
  var response = await fetch(`https://api.github.com/users/${currentUsername}`)
  var coderData = await response.json()
  cardsContainer.innerHTML = makeCoderCard(coderData) + cardsContainer.innerHTML
}