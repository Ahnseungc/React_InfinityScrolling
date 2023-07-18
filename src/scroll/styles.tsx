import styled from "@emotion/styled";

export const Middlebox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  width: 90%;
  height: 300px;
  margin-bottom: 30px;
  border: 1px solid black;
  border-radius: 20px;
  & p {
    margin: 5px;
  }
`;

export const Mbox = styled.div`
  background-color: purple;
`;

export const Highbox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Container = styled.div`
  width: 90%;
  height: 100%;
`;
