const eMail = document.querySelector("#EM");
const passWord = document.querySelector("#PSW");
const form = document.querySelector("#form");
const formData = {};
const loginUsers = [];
for (let input of [eMail, passWord]) {
  input.addEventListener("input", ({ target }) => {
    const { name: keyName, value: keyValue } = target;
    formData[keyName] = keyValue;
  });
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //   const { Email, Password } = formData;
  //   loginUsers.push({ Email, Password });
  //another way use spread to copy a object which is better and more comprehensible
  if (formData.Email.includes("@gmail.com") === true) {
    const newUser = { ...formData };
    loginUsers.push(newUser);
    eMail.value = "";
    passWord.value = "";
    alert("Form Submitted");
  } else {
    alert("Invalid Password");
  }
});
