import { Album } from "./Album";

export function ShowReleases(props) {
  const uiReleases = document.querySelector(".releases");
  const releasesFragment = new DocumentFragment();
  const releases = props.releases;

  releases.forEach(function (album) {
    const elementAlbum = Album(album);
    releasesFragment.appendChild(elementAlbum);
  });
  uiReleases.appendChild(releasesFragment);
  if (uiReleases.children.length > 25) {
    uiReleases.innerHTML = "";
  }
}
