import styled from 'styled-components'
import Image from 'next/image'

const ImageContainer = ({ image, alt }) => {

  return (
    <>
      <Image
        src={image}
        alt={alt}
        objectFit="contain"
        layout="fill"
      >
      </Image>
    </>
  )
}

export default ImageContainer