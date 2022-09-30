import React from "react";
import './Footer.scss';

export default function Footer() {
  return (
    <div className="footer">
      <ul className="footer__links">
        <li className="footer__link"><a href="#">О компании</a></li>
        <li className="footer__link"><a href="#">Услуги</a></li>
        <li className="footer__link"><a href="#">Кейсы</a></li>
        <li className="footer__link"><a href="#">Стать клиентом</a></li>
        <li className="footer__link"><a href="#">Блог</a></li>
        <li className="footer__link"><a href="#">Работа в AGIMA</a></li>
        <li className="footer__link"><a href="#">Контакты</a></li>
      </ul>

      <ul className="footer__icons">
        <li className="footer__icon footer__icon--world"><a href="#"></a></li>
        <li className="footer__icon footer__icon--behance"><a href="#"></a></li>
        <li className="footer__icon footer__icon--vk"><a href="#"></a></li>
        <li className="footer__icon footer__icon--tg"><a href="#"></a></li>
        <li className="footer__icon footer__icon--habr"><a href="#"></a></li>
        <li className="footer__icon footer__icon--v"><a href="#"></a></li>
        <li className="footer__icon footer__icon--twitter"><a href="#"></a></li>
        <li className="footer__icon footer__icon--youtube"><a href="#"></a></li>
      </ul>

      <div className="footer__info">© 2022 AGIMA. Москва, Петровка 19, стр. 4</div>
    </div>
  ) 
}