import styled from "styled-components";

export const Icono = styled.img`
  height: 25px;
  width: 25px;
`

export const IconoTema = styled(Icono)`
  filter: ${({ theme }) => theme.filter}
`

export const LogoMain = styled.img`
  width: 168px;
  height: 40px;
`

export const LogoFooter = styled.img`
  width: 252px;
  height: 60px;
`

export const Btn = styled.button`
  margin: 15px auto 0px auto;
  display: block;
  border-radius: 20px;
  border: none;
  color: white;
  font-weight: 600;
  font-size: 14px;
  padding: 8px 20px;
  cursor: pointer;
  background-color: #41d3be;
`

export const Abtn = styled.a`
box-sizing: border-box;
width: fit-content;
height: fit-content;
color: var(--color-gray-light);
border-radius: 4px;
font-family: var(--font-family);
font-style: normal;
font-weight: var(--font-weight-400);
font-size: var(--font-size-title-small);
line-height: var(--line-height-title-small);
display: flex;
align-items: center;
justify-content: center;
text-align: center;
padding: 4px 8px;
background-color: var(--color-frontend);
border: 2px solid var(--color-frontend);
`

export const Parrafo = styled.p`
display: flex;
align-items: center;
justify-content: center;
text-align: center;
font-family: var(--font-family);
font-style: normal;
font-weight: var(--font-weight-300);
font-size: var(--font-size-body-medium);
line-height: var(--line-height-body-medium);
`
export const TitleBig = styled.h2`
  font-family: var(--font-family);
  font-style: normal;
  font-weight: var(--font-weight-400);
  font-size: var(--font-size-title-big);
  line-height: var(--line-height-title-big);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4px 8px;
  margin-top: 50px;
  margin-bottom: 30px;
`