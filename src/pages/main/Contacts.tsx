import { Button, Form, Input } from 'antd'
import React from 'react'
import bluePrint from '../../assets/template.png'

const Contacts = () => {
    return (
        <div className='container contacts'>
            <h2 className='section-title'>Если вас интересует строительство дома из <span>пенобетона</span>, то переходите по ссылке </h2>

            <div className="contacts-containder">
                <div className="image">
                    <img src={bluePrint} alt="Чертеж дома" />
                </div>
                <div className="contact-form">
                    <h3>У вас уже есть готовая смета? Пришлите её и с вероятностью 98% мы уменьшим её стоимость без потери качества!</h3>

                    <Form>
                        <Form.Item>
                            <label>Имя</label>
                            <Input placeholder='Ваше имя' />
                        </Form.Item>
                        <Form.Item>
                            <label>Номер телефона</label>
                            <Input name='phone' />
                        </Form.Item>
                        <div className='buttonWrapper'>
                            <Button type="primary" htmlType="submit">
                                Отправить
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Contacts