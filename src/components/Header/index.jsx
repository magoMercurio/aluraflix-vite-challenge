import React from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom'



const HeaderSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: var(--color-black-dark);
  border-bottom: solid 2px var(--color-primary);
`

const BtnHeader = styled(Link)`
  box-sizing: border-box;
  width: 180px;
  height: 54px;
  background-color: var(--color-black-dark);
  color: #ffffff;
  border: 1px solid var(--color-gray-light);
  border-radius: 4px;
  font-family: var(--font-family);
  font-style: normal;
  font-weight: 600;
  font-size: 21px;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  
`

const Header = () => {

  return (
    <HeaderSection>
      <Link to="/">
        <img src="../../../public/img/logo.png" alt="logo" />
      </Link>

        <BtnHeader to="/NuevoVideo">Nuevo Video</BtnHeader>
  
    </HeaderSection>
  )
}

export default Header