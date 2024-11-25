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
                                <li><a href="#!">Главная</a></li>
                                <li><a href="#!">Услуги</a></li>
                                <li><a href="#!">Акции</a></li>
                                <li><a href="#!">Контакты</a></li>
                                <li><a href="#!">О Компании</a></li>
                            </ul>
                        </div>
                </div>
            </div>

        </header>
    )
}

export default Header;