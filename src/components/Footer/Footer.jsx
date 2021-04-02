import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  /* Так, вроде какая-то библиотека есть, чтобы такое безобразие не разводить... classnames... да не сильно лучше, честно говоря. Но пока так */
  // Платёжные системы
  const paypal = styles.footerPaySystems + ' ' + styles.footerPaySystemsPaypal;
  const masterCard = styles.footerPaySystems + ' ' + styles.footerPaySystemsMasterCard;
  const visa = styles.footerPaySystems + ' ' +  styles.footerPaySystemsVisa;
  const yandex = styles.footerPaySystems + ' ' +  styles.footerPaySystemsYandex;
  const webmoney = styles.footerPaySystems + ' ' +  styles.footerPaySystemsWebmoney;
  const qiwi = styles.footerPaySystems + ' ' +  styles.footerPaySystemsQiwi;
  // Социальные сети
  const twitter = styles.footerSocialLink + ' ' + styles.footerSocialLinkTwitter;
  const vk = styles.footerSocialLink + ' ' + styles.footerSocialLinkVk;

  return (
    <footer className="container bg-light footer">

			<section>
				<h5>Навигация</h5>
				<ul className="nav">
          <li className="nav-item">
            <a href="#" className="nav-link">О нас</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Каталог</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Акции</a>
          </li>
				</ul>
			</section>

      <section className="footer-contacts">
        <h5>Контакты:</h5>
        <a className="footer-contacts-phone" href="tel:+7-123-456-89-01">+7-123-456-89-01</a>
        <span className="footer-contacts-working-hours">Ежедневно: с 09-00 до 18-00</span>
        <a className="footer-contacts-email" href="mailto:testmail@mail.ru">testmail@mail.ru</a>
        <div className="footerSocialLinks">
          <div className={twitter}></div>
          <div className={vk}></div>
        </div>
      </section>

      <section>
        <h5>Принимаем к оплате:</h5>
        <div className={styles.footerPay}>
          <div className={paypal}></div>
          <div className={masterCard}></div>
          <div className={visa}></div>
          <div className={yandex}></div>
          <div className={webmoney}></div>
          <div className={qiwi}></div>
        </div>
      </section>

      <section>
        <p className="footer-copyright">Текст копирайта (мнемоника копирайта)</p>
      </section>

    </footer>
  )
}
