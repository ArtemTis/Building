import React from 'react'
import logoStudio from '../../assets/02studio.png'
import logo from '../../assets/logo.svg'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer-container">
                <div className="footer-content">
                    <h3 className='header-link'>
                        <img src={logo} alt="LOGO" />
                        foam.Block
                    </h3>
                    <h5>ИП №473073089</h5>
                    <h5>г.Саратов, ул.Чернышевского,
                        д.103, 403480</h5>
                    <h5>Политика
                        конфиденциальности</h5>
                    <h5>Информация на сайте  не является
                        публичной офертой</h5>
                </div>

                <div className="footer-content">
                    <h3 className='header-link'>
                        Строительство домов
                        “под ключ”
                    </h3>
                    <h5>Почему строить дом с нами выгодно?</h5>
                    <h5>Расчитать стоимость</h5>
                    <h5>Этапы строительства</h5>
                    <h5>Местоположение поселка</h5>
                    <h5>Информация о застройщике</h5>
                    <h5>Наши проекты</h5>
                </div>

                <div className="footer-content">
                    <h3 className='header-link'>
                        Строительство домов
                        из пенобетона
                    </h3>
                    <h5>Расчитать стоимость</h5>
                    <h5>Этапы строительства</h5>
                    <h5>Почему пенобетон?</h5>
                    <h5>Информация о застройщике</h5>
                    <h5>Наши проекты</h5>
                </div>

                <div className="footer-content">
                    <h3 className='header-link'>
                        Строительство домов в коттеджном
                        посёлке «Терновский»
                    </h3>
                    <h5>Выберите дом, который подходит именно вам</h5>
                    <h5>О посёлке Терновский</h5>
                    <h5>Коммуникации</h5>
                    <h5>Записаться на экскурсию </h5>
                </div>

            </div>

            <div className="footer-downside">
                <h6>dev & design by</h6>
                <img src={logoStudio} alt="Логотип" />
            </div>
        </footer>
    )
}

export default Footer