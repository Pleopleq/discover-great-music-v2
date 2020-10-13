export function Album(props) {
  const element = document.createElement("article");
  const defaultImage = "./assets/discogs.png";
  element.innerHTML = `
  <h2 class="releases-band">Releases of "${props.artist}"</h2>
  <h2>${JSON.stringify(props.artist)} - ${JSON.stringify(props.title)}</h2>
  <img src="${props.thumb.length == 0 ? defaultImage : props.thumb}">
    `;

  return element;
}
