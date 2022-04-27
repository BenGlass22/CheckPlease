
function newChatBox (username, message){
  const main = document.querySelector('main')
  main.innerHTML += `
  <div class="row">
    <div class="user-info">
      <img src="beachball.gif">
      <b> ${username}:</b>
    </div>
    <span>${message}</span>
    </div>
    `
}
