import styled from "styled-components";

export const Icono = styled.img`
  height: 25px;
  width: 25px;
`

export const IconoTema = styled(Icono)`
  filter: ${({ theme }) => theme.filter}
`

export const Btn = styled.button`
  margin: 15px auto 0px auto;
  display: block;
  border-radius: 20px;
  background-color: #41d3be;
  border: none;
  color: white;
  font-weight: 600;
  font-size: 14px;
  padding: 8px 20px;
  cursor: pointer;
`