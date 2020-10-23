export function Notification(message, type) {
  const element = document.createElement("div");
  const contentAlert = document.createElement("p");
  element.classList.add(type);
  element.classList.add("bounce-top");
  contentAlert.textContent = message;
  element.appendChild(contentAlert);

  return element;
}
