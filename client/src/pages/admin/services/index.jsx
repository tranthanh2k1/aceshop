import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { listServiceAction, removeServiceAction } from '../../../redux/actions/services'
import { Table } from 'reactstrap';
import { Link } from 'react-router-dom';

const ListServicePage = () => {

    const { listService } = useSelector(state => state.service)
    console.log("list", listService)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listServiceAction())
    }, [])

    const handleRemove = (id) => {
        console.log(id)
        dispatch(removeServiceAction(id))
    }

    return (
        <div>
            <h3 className='admin__page-title'>Danh sách dịch vụ</h3>
            <Table
            >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Dịch vụ</th>
                        <th>
                            <Link to='/admin/service/add'>Thêm dịch vụ</Link>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {listService.map((item, index) => (
                        <tr key={index}>
                            <th scope="row">{index}</th>
                            <td>{item.name}</td>
                            <td>
                                <Link to={`/admin/service/edit/${item._id}`}>Sửa</Link>
                                <button onClick={() => handleRemove(item._id)}>Xóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default ListServicePage
