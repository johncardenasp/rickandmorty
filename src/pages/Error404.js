const Error404 = () => {
  let header = document.querySelector("header");

  const view = `
  <div class="Error404">
    <h3>Error 404 - Page not found</h3>
    <p>
      This is not your dimension. 
      <br /> 
      Please click 
      <a href="/">
        here to back home
      </a>
      🏠
    </p>
    <figure>
      <img src="../src/images/rick-and-morty.png">
    </figure>
    </div>
  `;

  if (Error404) {
    header.classList.add("Header-hidden");
  } else {
    header.classList.remove("Header-hidden");
  }

  return view;
};

export default Error404;
