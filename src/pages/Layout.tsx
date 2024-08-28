import { NavLink, Outlet } from "react-router-dom"

export const Layout = () => {
    return (
        <>
            <header>
                <div className="site-name">
                    <span>Zooparken</span>
                </div>
                <nav>
                    <ul>
                        <li>
                            <NavLink to={'/'}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/animals'}>Djur</NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="contact">
                    <p>Telefon: 999-999</p>
                </div>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer></footer>
        </>
    )
}