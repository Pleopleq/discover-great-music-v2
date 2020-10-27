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

export default {
  closeModal,
  trackListFormatter,
  videoFormatter,
  listFormatter,
};
