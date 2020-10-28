import "./main.css";
import { GetReleases } from "./GetReleases";
import { ShowReleases } from "./ShowReleases";

document.addEventListener("DOMContentLoaded", function () {
  const releasesButton = document.querySelector(".input-container__getcontent");
  const inputContainer = document.querySelector(".input-container");
  const releasesContainer = document.querySelector(".releases");

  releasesButton.addEventListener("click", async function () {
    const alertRemove = releasesContainer.previousSibling;
    let releases;

    if (alertRemove.className === "alert bounce-top") {
      inputContainer.nextElementSibling.remove();
    }
    releases = await GetReleases();

    if (releases.message === "Artist not found.") {
      releases = await GetReleases();
      /* const alert = Notification("Please, try again!", "alert");
      return inputContainer.parentNode.insertBefore(alert, releasesContainer); */
    }

    ShowReleases(releases);
  });
});
