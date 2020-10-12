export async function GetReleases() {
  const APIURL = "https://api.discogs.com/database/search?q=Nirvana";
  var myInit = {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",
      "Access-Control-Allow-Methods": "GET,POST,OPTIONS,DELETE,PUT",
      Authorization:
        "Discogs key=ULwWIlZwQMUDOImjYLYB, secret=yzheLubIcQdoLiBogXUwVaLkpWxQSzfI",
      "Content-Type": "application/json",
    },
  };

  let bandReleases = fetch(APIURL, myInit)
    .then((response) => response.json())
    .catch(function (error) {
      console.error(error);
    });
  return bandReleases;
}
