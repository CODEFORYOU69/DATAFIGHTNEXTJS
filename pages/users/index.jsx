import Link from 'next/link';
import { useState, useEffect } from 'react';

import { Spinner } from 'components';
import { Layout } from 'components/users';
import { userService } from 'services';
const mongoose = require('mongoose');


export default Index;
// visible just for admin users 



function Index() {

    

        const [users, setUsers] = useState(null);
        const [isAdmin, setIsAdmin] = useState(false); 

        // get email from local storage and check if admin
const user = userService.userValue;

const ObjectId = mongoose.Types.ObjectId;

const Id = new ObjectId(user.id);


useEffect(() => {
    userService.isAdmin(Id)
        .then(user => {
            if (user.role === "admin") {
                setIsAdmin(true); // Set isAdmin to true if the user is an admin
                userService.getAll().then(x => setUsers(x));
            } else {
                setIsAdmin(false); // Set isAdmin to false otherwise
                userService.getById(Id).then(user => setUsers([user]));
            }
        })
        .catch(error => {
            console.error("Error checking admin status:", error);
        });
}, []);

    function deleteUser(id) {
        setUsers(users && users.map(x => {
            if (x.id === id) { x.isDeleting = true; }
            return x;
        }));
        userService.delete(id).then(() => {
            setUsers(users => users.filter(x => x.id !== id));
        });
    }

    return (
        <Layout>
            <h1>Users</h1>
            {isAdmin && <Link href="/users/add" className="btn btn-sm btn-success mb-2">Add User</Link>}
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th style={{ width: '30%' }}>First Name</th>
                        <th style={{ width: '30%' }}>Last Name</th>
                        <th style={{ width: '30%' }}>email</th>
                        <th style={{ width: '30%' }}>country</th>
                        <th style={{ width: '10%' }}></th>
                    </tr>
                </thead>
                <tbody>
                    { users && users.map(user =>
                        <tr key={user.id}>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.country}</td>
                            <td style={{ whiteSpace: 'nowrap' }}>
                                <Link href={`/users/edit/${user.id}`} className="btn btn-sm btn-primary me-1">Edit</Link>
                                <button onClick={() => deleteUser(user.id)} className="btn btn-sm btn-danger btn-delete-user" style={{ width: '60px' }} disabled={user.isDeleting}>
                                    {user.isDeleting
                                        ? <span className="spinner-border spinner-border-sm"></span>
                                        : <span>Delete</span>
                                    }
                                </button>
                            </td>
                        </tr>
                    )}
                    {!users &&
                        <tr>
                            <td colSpan="4">
                                <Spinner />
                            </td>
                        </tr>
                    }
                    {users && !users.length &&
                        <tr>
                            <td colSpan="4" className="text-center">
                                <div className="p-2">No Users To Display</div>
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
        </Layout>
    );
}


