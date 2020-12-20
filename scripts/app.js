
const chatList = document.querySelector('.chat-list');
const messageForm = document.querySelector('.new-chat');
const nameForm = document.querySelector('.new-name');
const updateMessageNot = document.querySelector('.update-mssg');
const parentButton = document.querySelector('.chat-rooms');

messageForm.addEventListener('submit', e => {
  e.preventDefault();
  const message = messageForm.message.value.trim();
  chatName.addChat(message)
  .then(() => messageForm.reset())
  .catch(() => console.log(err));
  
})

nameForm.addEventListener('submit',e => {
  e.preventDefault();

  const name = nameForm.name.value.trim();
  chatName.updateName(name);
  nameForm.reset();
  updateMessageNot.innerHTML = `<div class="alert alert-success">
  <strong>Success!</strong> your name has been successfully added to ${name}.
</div>`;

  setTimeout(() => updateMessageNot.textContent = '',3000)

});

parentButton.addEventListener('click', e => {
  e.preventDefault();
  if(e.target.tagName === "BUTTON"){
   listUI.clear();
    chatName.updateRoom(e.target.getAttribute('id'));
    chatName.getChats(chat => {
       listUI.render(chat)
    })
  }
})

const username = localStorage.username ? localStorage.username : 'Unknown'


const listUI = new chatListUI(chatList);
const chatName= new chatRoom('general', username);

chatName.getChats(data => {
  listUI.render(data)
});

