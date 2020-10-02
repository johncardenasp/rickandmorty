const Header = () => {
  const view = `
    <div class="Header-main">
      <div class="Header-logo">
        <h1>
          <a href="#">
            <img src="https://rdbl.co/36jogHe" class="animate__heartBeat" alt="Rick and Morty logo" />
          </a>
        </h1>
      </div>
      <div class="Header-nav">
        <a href="#/about/">
          About this project
        </a>
        <a href="#">
          Home
        </a>
      </div>
    </div>
  `;

  return view;
};

export default Header;
