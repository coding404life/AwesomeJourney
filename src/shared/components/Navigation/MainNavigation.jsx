import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from '../UIElements/Backdrop';
import styled from 'styled-components';

const MainNavigation = () => {
    const [ drawerIsOpen, setDrawerIsOpen ] = useState(false);

    const openDrawerHandler = () => {
        setDrawerIsOpen(true)
    }
    const closeDrawerHandler = () => {
        setDrawerIsOpen(false)
    }

    return (
        <React.Fragment>
            {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
            <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
                <DrawerNav className='main-navigation__drawer-nav'>
                    <NavLinks />
                </DrawerNav>
            </SideDrawer>
            <MainHeader>
                <button className='main-navigation__menu-btn' onClick={openDrawerHandler}>
                    <span />
                    <span />
                    <span />
                </button>
                <h1 className='main-navigation__title'>
                    <Link to='/'>YourJourney</Link>
                </h1>
                <nav className='main-navigation__header-nav'>
                    <NavLinks />
                </nav>
            </MainHeader>
        </React.Fragment>
    )
}

const DrawerNav = styled.div`
    height: 100%;
`

export default MainNavigation
