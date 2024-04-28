import React from 'react'
import {Form, Input, Radio, Select} from 'antd';

const Calculate = () => {
  return (
    <div className='container containder-title'>
      <h2 className='section-title'>Рассчитайте стоимость строительства дома</h2>
      <div className='stepper'>

      </div>

      <div className="calculate-containder">
        <div className="settings">

          <Form>
             <Form.Item>
              <label>Площадь дома, м²</label>
              <Select>
                <Select.Option value="a">350</Select.Option>
                <Select.Option value="b">450</Select.Option>
                <Select.Option value="c">550</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item>
              <label>Высота потолков, м"</label>
              <Input/>
            </Form.Item>

            <Form.Item>
              <label>Количество этажей</label>
              <Radio.Group>
                <Radio value="apple"> 1 </Radio>
                <Radio value="pear"> 2 </Radio>
                <Radio value="wa"> 3 </Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item>
              <label>Наличие террасы</label>
              <Radio.Group>
                <Radio value="apple"> Да </Radio>
                <Radio value="pear"> Нет </Radio>
              </Radio.Group>
            </Form.Item>
            
          </Form>
        </div>
        <div className="preview">
          <div style={{width: "650px", height: "450px", background: "#2E2E2E"}}></div>
            <button className='settings-nextStep'>Следующий этап</button>
        </div>
        <div className="total">
          <h4 className='totalPrice-title'>Стоимость строительства:</h4>
          <h2 className='total-price'>754,000₽</h2>
        </div>
      </div>

    </div>
  )
}

export default Calculate