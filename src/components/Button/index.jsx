import React from 'react';
import * as S from './styles'

function Button({ onClick, value }) {
  
  return (
    <S.Button onClick={onClick}>{value}</S.Button>
  );
}

export default Button;