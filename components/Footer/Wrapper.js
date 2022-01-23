import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #031b34;
  padding: 3rem 6rem;
  @media (max-width: 700px) {
    padding: 4rem;
  }
  @media (max-width: 550px) {
    padding: 4rem 2rem;
  }
`;

export default Wrapper;
