import React from 'react';
import ModalStyled from './ModalStyled';
import Title from './Title';
import Paragraph from './Paragraph';
import Button from './Button';

class Modal extends React.Component {
    render() {
        return <ModalStyled>{this.props.layout()}</ModalStyled>
    }
}

export default Modal;