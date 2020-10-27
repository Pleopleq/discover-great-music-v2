import utils from "./utils";

export function Modal(details, imageCover) {
  const backdrop = document.createElement("div");
  const modal = document.createElement("div");
  backdrop.classList.add("backdrop");
  modal.classList.add("modal");
  modal.classList.add("flip-in-hor-bottom");

  //TRACKLIST FORMAT
  let formattedTrackList = utils.trackListFormatter(details.tracklist);

  //YOUTUBE VIDEOS FORMAT
  let formattedVideos = utils.videoFormatter(details.videos);

  //ARTISTS FORMAT
  let artistString = utils.listFormatter(details.artists, "name");

  //GENRE FORMAT
  let genreString = utils.listFormatter(details.genres, "genre");

  //STYLES FORMAT
  let stylesString = utils.listFormatter(details.styles, "style");

  modal.innerHTML = `
  <div class="modal-body">
    <h1 class="details-artist">${artistString} - ${details.title}</h1>
    <img class="details-cover" src="${imageCover}"/>
    <div class="details-container">
    <p class="details-container__genre">Genre: ${genreString}</p>
    <p class="details-container__styles">Styles: ${stylesString}</p>
    <p class="details-container__years">${
      details.year === 0 ? "Unknown year" : details.year
    }</>
    </div>
    <h2 class="details-tracklist">Tracklist</h2>
    <ol class="details-tracklist__tracks">
        ${formattedTrackList.join(" ")}
    </ol>
    <ul class="details-videos">
    ${formattedVideos === undefined ? "" : formattedVideos.join(" ")}
    </ul>
  </div>
  `;

  backdrop.appendChild(modal);
  document.body.append(backdrop);

  backdrop.addEventListener("click", function (event) {
    const clickedElement = modal.contains(event.target);
    if (!clickedElement) {
      setTimeout(() => {
        utils.closeModal(backdrop);
      }, 400);
      modal.classList.add("slide-out-bck-center");
    }
  });
}
