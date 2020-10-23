const Header = () => {
  const view = `
    <header class="Header-main">
      <div class="Header-logo">
          <a href="#">
            <figure>
              <img src="https://occ-0-3994-987.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABddiw4GEUq76B3fmiI7r6NF-GrWeEf99MjwKrfixFKM4B4o1uuitcgbuBNa3n04L5GSamUi2vex4adduBV-S2XGERxn29-ffvoRv.png?r=a6e" alt="Rick and Morty logo"/>
            </figure>
          </a>
      </div>
      <nav class="Header-nav">
      <ul>
        <li><a href="#/about/">About this project</a></li>
        <li><a href="#">Home</a></li>
      </ul>
      </nav>
    </header>
  `;

  return view;
};

export default Header;
