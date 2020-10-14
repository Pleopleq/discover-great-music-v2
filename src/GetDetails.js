export async function GetDetails(releaseUrl) {
  const response = await fetch(releaseUrl);
  const details = await response.json();
  return details;
}
