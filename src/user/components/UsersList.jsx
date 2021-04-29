import React from 'react';
import UsersItem from './UsersItem';
import { Card } from '../../shared';
import styled from 'styled-components';

const UsersList = props => {
    if (props.items.length === 0) {
        return (
            <div className="center">
                <Card>
                    <h2>No users found.</h2>
                </Card>
            </div>
        )
    };

    return (
        <UL className="users-list">
            {props.items.map(user => (
                <UsersItem
                    key={user.id}
                    id={user.id}
                    image={user.image}
                    name={user.name}
                    placeCount={user.places}
                />
            ))}
        </UL>
    )
}

const UL = styled.ul`
    list-style: none;
    margin: 0 auto;
    padding: 0;
    width: 90%;
    max-width: 50rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`
export default UsersList
