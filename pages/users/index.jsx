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
    const [showModal, setShowModal] = useState(false);
    const [userIdToDelete, setUserIdToDelete] = useState(null);


    // get email from local storage and check if admin
    const user = userService.userValue;

    const ObjectId = mongoose.Types.ObjectId;

    const Id = new ObjectId(user.id);

    function openModal(id) {
        setUserIdToDelete(id);
        setShowModal(true);
    }

    function closeModal() {
        setUserIdToDelete(null);
        setShowModal(false);
    }



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

            <div className=" ">
                {isAdmin ? <h1>Users</h1> : <h1>My Profile</h1>}
                {isAdmin && <Link href="/users/add" className="btn btn-sm btn-success mb-2">Add User</Link>}
                {isAdmin ? <table className="table table-striped">
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
                        {users && users.map(user =>
                            <tr key={user.id}>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.email}</td>
                                <td>{user.country}</td>
                                <td style={{ whiteSpace: 'nowrap' }}>
                                    <Link href={`/users/edit/${user.id}`} className="btn btn-sm btn-primary me-1">Edit</Link>
                                    <button onClick={() => openModal(user.id)} className="btn btn-sm btn-danger btn-delete-user" >
                                    Delete
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
                    :
                    // make on list of the user 
                    <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg mx-auto mt-10">
                        {users && users.map(user => (
                            <div key={user.id}>
                                <h2 className="text-2xl font-bold mb-4">{user.firstName} {user.lastName}</h2>
                                <p className="text-lg mb-3"><span className="font-semibold">Email:</span> {user.email}</p>
                                <p className="text-lg mb-3"><span className="font-semibold">Country:</span> {user.country}</p>
                                <Link href={`/users/edit/${user.id}`} className="btn btn-primary me-1">Edit Profile</Link>
                                <button onClick={() => openModal(user.id)} className="btn btn-sm btn-danger btn-delete-user" >
                                    Delete
                                </button>

                            </div>
                        ))}
                    </div>}
                {showModal && (
                    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-6 rounded-lg">
                            <h2 className="text-xl font-bold mb-4">Confirm Deletion</h2>
                            <p className="mb-6">Are you sure you want to delete this user?</p>
                            <button onClick={() => deleteUser(userIdToDelete)} className="btn btn-danger me-4">
                                Yes, Delete
                            </button>
                            <button onClick={closeModal} className="btn btn-secondary">
                                Cancel
                            </button>
                        </div>
                    </div>
                )}


            </div>
        </Layout>
    );
}


