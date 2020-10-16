export function Notification(message, type) {
  const element = document.createElement("div");
  const contentAlert = document.createElement("p");
  element.classList.add(type);
  contentAlert.textContent = message;
  element.appendChild(contentAlert);

  return element;
}
