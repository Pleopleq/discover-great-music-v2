function closeModal(backdrop) {
  if (backdrop) {
    backdrop.remove();
  }
}

function trackListFormatter(props) {
  const tracklist = props.map((track) => track);
  const formattedTrackList = tracklist.map((track) => {
    let formattedDuration =
      track.duration === "" ? " Unknown duration" : track.duration;
    return `<li>${track.title} - ${formattedDuration}</li>`;
  });

  if (formattedTrackList.length > 14) {
    const trackListLimit = formattedTrackList.length;
    formattedTrackList.splice(14, trackListLimit);
    formattedTrackList.push(
      `<a href='${props.uri}' target="_blank">Click here to watch the entire list at Discogs.com</a>`
    );
  }

  return formattedTrackList;
}

function videoFormatter(props) {
  let formattedVideos;

  if (props != null) {
    const videos = props.map((video) => video);
    formattedVideos = videos.map((video) => {
      return `<li><a href="${video.uri}" target="_blank"> "${video.title}"</a></li>`;
    });
  }

  return formattedVideos;
}

function listFormatter(props, specific) {
  let list;
  let listString;
  switch (specific) {
    case "name":
      list = props.map((element) => element.name);
      listString = list.join(", ");
      return listString;
    case "genre":
      list = props.map((element) => element);
      listString = list.join(", ");
      return listString;
    case "style":
      if (props != null) {
        list = props.map((style) => style);
        listString = list.join(", ");
        return listString;
      } else {
        list = "Not defined";
        return list;
      }
    default:
      undefined;
  }
}

export function Modal(details, imageCover) {
  const backdrop = document.createElement("div");
  const modal = document.createElement("div");
  backdrop.classList.add("backdrop");
  modal.classList.add("modal");
  modal.classList.add("flip-in-hor-bottom");

  //TRACKLIST FORMAT
  let formattedTrackList = trackListFormatter(details.tracklist);

  //YOUTUBE VIDEOS FORMAT
  let formattedVideos = videoFormatter(details.videos);

  //ARTISTS FORMAT
  let artistString = listFormatter(details.artists, "name");

  //GENRE FORMAT
  let genreString = listFormatter(details.genres, "genre");

  //STYLES FORMAT
  let stylesString = listFormatter(details.styles, "style");

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
        closeModal(backdrop);
      }, 400);
      modal.classList.add("slide-out-bck-center");
    }
  });
}
