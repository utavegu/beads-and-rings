import React from 'react';
import s from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={s.footer}>

        <section className={s.navigation}>
          <h5 className="visually-hidden">Навигация</h5>
          <ul className={s.nav_list}>
            <li className={s.nav_item}>
              <a href="#">О нас</a>
            </li>
            <li className={s.nav_item}>
              <a href="#">Каталог</a>
            </li>
            <li className={s.nav_item}>
              <a href="#">Акции</a>
            </li>
          </ul>
        </section>

        <section className={s.contacts}>
          <h5 className="visually-hidden">Контакты:</h5>
          <p>Телефон: <a className="footer-contacts-phone" href="tel:+7-123-456-89-01">+7-123-456-89-01</a></p>
          <p>Почта: <a className="footer-contacts-email" href="mailto:testmail@mail.ru">testmail@mail.ru</a></p>

          <ul className={s.social_list}>
						<li>
							<a className={`${s.social_item} ${s.social_item__vk}`} href="#" title="Вконтакте">
								<span className="visually-hidden">Вконтакте</span>
							</a>
						</li>
						<li>
							<a className={`${s.social_item} ${s.social_item__fb}`} href="#" title="Фейсбук">
								<span className="visually-hidden">Фэйсбук</span>
							</a>
						</li>
						<li>
							<a className={`${s.social_item} ${s.social_item__inst}`} href="#" title="Инстаграм">
								<span className="visually-hidden">Инстаграм</span>
							</a>
						</li>
					</ul>
        </section>

        <section className={s.payment_ways}>
          <h5>Принимаем к оплате:</h5>
          <div className={s.pay}>
            <div className={`${s.pay_systems} ${s.pay_systems__paypal}`}></div>
            <div className={`${s.pay_systems} ${s.pay_systems__mastercard}`}></div>
            <div className={`${s.pay_systems} ${s.pay_systems__visa}`}></div>
            <div className={`${s.pay_systems} ${s.pay_systems__yandex}`}></div>
            <div className={`${s.pay_systems} ${s.pay_systems__webmoney}`}></div>
            <div className={`${s.pay_systems} ${s.pay_systems__qiwi}`}></div>
          </div>
        </section>

        <section className={s.copyright}>
          <p className="footer-copyright">&laquo;Бисер и кольца 2021 &copy;&raquo;</p>
        </section>

    </footer>
  )
}
