import styled from "styled-components";

export const CustomHeader = styled.header`
background-color: black;
color: white;
height: 90px;
padding: 24px;
margin: 0 auto;
 & nav {
display: flex;
gap: 20px;
& a {
  font-size: 24px
}
}
`