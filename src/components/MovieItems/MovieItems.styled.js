import styled from 'styled-components';

export const ReadMore = styled.span`
  color: #5b5bb8;
  text-decoration: underline;
`;

export const ListItems = styled.li`
  border: 1px solid rgb(255 159 0 / 0%);
  border-radius: 12px;
  transition: all 0.2s ease-out;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  -webkit-justify-content: flex-start;
  justify-content: flex-start;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
  -webkit-text-decoration: none;
  text-decoration: none;
  width: 100%;
  box-sizing: border-box;
  text-align: left;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  &:hover {
    transform: scale(1.01) translateX(22px);
    border: 1px solid lightgray;
  }
`;
