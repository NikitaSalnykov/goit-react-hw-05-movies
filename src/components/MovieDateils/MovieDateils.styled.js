import styled from 'styled-components';

export const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  margin-bottom: 24px;
  & div {
    @media screen and (min-width: 375px) {
      width: 375px;
    }
    @media screen and (min-width: 768px) {
      width: 768px;
    }
  }
  & img {
    width: 400px;
    object-fit: cover;
    @media screen and (min-width: 768px) {
      width: 200px;
    }
  }

  @media screen and (min-width: 375px) {
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
  & a {
    padding: 50px;
  }
`;

export const ListInform = styled.ul`
  display: flex;
  gap: 20px;
  margin-bottom: 24px;
`;
export const FormSearch = styled.form`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
`;
