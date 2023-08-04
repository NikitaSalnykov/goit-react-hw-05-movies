import styled from 'styled-components';

export const ReadMore = styled.span`
color: #5b5bb8;
text-decoration: underline;
`;

export const TrendingOverlay = styled.div`
  & li {
    border: 1px solid rgb(255 159 0 / 0%);
          border-radius: 12px;
    transition: all 0.2s ease-out;
    &:hover {
      transform: scale(1.01) translateX(22px);
      border: 1px solid lightgray;
      
    }
  }
`;