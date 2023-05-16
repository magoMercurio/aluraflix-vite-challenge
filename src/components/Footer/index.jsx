import styled from "styled-components"
import { LogoFooter } from "../Ui"
import logo from '../../../public/img/logo.png'

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 143px;
  background-color: var(--color-black-dark);

`

const Coyright = styled.p`
  color: var(--color-gray-light);
  font-size: var(--font-size-body-smaller);
`


const Footer = () => {

  return (
    <FooterContainer>
      <LogoFooter src={logo} alt="logo" />
      <Coyright>Powered by Raul Davila. 2023</Coyright>
    </FooterContainer>
  )

}

export default Footer