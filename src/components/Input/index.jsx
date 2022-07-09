import React from 'react'
import * as S from './styles'

function Input() {
  // const [ bill, setBill ] = useState(0)

  return (
    <div>
      <S.Input 
        type="text" 
        value='10'
        onChange={e => console.log("value")}
      />
    </div>
  );
}

export default Input;