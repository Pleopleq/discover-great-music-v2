import "./main.css";
import { GetReleases } from "./GetReleases";
import { ShowReleases } from "./ShowReleases";
import { Notification } from "./Notification";

document.addEventListener("DOMContentLoaded", function () {
  const releasesButton = document.querySelector(".input-container__getcontent");
  const inputContainer = document.querySelector(".input-container");
  const releasesContainer = document.querySelector(".releases");

  releasesButton.addEventListener("click", async function () {
    const alertRemove = releasesContainer.previousSibling;

    if (alertRemove.className === "alert") {
      inputContainer.nextElementSibling.remove();
    }

    let releases = await GetReleases();

    if (releases.message === "Artist not found.") {
      const alert = Notification("Please, try again!", "alert");
      return inputContainer.parentNode.insertBefore(alert, releasesContainer);
    }

    ShowReleases(releases);
  });
});
