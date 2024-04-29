import React from 'react'

const Projects = () => {
    return (
        <div className='container projects'>
            <h4 className="more-title project-main-title">
                Наши <span>проекты</span>
            </h4>

            <div className="projects-wrapper">
                <div className="project-block">
                    <div className="img project-block-img1"></div>
                    {/* <img src={house1} alt="Дом 1" /> */}
                    <div className="project-title">
                        <span></span>
                        <h4>ПРОЕКТ РОЩИНО</h4>
                    </div>
                    <div className="project-tags">
                        <div className="project-tag">
                            футуризм
                        </div>
                        <div className="project-tag">
                            модерн
                        </div>
                    </div>
                </div>

                <div className="project-block">
                    <div className="img project-block-img2"></div>
                    {/* <img src={house2} alt="Дом 2" /> */}
                    <div className="project-title">
                        <div>
                            <span></span>
                        </div>
                        <h4>ПРОЕКТ ФАУНА / АРХИТЕКТОР-ПРОЕКТИРОВЩИК СЕНЬЕР ГОШАН</h4>
                    </div>
                    <div className="project-tags">
                        <div className="project-tag">
                            минимализм
                        </div>
                    </div>
                </div>

                <div className="project-block">
                    <div className="img project-block-img3"></div>
                    {/* <img src={house3} alt="Дом 3" /> */}
                    <div className="project-title">
                        <span></span>
                        <h4>ПРОЕКТ ФАУНА</h4>
                    </div>
                    <div className="project-tags">
                        <div className="project-tag">
                            модерн
                        </div>
                    </div>
                </div>
            </div>


            <div className="button-wrapper">
                <button className='project-discuss'>Обсудить проект дома</button>
            </div>
        </div>

    )
}

export default Projects