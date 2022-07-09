import React from 'react'
import Button from '../Button'
import Input from '../Input'

import * as S from './styles'

function CalculatorTip() {

  return (
    <S.Container>
      <h2>Tip Calculator</h2>
      <S.Card>
        <Input type="text" />
        <div className="btn-container">
          <Button
            value="5%"
            onClick={() => console.log("5")}
          />
          <Button
            value="10%"
            onClick={() => console.log("10")}
          />
          <Button
            value="15%"
            onClick={() => console.log("15")}
          />
          <Button
            value="25%"
            onClick={() => console.log("25")}
          />
          <Button
            value="50%"
            onClick={() => console.log("50")}
          />
          <Input type="text" />
        </div>
      </S.Card>
    </S.Container>
  );
}

export default CalculatorTip;