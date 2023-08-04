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
        @media screen and (min-width: 1200px) {
      width: 300px;
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
      justify-content: center;

`;
export const FormSearch = styled.form`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
`;

export const ListGenres = styled.ul`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
  & li {
padding: 10px;
        padding: 10px;
    border: 1px solid gray;
    border-radius: 20px;
    color: gray;
  }
`;

export const Score = styled.span`
background-color: ${props => props.color};
font-size: 25px;
color: white;
    width: 40px;
    height: 40px;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ScoreText = styled.form`
  display: flex;
      align-items: center;

  gap: 18px;
  margin-bottom: 24px;
`;