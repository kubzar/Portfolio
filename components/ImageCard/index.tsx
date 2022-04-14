import styled from 'styled-components'
import Image from 'next/image'

const Wrapper = styled.a`

`

const ImageContainer = () => {
  return (
    <Wrapper>
      <Image
        src="/images/portrait1.jpg"
        alt=""
        width="100%" height="100%" layout="responsive" objectFit="contain">
      </Image>
    </Wrapper>
  )
}

export default ImageContainer