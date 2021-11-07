function fetchChuckJokes() {
  const chuckURL = "http://api.icndb.com/jokes/";
  return fetch(chuckURL).then((res) => res.json());
}

export function getJoke() {
  return fetchChuckJokes().then((res) => {
    const random = Math.trunc(Math.random() * res.value.length);
    return res.value.filter((quote, index) => (index === random ? quote : ""));
  });
}
