const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameMsg = document.getElementById('nameMsg');
const emailMsg = document.getElementById('emailMsg');
const messageMsg = document.getElementById('messageMsg');
const charCount = document.getElementById('charCount');
const formStatus = document.getElementById('formStatus');

const MAX_MESSAGE_LEN = 500;

function setError(input, msgEl, text) {
  input.classList.add('invalid');
  msgEl.textContent = text;
  msgEl.className = 'msg error';
}

function setOk(input, msgEl, text) {
  input.classList.remove('invalid');
  msgEl.textContent = text || '';
  msgEl.className = 'msg ok';
}

function validateName() {
  const value = nameInput.value.trim();
  if (value.length === 0) {
    setError(nameInput, nameMsg, 'Please enter your name.');
    return false;
  }
  if (value.length < 2) {
    setError(nameInput, nameMsg, 'Name must be at least 2 characters.');
    return false;
  }
  if (!/^[a-zA-Z\s'-]+$/.test(value)) {
    setError(nameInput, nameMsg, 'Name can only contain letters, spaces, apostrophes, and hyphens.');
    return false;
  }
  setOk(nameInput, nameMsg, 'Looks good.');
  return true;
}

function validateEmail() {
  const value = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (value.length === 0) {
    setError(emailInput, emailMsg, 'Please enter your email.');
    return false;
  }
  if (!emailPattern.test(value)) {
    setError(emailInput, emailMsg, 'Please enter a valid email address.');
    return false;
  }
  setOk(emailInput, emailMsg, 'Looks good.');
  return true;
}

function validateMessage() {
  const value = messageInput.value.trim();
  if (value.length === 0) {
    setError(messageInput, messageMsg, 'Please enter a message.');
    return false;
  }
  if (value.length < 10) {
    setError(messageInput, messageMsg, 'Message must be at least 10 characters.');
    return false;
  }
  if (value.length > MAX_MESSAGE_LEN) {
    setError(messageInput, messageMsg, `Message must be under ${MAX_MESSAGE_LEN} characters.`);
    return false;
  }
  setOk(messageInput, messageMsg, 'Looks good.');
  return true;
}

messageInput.addEventListener('input', () => {
  const len = messageInput.value.length;
  charCount.textContent = `${len} / ${MAX_MESSAGE_LEN}`;
  charCount.style.color = len > MAX_MESSAGE_LEN ? 'var(--error)' : '#9aa39c';
});

nameInput.addEventListener('blur', validateName);
emailInput.addEventListener('blur', validateEmail);
messageInput.addEventListener('blur', validateMessage);

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isMessageValid = validateMessage();

  formStatus.classList.remove('show', 'success', 'fail');

  if (isNameValid && isEmailValid && isMessageValid) {
    formStatus.textContent = `Thanks, ${nameInput.value.trim()}. Your message has been received — we'll reply to ${emailInput.value.trim()} shortly.`;
    formStatus.classList.add('show', 'success');
    form.reset();
    charCount.textContent = `0 / ${MAX_MESSAGE_LEN}`;
    [nameInput, emailInput, messageInput].forEach(input => input.classList.remove('invalid'));
    [nameMsg, emailMsg, messageMsg].forEach(msg => { msg.textContent = ''; });
  } else {
    formStatus.textContent = 'Please fix the highlighted fields before sending.';
    formStatus.classList.add('show', 'fail');
  }
});
