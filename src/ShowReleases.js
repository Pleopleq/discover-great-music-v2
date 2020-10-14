import { Album } from "./Album";

export function ShowReleases(props) {
  const uiReleases = document.querySelector(".releases");
  const releasesFragment = new DocumentFragment();
  const releases = props.releases;
  if (uiReleases.children.length >= 1) {
    uiReleases.innerHTML = "";
  }

  releases.forEach(function (album) {
    const elementAlbum = Album(album);

    releasesFragment.appendChild(elementAlbum);
  });
  uiReleases.appendChild(releasesFragment);
}
