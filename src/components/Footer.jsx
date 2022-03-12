import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Wrapper>
      <div>Created by <Email href="mailto:hmdshfq@outlook.com">Hammad Shafiq</Email></div>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
`

const Email = styled.a`
  text-decoration: none;
  color: var(--primary-500);
`
export default Footer