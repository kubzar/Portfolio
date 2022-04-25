import styled from 'styled-components'
import Image from 'next/image'

const ImageContainer = ({ image, alt }) => {

  return (
    <>
      <ContainerStyled>
        <Image
          src={image}
          alt={alt}
          objectFit="contain"
          layout="fill"
        >
        </Image>
      </ContainerStyled>
    </>
  )
}

export default ImageContainer