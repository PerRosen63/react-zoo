import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <section className="home">
        <h1>Hjälp Zooparken att mata djuren!</h1>
        <div>
          <Link to={`/animals`}>Möt våra djur!</Link>
        </div>
      </section>
    </>
  );
};
