import logoimg from "./../../img/logo.png"
import "./header.css"


function Header () {
    return (
        <header
         className="header">
            <div className="container">
                <div className="header_row">
                    <div className="header_logo">
                        <img src={logoimg} alt="Logo" />
                        <span>AMECH</span>
                    </div>
                        <div className="header_nav">
                            <ul>
                                <li><a className="a" href="home#!">Главная</a></li>
                                <li><a className="a" href="services#!">Услуги</a></li>
                                <li><a className="a" href="stock#!">Акции</a></li>
                                <li><a className="a" href="contacts#!">Контакты</a></li>
                            </ul>
                        </div>
                </div>
            </div>

        </header>
    )
}

export default Header;