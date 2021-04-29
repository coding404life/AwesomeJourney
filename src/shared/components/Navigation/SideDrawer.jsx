import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

const SideDrawer = props => {
    const nodeRef = React.useRef(null)
    const content = (
        <CSSTransition
            nodeRef={nodeRef}
            in={props.show}
            timeout={200}
            classNames="slide-in-left"
            mountOnEnter
            unmountOnExit
        >
            <Aside className='side-drawer' ref={nodeRef} onClick={props.onClick}>{props.children}</Aside>
        </CSSTransition>
    )
    return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
}

const Aside = styled.aside`
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
    height: 100vh;
    width: 70%;
    background: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
`

export default SideDrawer