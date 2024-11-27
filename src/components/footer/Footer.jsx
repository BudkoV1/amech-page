import React from "react";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillPhone,
  AiFillMail,
  AiOutlineEnvironment
} from "react-icons/ai";
import "./footer.css";
import logoimg from "./../../img/logo.png"

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <div className="footer-content">
          <h3
            style={{
              fontFamily: "Aldine",
              fontSize: "2.5rem",
              margin: "3rem",
            }}
          >
            
           <img src={logoimg} alt="Logo" /> AMECH - Лучшее СТО для вашего автомобиля!
          </h3>
          
          <div className="sub">
            <div>
              <b>Навигация по сайту</b>
              <p><a className="a" href="services#!">Услуги</a></p>
              <p><a className="a" href="stock#!">Акции</a></p>
              <p><a className="a" href="contacts#!">Контакты</a></p>
              <p><a className="a" href="#!">О компании</a></p>
            </div>
            <div>
              <b>Записаться на сервис</b>
              <p><button className="btn-footer" id="btn">Записаться</button></p>
            </div>
           
           
            <div>
              <b>Связаться с нами</b>
              <div className="social">
                <AiFillFacebook />
                <AiFillTwitterCircle />
                <AiFillInstagram />
                <p><AiFillPhone /> +375(29)123-45-67</p>
                <p><AiFillMail /> amech@gmail.com</p>
                <p><AiOutlineEnvironment /> Пушкина, 7а</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
