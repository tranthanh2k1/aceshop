import React, { useEffect } from 'react'
import { listUserAction, removeUserAction } from '../../../redux/actions/user';
import { Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const ListUserPage = () => {
  
    const { listUser } = useSelector(state => state.user)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(listUserAction())
    }, [])

    const handleRemove = (id) => {
        dispatch(removeUserAction(id))
    }
    return (
        <div>
            <h3 className="">Danh sách quản lý tài khoản</h3>
            <Link to="/admin/user/addUser" className="btn btn-danger"> Thêm tài khoản</Link>
            <Table>
                <thead>
                    <th>STT</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Position</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {listUser && listUser.map((item, index) => {
                        <tr key={index}>
                            <th scope="row">{index}</th>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            {/* <td>{item.role}</td> */}
                            <td>
                                <Link to={`/admin/user/edit/${item._id}`} className='btn btn-primary'>Edit</Link>
                                <button onClick={() => handleRemove(item._id)} className='btn btn-danger ml-1'>Delete</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </Table>
        </div>
    )
}

export default ListUserPage
