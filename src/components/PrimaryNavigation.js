import "./PrimaryNavigation.scss";

function PrimaryNavigation(){
    return (
        <nav className="primaryNavigation">
            <a href="/" className="primaryNavigation__brand">SaaS Company</a>
            <ul className="primaryNavigation__menu">
                <li className="primaryNavigation__menuItem"><a className="primaryNavigation__menuLink" href="/home">Home</a></li>
                <li className="primaryNavigation__menuItem"><a className="primaryNavigation__menuLink" href="/about">About</a></li>
                <li className="primaryNavigation__menuItem"><a className="primaryNavigation__menuLink" href="/contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default PrimaryNavigation;