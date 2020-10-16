import discogsImage from "./assets/discogs.png";
import { GetDetails } from "./GetDetails";
import { Modal } from "./Modal";

export function Album(props) {
  const element = document.createElement("article");
  element.classList = "releases-album";
  const defaultImage = discogsImage;
  const yearFormatted = props.year === undefined ? "Unknown year" : props.year;
  const imageFormatted = props.thumb.length == 0 ? defaultImage : props.thumb;

  element.innerHTML = `
  <h2>${JSON.stringify(props.artist)} - ${JSON.stringify(props.title)}</h2>
  <img src="${imageFormatted}" />
  <p>${yearFormatted}</p>
  <button class="releases-details">
    Get more details
  </button>
  `;

  element.children[3].addEventListener("click", async function () {
    let details = await GetDetails.call(this, props.resource_url);
    Modal.call(this, details, imageFormatted);
  });

  return element;
}
