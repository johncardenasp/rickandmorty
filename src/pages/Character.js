import getHash from "../utils/getHash";
import getData from "../utils/getData";

const Character = async () => {
  const id = getHash();
  const character = await getData(id);

  const {
    image,
    name,
    episode,
    status,
    species,
    gender,
    origin,
    location,
  } = character;

  const view = `
  <section class="Characters-inner">
    <article class="Characters-card dark-theme">
      <img src="${image}"" alt="Character ${name}" />
      <h2>${name}</h2>
    </article>
    <article class="Characters-card">
      <h3>Episodes: ${episode.length}</h3>
      <h3>Status: ${status}</h3>
      <h3>Species: ${species}</h3>
      <h3>Gender: ${gender}</h3>
      <h3>Origin: ${origin.name}</h3>
      <h3>Last location: ${location.name}</h3>
    </article>
  </section>
  `;
  return view;
};

export default Character;
