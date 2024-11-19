const form = document.querySelector('.entry-form');

form.addEventListener('submit', sendEntry);

function sendEntry(event) {
  event.preventDefault();

  const formData = new FormData(form);

  const name = formData.get('client-name');
  const phoneNumber = formData.get('client-phone');
  const date = formData.get('date');
  const comments = formData.get('comments');

  const infArray = [name, phoneNumber, date, comments];
  console.log(infArray);

  form.reset();
}
