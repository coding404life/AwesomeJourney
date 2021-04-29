import React from 'react'
import ReactDOM from 'react-dom';
import Backdrop from './Backdrop';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const ModelOverlay = props => {
    const content = (
        <ModalDiv className={`modal ${props.className}`} style={props.style} ref={props.errorRef}>
            <header className={`modal__header ${props.headerClass}`}>
                {props.header}
            </header>
            <form onSubmit={props.onSubmit ? props.onSubmit : event => event.preventDefault}>
                <div className={`modal__content ${props.contentClass}`}>
                    {props.children}
                </div>
                <footer className={`modal__footer ${props.footerClass}`}>
                    {props.footer}
                </footer>
            </form>
        </ModalDiv>
    )
    return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
}

const Modal = props => {
    const nodeRef = React.useRef(null)
    return (
        <React.Fragment>
            <GlobalStyle />
            {props.show && <Backdrop onClick={props.onCancel} />}
            <CSSTransition
                in={props.show}
                timeout={200}
                unmountOnExit
                mountOnEnter
                classNames='modal'
                nodeRef={nodeRef}
            >
                <ModelOverlay errorRef={nodeRef} {...props} />
            </CSSTransition>
        </React.Fragment>
    )
}

const GlobalStyle = createGlobalStyle`
  .modal {
    z-index: 100;
    position: fixed;
    top: 22vh;
    left: 10%;
    width: 80%;
    background: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 8px;
  }
`

const ModalDiv = styled.div`
  z-index: 100;
  position: fixed;
  top: 22vh;
  left: 10%;
  width: 80%;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 8px;

.modal__header {
  width: 100%;
  padding: 1rem 0.5rem;
  background: #2a006e;
  color: white;
}

.modal__header h2 {
  margin: 0.5rem;
}

.modal__content {
  padding: 1rem 0.5rem;
}

.modal__footer {
  padding: 1rem 0.5rem;
}

@media (min-width: 768px) {
    left: calc(50% - 20rem);
    width: 40rem;
}

.modal-enter {
  transform: translateY(-10rem);
  opacity: 0;
}

.modal-enter-active {
  transform: translateY(0);
  opacity: 1;
  transition: all 200ms;
}

.modal-exit {
  transform: translateY(0);
  opacity: 1;
}

.modal-exit-active {
  transform: translateY(-10rem);
  opacity: 0;
  transition: all 200ms;
}
`;
export default Modal
