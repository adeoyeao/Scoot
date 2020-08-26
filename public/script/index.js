//FAQ Section

const faqClose = [...document.querySelectorAll(".faq-close")];
const faqAnswer = [...document.querySelectorAll(".faq-answer")];

faqClose.forEach((x) =>
  x.addEventListener("click", () => {
    const index = faqClose.indexOf(x);
    const close = [...document.querySelectorAll(".faq-close")];

    x.classList.contains("faq-open")
      ? (x.classList.toggle("faq-open"),
        faqAnswer[index].classList.toggle("visible"))
      : (close.forEach((faqclose) => (faqclose.className = "faq-close")),
        faqAnswer.forEach((answer) => (answer.className = "faq-answer")),
        x.classList.toggle("faq-open"),
        faqAnswer[index].classList.toggle("visible"));
  })
);

//Contact Buttons

const contactButton = [...document.querySelectorAll(".contact-btn")];

contactButton.forEach((btn) =>
  btn.addEventListener("click", () => {
    const form = document.querySelector(".contact-container");
    form.classList.add("grid");

    const closeButton = document.querySelector(".form-close-btn");
    closeButton.addEventListener("click", () => {
      form.classList.remove("grid");
      document.querySelector(".name").value = "";
      document.querySelector(".email").value = "";
      document.querySelector(".message").value = "";
    });
  })
);

//Application Buttons
const applyButton = [...document.querySelectorAll(".apply")];

applyButton.forEach((btn) =>
  btn.addEventListener("click", () => {
    const application = document.querySelector(".application-container");
    application.classList.add("grid");

    const index = applyButton.indexOf(btn);
    const role = [...document.querySelectorAll(".role")];
    const office = [...document.querySelectorAll(".office")];

    document.querySelector("#role").innerHTML = role[index].innerHTML;
    document.querySelector("#office").innerHTML = office[index].innerHTML;

    const closeButton = document.querySelector(".application-close-btn");
    closeButton.addEventListener("click", () => {
      application.classList.remove("grid");
      document.querySelector(".name").value = "";
      document.querySelector(".email").value = "";
      document.querySelector(".message").value = "";
    });
  })
);

//Hamburger Button
const menuButton = document.querySelector(".menu-btn")

menuButton.addEventListener("click", () => {

  const body = document.querySelector("body");
  const navBar = document.querySelector(".navbar-top").cloneNode(true);
  const getScootin = document.querySelector("#get-scootin").cloneNode(true);

  if (document.querySelector(".modal") == null) {
    const modal = document.createElement("div");
    const menuBox = document.createElement("div");
    modal.className = "modal"
    menuBox.className = "menu-box"
    menuBox.appendChild(getScootin)
    menuBox.appendChild(navBar)
    modal.appendChild(menuBox)
    body.appendChild(modal)
    menuButton.classList.toggle("menu-close-btn")
  } else if (document.querySelector(".modal") !== null) {
    menuButton.classList.toggle("menu-close-btn")
    document.querySelector(".modal").remove();
  }
});
