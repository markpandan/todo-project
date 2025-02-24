export default function form(formElement, action) {
  const formDOM = document.querySelector(formElement);

  // TODO: Implement a form validation
  formDOM.addEventListener("submit", (e) => {
    e.preventDefault();

    action(formDOM);

    formDOM.reset();
  });
}
