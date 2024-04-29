import React from 'react'
import map from '../../assets/map.png'

const Place = () => {
    return (
        <div className='container place'>
            <h2 className='place-title'>
                Где лучше построить дом? <span>В нашем посёлке</span> недалеко от Энгельса, подробнее <span>здесь</span>!
            </h2>

            <div className="place-content">
                <div className="place-text">

                    <div className="place-block">
                        <h5 className="place-block-title">Выгода</h5>
                        <div className="place-description">
                            Участок 7 соток в подарок при
                            строительстве дома
                        </div>
                    </div>

                    <div className="place-block">
                        <h5 className="place-block-title">Отдых</h5>
                        <div className="place-description">
                            Волга в 5 минутах ходьбы от дома
                        </div>
                    </div>

                    <div className="place-block">
                        <h5 className="place-block-title">Доступность</h5>
                        <div className="place-description">
                            Центр Энгельса в 20 минутах езды
                        </div>
                    </div>

                    <div className="place-block">
                        <h5 className="place-block-title">Природа</h5>
                        <div className="place-description">
                            Тихое место в экологически чистом районе
                        </div>
                    </div>

                    <div className="place-block">
                        <h5 className="place-block-title">Уникальность</h5>
                        <div className="place-description">
                            Парк Покорителей Космоса в
                            3км от посёлка
                        </div>
                    </div>

                    <div className="place-block">
                        <h5 className="place-block-title">Инфраструктура</h5>
                        <div className="place-description">
                            Рядом школы, магазины и АЗС
                        </div>
                    </div>

                </div>

                <div className="place-map">
                    <img src={map} alt="Карта" />
                </div>
            </div>
        </div>
    )
}

export default Place