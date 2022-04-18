import styled from 'styled-components'
import Image from 'next/image'

const ImageContainer = ({ image, alt }) => {

  return (
    <>
      <Image
        src={image}
        alt={alt}
        objectFit="contain"
        width="100vw"
        height="100vw"
      >
      </Image>
    </>
  )
}

export default ImageContainer