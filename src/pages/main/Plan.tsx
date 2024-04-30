import React from 'react'

const Plan = () => {
    return (
        <div className='plan'>
            <h2 className='plan-title'>
                Посмотрите на <span>6 этапов</span>, как будет строиться ваш дом
            </h2>

            <div className="plan-container">
                <div className="plan-step">
                    <h2>1</h2>
                    <h4>Cогласовывание</h4>
                </div>

                <div className="plan-step">
                    <h2>2</h2>
                    <h4>Схема планировки</h4>
                </div>

                <div className="plan-step">
                    <h2>3</h2>
                    <h4>Заливка фундамента</h4>
                </div>

                <div className="plan-step2">
                    <h2>4</h2>
                    <h4>Возведение стен</h4>
                </div>

                <div className="plan-step2">
                    <div className="plan-step-content">

                        <div className='plan-step-title'>
                            <h2>5</h2>
                            <h4>Установка крыши</h4>
                        </div>


                        <button className='project-discuss'>Обсудить проект дома</button>
                    </div>

                </div>

                <div className="plan-step2">
                    <h2>6</h2>
                    <h4>Внешняя отделка</h4>
                </div>
            </div>

        </div>
    )
}

export default Plan