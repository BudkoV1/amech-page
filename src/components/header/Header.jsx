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
                                <li><a href="#!"></a>Главная</li>
                                <li><a href="#!"></a>Услуги</li>
                                <li><a href="#!"></a>Акции</li>
                                <li><a href="#!"></a>Контакты</li>
                                <li><a href="#!"></a>О Компании</li>
                            </ul>
                        </div>
                </div>
            </div>

        </header>
    )
}

export default Header;