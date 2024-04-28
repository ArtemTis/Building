import React from 'react'
import checked from "../../assets/checked.svg";
import graph from "../../assets/graph.svg";
import smileFace from "../../assets/smileFace.svg";

const Stonks:React.FC = () => {
    return (
        <div className='container stonks'>
            <h2 className='section-title containder-title'>Почему строить дом с нами <span>выгодно</span>?</h2>

            <div className='stonks-container'>

                <div className='stonks-block'>
                    <img src={checked} alt="Checked" />

                    <h4>Помощь с ипотекой и материнским капиталом</h4>
                    <p>
                        В штате есть ипотечный брокер,
                        который поможет с ипотекой и
                        маткапиталом.
                    </p>
                </div>

                <div className='stonks-block'>
                    <img src={graph} alt="Graph" />

                    <h4>Выгодная цена без переплаты</h4>
                    <p>
                        Вам нужны строители, а не перекупщики.
                        Строим по максимально доступным ценам
                    </p>
                </div>

                <div className='stonks-block'>
                    <img src={smileFace} alt="Smile Face ))" />

                    <h4>Построим дом вашей мечты</h4>
                    <p>
                        Большой опыт и высокая экспертность
                        в строительстве - более 20 лет строим дома
                        в Саратове и области.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Stonks