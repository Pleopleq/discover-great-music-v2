function closeModal(backdrop) {
  if (backdrop) {
    backdrop.remove();
  }
}

export function Modal(details, imageCover) {
  const backdrop = document.createElement("div");
  const modal = document.createElement("div");
  backdrop.classList.add("backdrop");
  modal.classList.add("modal");

  //TRACKLIST FORMAT
  const tracklist = details.tracklist.map((track) => track);
  const formattedTrackList = tracklist.map((track) => {
    let formattedDuration =
      track.duration === "" ? " Unknown duration" : track.duration;
    return `<li>${track.title} - ${formattedDuration}</li>`;
  });

  if (formattedTrackList.length > 14) {
    const trackListLimit = formattedTrackList.length;
    formattedTrackList.splice(14, trackListLimit);
    formattedTrackList.push(
      `<a href='${details.uri}' target="_blank">Click here to watch the entire list at Discogs.com</a>`
    );
  }

  //YOUTUBE VIDEOS FORMAT
  let formattedVideos;
  if (details.videos != null) {
    const videos = details.videos.map((video) => video);
    formattedVideos = videos.map((video) => {
      return `<li><a href="${video.uri}" target="_blank"> "${video.title}"</a></li>`;
    });
  }

  //ARTISTS FORMAT
  let artist = details.artists.map((artist) => artist.name);
  let artitsString = artist.join(", ");

  //GENRE FORMAT
  let genre = details.genres.map((genre) => genre);
  let genreString = genre.join(", ");

  //STYLES FORMAT
  let styles;
  let stylesString;
  if (details.styles != null) {
    styles = details.styles.map((style) => style);
    stylesString = styles.join(", ");
  } else {
    styles = "Not defined";
  }

  modal.innerHTML = `
    <h1>${artitsString} - ${details.title}</h1>
    <img src="${imageCover}"/>
    <p>Genre: ${genreString}</p>
    <p>Styles: ${stylesString === undefined ? styles : stylesString}</p>
    <p>${details.year === 0 ? "Unknown year" : details.year}</>
    <h2>Tracklist</h2>
    <ol>
        ${formattedTrackList.join(" ")}
    </ol>
    <ul>
    ${formattedVideos === undefined ? "" : formattedVideos.join(" ")}
    </ul>
  `;

  backdrop.appendChild(modal);
  document.body.append(backdrop);

  backdrop.addEventListener("click", function (event) {
    const clickedElement = modal.contains(event.target);
    if (!clickedElement) {
      closeModal(backdrop);
    }
  });
}
