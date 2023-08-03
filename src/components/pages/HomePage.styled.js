import styled from "styled-components"

export const DivContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
@media screen and (min-width: 375px) {
    width: 375px;
}
@media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
}
`


export const Section = styled.section`

  padding-top: 40px;
  padding-bottom: 80px;


@media screen and (min-width: 768px) {
    padding-bottom: 32px;

}

@media screen and (min-width: 1440px) {
    padding-top: 16px;
    padding-bottom: 32px;

}
`

