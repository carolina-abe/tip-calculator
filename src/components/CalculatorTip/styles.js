import styled from "styled-components";
import Colors from "../../styles/colors";

export const Container = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 160px;

  h2 {
    text-align: center;
    margin-bottom: 30px;
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  background-color: ${Colors.white};
  z-index: 1;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  padding: 15px;

  .btn-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
  }
`