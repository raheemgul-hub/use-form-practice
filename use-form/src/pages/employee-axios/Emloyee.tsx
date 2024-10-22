import axios, { isCancel, AxiosError } from 'axios';
import { useEffect, useState } from 'react';
function Employee() {
    const BackendUrl = 'https://reqres.in/'
    const [users, setUsers] = useState([])

    useEffect(() => {
        const Usersrequest = axios.get(BackendUrl + 'api/users', {
            params: {
                page: 1
            }
        })
        Usersrequest.then((response) => {
            if (response.status == 200) {
                setUsers(response.data.data)
            } else {
                alert('Something is wrong with backend server')
            }
        })
    }, [])
    return (
        <div className="table-container container">
            <table className="custom-table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Avatar</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((users) => (
                        <tr key={users.id}>
                            <td>{users.id}</td>
                            <td>{users.email}</td>
                            <td>{users.first_name}</td>
                            <td>{users.last_name}</td>
                            <td>
                                <img src={users.avatar} width="50" />
                            </td>


                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}
export default Employee