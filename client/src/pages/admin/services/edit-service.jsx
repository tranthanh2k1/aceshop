import React from 'react'
import { useForm } from 'react-hook-form'

const EditServicePage = () => {
    const { register, handleSubmit } = useForm()

    const onSubmit = (dataForm) => {
        console.log("data", dataForm)
    }

    return (
        <div className='service'>
            <h3 className='admin__page-title'>Sửa dịch vụ</h3>
            <form action="" className='service__form' onSubmit={handleSubmit(onSubmit)}>
                <div className='service__form-group'>
                    <label htmlFor="" className="service__labeel">Tên dịch vụ</label>
                    <input
                        type="text"
                        name="name"
                        placeholder='Tên dịch vụ...'
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

export default EditServicePage
