import React from 'react';
import styled from 'styled-components';

const MainHeader = props => {
    return (
        <Header className='main-header'>
            {props.children}
        </Header>
    )
}

const Header = styled.div`
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    background: #ff0055;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.26);
    padding: 0 1rem;
    z-index: 5;

.main-navigation__menu-btn {
    width: 3rem;
    height: 3rem;
    background: transparent;
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-right: 2rem;
    cursor: pointer;
}

.main-navigation__menu-btn span {
    display: block;
    width: 3rem;
    height: 2.5px;
    background: white;
}

.main-navigation__title {
    color: white;
}

.main-navigation__title a {
    text-decoration: none;
    color: white;
}

.main-navigation__header-nav {
    display: none;
}


@media (min-width: 768px) {
    .main-navigation__menu-btn {
        display: none;
    }

    .main-navigation__header-nav {
        display: block;
    }
}
 @media (min-width: 768px) {
        .main-header {
            justify-content: space-between;
        }
    }
`
export default MainHeader
