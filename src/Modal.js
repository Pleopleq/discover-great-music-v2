function closeModal(backdrop) {
  if (backdrop) {
    backdrop.remove();
  }
}

export function Modal(details) {
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

  //STYLE FORMAT
  let styles = details.styles.map((style) => style);
  let stylesString = styles.join(", ");

  modal.innerHTML = `
    <h1>${details.artists.map((artist) => artist.name)}</h1>
    <p>Genre: ${genreString}</p>
    <p>Styles: ${stylesString}</p>
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
