import styled from 'styled-components';

export const MoviesContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2px;
  & img {
    object-fit: cover;
    object-position: top;
  }
`;

export const MovieItem = styled.li`
position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.5s ease-out;
    overflow: hidden;
    min-width: 5%;

    &:hover {
      min-width: 270px;

  }
  &:hover div{
      top: 50%;
      left: 50%;
  }

   @media (max-width: 768px) {
    &:nth-child(n + 4) {
      display: none;
    }
        &:hover {
      min-width: 200px;

  }
  }
`;

export const BigImage = styled.img`
      height: 400px;
  @media (max-width: 768px) {
           height: 300px;
    }
`


export const MovieTitle = styled.div`
position: absolute;
top: 150%;
left: 50%;
background: linear-gradient(to top, black 10%, transparent 100%);
width: 100%;
height: 100%;
transform: translate(-50%, -50%);
text-align: center;
font-weight: bold;
color: orange;
  transition: all 0.5s ease-out;
  & a {
    transform: translate(-50%, -50%);
    position: absolute;
    top: 80%;
    left: 50%;
    padding: 20px;
  }
`;
