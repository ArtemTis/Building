import React from 'react'
import logo from "../../assets/logo.svg";

const Header = () => {
    return (
        <header className='header'>
            <div className='header-left-side'>
                <button className='header-link'>
                    <img src={logo} alt="LOGO" />
                    foam.Block
                </button>

                <button className='header-link'>
                    О пенобетоне
                </button>

                <button className='header-link'>
                    Дома в посёлке "Терновский"
                </button>
            </div>

            <div className='header-right-side'>
                <button className='header-link'>
                    Контакты
                </button>

                <button className='header__primary'>
                    Заказать звонок
                </button>
            </div>
        </header>
    )
}

export default Header