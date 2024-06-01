import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  gap: 1rem;
  //padding-top: 3rem;
  margin-top: 4rem;

  .modal-content {
    margin-top: 2rem;
    justify-content: space-between;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 3.5rem;
  }

  .empty-card {
    height: 600px;
  }
`;
