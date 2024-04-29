import React from 'react';
import checked from '../../assets/checkCircle.svg';
import geo from '../../assets/geo.svg';
import file from '../../assets/file.svg';
import plus from '../../assets/plus.svg';
import house from '../../assets/house.png';
import table from '../../assets/table.png';

const More = () => {
    return (
        <div className='container more'>
            <h2 className='place-title'>
                Узнайте больше про строительство домов
                в <span>коттеджном посёлке</span> - <span>здесь</span>
            </h2>
            <div className="more-containder">
                <h4 className="more-title">
                    Информация о <span>застройщике</span>
                </h4>
                <div className="more-greed">

                    <div className="a more-box">
                        <img src={checked} alt="Плюс" />
                        <p>
                            Мы занимаемся строительством домов в Саратове и области с 2006 года.
                            За это время мы возвели  с нуля более 150 объектов жилого и нежилого назначения.
                        </p>
                    </div>
                    <div className="b more-box">
                        <img src={geo} alt="Местоположение" />
                        <p>
                            Приезжайте в наш офис по адресу:
                            г. Саратов, ул. Советская, 31А
                            С 8 до 17 часов в будние дни.
                            Наши контакты для связи: +7(8452) 812 - 25 - 52
                        </p>
                    </div>
                    <div className="c more-box">
                        <img src={file} alt="Иконка докумена" />
                        <p>
                            Разрешения на строительство
                            и официальные документы доступны по ссылке
                        </p>
                    </div>
                    <div className="d more-box">
                        <img src={plus} alt="Иконцка плюса" />
                        <p>
                            Узнайте больше о строительстве домов из пенобетона здесь
                            Больше о строительстве домов в коттеджном поселке здесь
                        </p>
                    </div>
                    <div className="ad more-box-vertical">
                        {/* <img src={table} alt="Команда" /> */}
                    </div>
                    <div className="ee more-box-horizontal">
                        {/* <img src={house} alt="Дом" /> */}
                    </div>

                </div>
            </div>

        </div>
    )
}

export default More