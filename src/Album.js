import discogsImage from "./assets/discogs.png";
import { GetDetails } from "./GetDetails";

import { Modal } from "./Modal";

export function Album(props) {
  const element = document.createElement("article");
  element.classList = "releases-album";
  const defaultImage = discogsImage;
  const yearFormatted = props.year === undefined ? "Unknown year" : props.year;

  element.innerHTML = `
  <h2 class="releases-band">Releases of "${props.artist}"</h2>
  <h2>${JSON.stringify(props.artist)} - ${JSON.stringify(props.title)}</h2>
  <img src="${props.thumb.length == 0 ? defaultImage : props.thumb}" />
  <p>${yearFormatted}</p>
  <button class="releases-details">
    Get more details
  </button>
  `;

  element.children[4].addEventListener("click", async function () {
    let details = await GetDetails.call(this, props.resource_url);
    console.log(details);
    Modal.call(this, details);
  });

  return element;
}
