import styled from "@emotion/styled";

export const Middlebox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 30px;
  height: 500px;
  /* overflow: auto; */
  & p {
    margin: 5px;
  }
`;

export const Mbox = styled.div`
  background-color: purple;
`;

export const Container = styled.div`
  width: 90%;
  height: 100%;
`;
