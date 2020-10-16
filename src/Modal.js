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
  const formatedTrackList = tracklist.map((track) => {
    let formattedDuration =
      track.duration === "" ? " Unknown duration" : track.duration;
    return `<li>${track.title} - ${formattedDuration}</li>`;
  });

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
    <h1>${details.artists.map((artist) => artist.name)}</h1>
    <img src="${imageCover}"/>
    <p>Genre: ${genreString}</p>
    <p>Styles: ${stylesString === undefined ? styles : stylesString}</p>
    <p>${details.year}</>
    <h2>Tracklist</h2>
    <ul>
        ${formatedTrackList.join(" ")}
    </ul>
  `;

  backdrop.appendChild(modal);
  document.body.append(backdrop);

  backdrop.addEventListener("click", closeModal.bind(this, backdrop));
}
