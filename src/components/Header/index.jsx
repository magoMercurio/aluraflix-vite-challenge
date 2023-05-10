import { Button } from "@mui/material"
import styled from "styled-components"

const HeaderSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 40px;
  background-color: #000000e5;
`



const Header = () => {

  return (
    <HeaderSection>
      <img src="../../../public/img/logo.png" alt="logo" />
      <Button variant="contained" size="small" >
        Nuevo Video
      </Button>
    </HeaderSection>
  )
}

export default Header