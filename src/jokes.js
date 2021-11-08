function fetchChuckJokes() {
  const chuckURL = "http://api.icndb.com/jokes/";
  return fetch(chuckURL).then((res) => res.json());
}

export async function getJoke() {
  const res = await fetchChuckJokes();
  const random = Math.trunc(Math.random() * res.value.length);
  return res.value.filter((quote, index) => (index === random ? quote : ""));
}
