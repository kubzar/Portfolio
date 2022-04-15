import Image from 'next/image'
import styled from 'styled-components'

const ImageContainer = ({ image, alt }) => {
  return (
    <>
      <Image
        src={image}
        alt={alt}
        width="100%" height="100%" objectFit="contain">
      </Image>
    </>
  )
}

export default ImageContainer