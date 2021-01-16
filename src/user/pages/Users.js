import React from 'react';
import UsersList from '../components/UsersIist';

const Users = () => {
    const USERS = [
        {
        id: 'u1', 
        name: 'Otto Visocks', 
        image: 'https://hajiri.co/uploads/no_image.jpg', 
        places: 2
        },
        {
        id: 'u2', 
        name: 'Vovčiks', 
        image: 'https://2.bp.blogspot.com/_cQb2tKyozEQ/Sjv31GzwkZI/AAAAAAAABik/_IrTpp9KYN0/s400/crazy_paul.jpg', 
        places: 0
        }
    ];

    return <UsersList items={USERS} />;
};

export default Users;