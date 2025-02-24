export default function dialog(dialogElement, openElement, closeElement) {
  const openDOM = document.querySelector(openElement);
  const closeDOM = document.querySelector(closeElement);
  const dialogDOM = document.querySelector(dialogElement);

  openDOM.addEventListener("click", () => {
    dialogDOM.showModal();
  });

  closeDOM.addEventListener("click", () => {
    dialogDOM.close();
  });

  function showModal() {
    dialogDOM.showModal();
  }

  function close() {
    dialogDOM.close();
  }

  return { showModal, close };
}
