import React, {useState} from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { create } from '../../../api/services'
import { createServiceAction } from '../../../redux/actions/services'

const AddServicePage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const dispatch = useDispatch()
    const history = useHistory()
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")

    const onSubmit = async (dataForm, e) => {

        dispatch(createServiceAction(dataForm))
        history.push('/admin/service/list')
        
        const data = await create(dataForm)
        
        if(data.success) {
            e.target.reset()
            setError("")
            setMessage(data.message)
            alert(data.message)
        } else {
            setError(data.message)
            alert(data.message)
        }
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
                    {errors?.name?.type === "required" && <p className="form__error">Tên dịch vụ không được để trống</p>}
                </div>
                <button type='submit' className='service__button'>Submit</button>
            </form>
        </div>
    )
}

export default AddServicePage
