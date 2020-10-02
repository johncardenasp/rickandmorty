const About = () => {
  const view = `
    <div class="About">
      <h2>About</h2>
      <p>
      This SPA was built in a 
      <a 
      href="https://platzi.com/clases/spa-javascript/" 
      target="_blank"
      >
      course of Single Page Application from Platzi
      </a>.
      The principal objetive are get data of
      <a 
      href="https://rickandmortyapi.com/" 
      target="_blank"
      >
      the Rick and Morty API
      </a>
      and print the results through a router build with JavaScript Vanilla.
      </p>
    </div>
  `;
  return view;
};

export default About;
