import React from 'react';
import StyledButton from './StyledButton';

const Button = ({label, click}) => <StyledButton onClick={click}>{label}</StyledButton>

export default Button;