import styled from 'styled-components';

export const MoviesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  & img {
    object-fit: cover;
    object-position: top;
  }
`;

export const MovieItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

export const BigImage = styled.img`
  width: 100%;
  max-height: 300px;
`;

export const MediumImage = styled.img`
  width: 100%;
  max-height: 200px;
`;

export const SmallImage = styled.img`
  width: 100%;
  max-height: 150px;
`;

export const MovieTitle = styled.div`
  margin-top: 10px;
  text-align: center;
  font-weight: bold;
`;
