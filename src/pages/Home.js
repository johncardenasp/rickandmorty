import getData from "../utils/getData";

const Home = async () => {
  const characters = await getData();
  const view = `
    <section class="Characters">
      ${characters.results
        .map(
          (character) => `
        <article class="Character-item">
          <a href="#/${character.id}/">
            <img src="${character.image}" alt="${character.name}">
            <h2>${character.name}</h2>
            <em>${character.status}</em>
          </a>
        </article>
      `
        )
        .join("")}
    </section>
  `;
  return view;
};

export default Home;
