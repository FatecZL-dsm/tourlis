// Logi

const loginButton = document.getElementById('loginButton');
const loginModal = document.getElementById('loginModal');
const lcloseButton = document.getElementsByClassName('lclose')[0];

loginButton.addEventListener('click', () => {
  loginModal.style.display = 'block';
});

lcloseButton.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === loginModal) {
        loginModal.style.display = 'none';
    }
});


// Postagem
const openFormButton = document.getElementById('openFormButton');
const formModal = document.getElementById('formModal');
const closeButton = document.getElementsByClassName('close')[0];

openFormButton.addEventListener('click', () => {
  formModal.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  formModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === formModal) {
    formModal.style.display = 'none';
  }
});