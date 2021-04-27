import React from 'react'
import UsersList from '../components/UsersList'

const User = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'yahya',
            image: 'https://picsum.photos/400/200',
            places: 3
        }
    ]
    return (
        <UsersList items={USERS} />
    )
}

export default User
