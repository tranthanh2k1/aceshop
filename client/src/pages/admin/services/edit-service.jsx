import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'
import { API } from '../../../constants'
import { useDispatch } from 'react-redux'
import { updateServiceAction } from '../../../redux/actions/services'

const EditServicePage = () => {
    const [detailService, setDetailService] = useState([])

    const { register, handleSubmit } = useForm()

    const { id } = useParams()

    useEffect(() => {
        const getService = async () => {
            const { data } = await axios.get(`${API}/service/${id}`)
            const { detailService } = data

            setDetailService(detailService)
        }

        getService()
    }, [])

    const history = useHistory()
    const dispatch = useDispatch()

    const onSubmit = (dataForm) => {
        dispatch(updateServiceAction(id, dataForm))
        history.push('/admin/service/list')
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
                        autoFocus
                        defaultValue={detailService.name}
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
