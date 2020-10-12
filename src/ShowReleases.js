export function ShowReleases(releases) {
  const uiReleases = document.querySelector(".releases");
  const albumContainer = document.createElement("div");
  const albumCover = document.createElement("img");
  const blob = document.createElement("p");

  const title = document.createTextNode(
    JSON.stringify(releases.results[1].title)
  );

  albumCover.src = releases.results[1].cover_image;

  blob.appendChild(title);
  albumContainer.appendChild(blob);
  albumContainer.appendChild(albumCover);
  uiReleases.appendChild(albumContainer);
}
