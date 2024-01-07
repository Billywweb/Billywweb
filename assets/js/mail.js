const form = document.querySelector('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail() {
  const bodyMessage = `full name: ${name.value} <br>  email: ${email.value} <br>subject: ${subject.value} <br> messge: ${message.value} <br>`
  
Email.send({
  Host: "smtp.elasticemail.com",
  Username: "billywweb@gmail.com",
  Password: "8279C69C7691E600767754BDAEDF2822FF01",
  To: 'billywweb@gmail.com',
  From: "billywweb@gmail.com",
  Subject: subject.value,
  Body: bodyMessage
}).then(
  message => alert(message)
);
}
form.addEventListener("submit", (e) => {
  e.preventDefault();

  sendEmail();
});
