import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import React from 'react'

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsers } from '../action/actions';

const TableUser = (props) => {

    //const [listUsers, setListUsers] = useState();

    const dispatch = useDispatch()
    // const fetchAllUser = async () => {
    //     const res = await axios.get("http://localhost:8080/users/all");
    //     const data = res && res.data ? res.data : []
    //     setListUsers(data)
    // }

    useEffect(() => {
        // fetchAllUser();
        dispatch(fetchAllUsers());
    }, [])

    const handleEdit = () => { }
    const handleDelete = (user) => {
        console.log('ng dung bi xoa la', user)
    }
    const listUsers = useSelector((state) => state.user.listUsers)
    return (
        <Container>
            <hr />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers && listUsers.length > 0 && listUsers.map((item, index) => {
                        return (
                            <tr key={`users-${index}`}>
                                <td>{index + 1}</td>
                                <td>{item.email}</td>
                                <td>{item.username}</td>
                                <td>
                                    <button className='btn btn-warning' onClick={handleEdit}>Edit</button>
                                    <button className='btn btn-danger' onClick={() => handleDelete(item)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>

        </Container>
    )
}

export default TableUser