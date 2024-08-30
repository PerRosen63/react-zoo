import { NavLink } from "react-router-dom";

export const NotFound = () => {
  return (
    <>
      <header>
        <div className="site-name">
          <span>Zooparken</span>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/animals"}>Djur</NavLink>
            </li>
          </ul>
        </nav>
        <div className="contact">
          <p>Telefon: 999-999</p>
        </div>
      </header>
      <div className="error-page">
        <h4>Tyvärr hittade vi inte din sida.</h4>
      </div>
    </>
  );
};
