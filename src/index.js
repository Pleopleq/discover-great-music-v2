import "./main.css";
import { GetReleases } from "./GetReleases";
import { ShowReleases } from "./ShowReleases";

document.addEventListener("DOMContentLoaded", function () {
  const releasesButton = document.querySelector(".input-container__getcontent");

  releasesButton.addEventListener("click", async function () {
    let releases = await GetReleases();
    ShowReleases(releases);
  });
});
