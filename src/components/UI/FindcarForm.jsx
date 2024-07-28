import React from 'react'
import "../../styles/find-car-form.css"
import { Form,FormGroup } from 'reactstrap'


const FindcarForm = () => {
  return (
   <Form className='form'>
    <div className="d-flex justify-content-between align-items-center flex-wrap">
        <FormGroup className='form_group'>
            <input type="text" placeholder='From address' required />
        </FormGroup>

        <FormGroup className='form_group'>
            <input type="text" placeholder='To address' required />
        </FormGroup>

        <FormGroup className='form_group'>
            <input type="date" placeholder='Journey date' required />
        </FormGroup>

        <FormGroup className='form_group '>
            <input className='journey_time d-flex' type="time" placeholder='Journey time' required />
        </FormGroup>

        <FormGroup className='select_group'>
           <select name="" id="">
            <option value="ac">AC car</option>
            <option value="non-ac">NON AC car</option>
           </select>
        </FormGroup>
        
        <FormGroup className='select_group'>
           <button className='btn find_car-btn'>Find Car</button>
        </FormGroup>
    </div>
   </Form>
  )
}

export default FindcarForm