import React from 'react'
import arrow from "../../assets/arrow.svg"

const Hero = () => {
    return (
        <div className='hero-screen'>
            <h1 className='hero-title'>
                Строительство домов <span>«под ключ»</span> <br />
                в Саратовской области
            </h1>

            <div className='down-side'>
                <div>
                    <h2 className='hero-subtitle'>
                        РАСЧИТАТЬ СТОИМОСТЬ
                    </h2>
                    <button>
                        <img src={arrow} alt="LINK TO" />
                    </button>
                </div>

                <p className='hero-description'>
                    20 лет на рынке <br />
                    Сроки строго по договру <br />
                    Построим дом без переплаты <br />
                </p>
            </div>
        </div>
    )
}

export default Hero