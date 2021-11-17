import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { createServiceAction } from '../../../redux/actions/services'

const AddServicePage = () => {
    const { register, handleSubmit } = useForm()

    const dispatch = useDispatch()

    const history = useHistory()

    const onSubmit = (dataForm) => {
        dispatch(createServiceAction(dataForm))
        history.push('/admin/service/list')
    }

    return (
        <div className='service'>
            <h3 className='admin__page-title'>Thêm dịch vụ</h3>
            <form action="" className='service__form' onSubmit={handleSubmit(onSubmit)}>
                <div className='service__form-group'>
                    <label htmlFor="" className="service__labeel">Tên dịch vụ</label>
                    <input
                        type="text"
                        name="name"
                        placeholder='Tên dịch vụ...'
                        autoFocus
                        className='service__form-input'
                        {...register('name', {
                            required: true
                        })}
                    />
                </div>
                <button type='submit' className='service__button'>Submit</button>
            </form>
        </div>
    )
}

export default AddServicePage
