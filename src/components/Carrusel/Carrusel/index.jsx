
import styled from 'styled-components';
import Slider from '../Slider'


const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 114px;
  gap: 11px;
`

const TitleCategoria = styled.a`
  box-sizing: border-box;
  width: fit-content;
  height: fit-content;
  color: var(--color-gray-light);
  border: 4px solid var(--color-frontend);
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
  background-color: var(--color-frontend);
`
const DescriptionCategoria = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: var(--font-family);
  font-style: normal;
  font-weight: var(--font-weight-300);
  font-size: var(--font-size-body-medium);
  line-height: var(--line-height-body-medium);
  color: var(--color-gray-light);
`


const Carrusel = () => {

  return (
    <div className="carrusel">
      <TitleContainer>
        <TitleCategoria>Carrusel</TitleCategoria>
        <DescriptionCategoria>descripcion</DescriptionCategoria>
      </TitleContainer>
      <Slider /* {...settings} */ />
    </div>
  )
}


export default Carrusel