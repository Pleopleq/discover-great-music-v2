export async function GetReleases() {
  const randomId = Math.floor(Math.random() * 100000);
  const APIURL = `https://api.discogs.com/artists/${randomId}/releases`;
  const myInit = {
    method: "GET",
    headers: {
      Authorization:
        "Discogs key=ULwWIlZwQMUDOImjYLYB, secret=yzheLubIcQdoLiBogXUwVaLkpWxQSzfI",
    },
  };
  let response = await fetch(APIURL, myInit);
  let bandReleases = await response.json();
  return bandReleases;
}
