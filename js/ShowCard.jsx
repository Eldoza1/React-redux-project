// @flow
import React from 'react'
import { shape, string } from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  width        : 32%;
  border       : 2px solid #333;
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow     : hidden;
`

const Image = styled.img`
  width       : 46%;
  float       : left;
  margin-right: 10px;
`
const ShowCard = (props: { poster: string, title: string, year: string, description: string }) => {
  const { title, year, description } = props
  return(
    <Wrapper>
      <Image alt={`${props.title} Show Poster`} src={`/public/img/posters/${props.poster}`}
      />
      <h3>{title}</h3>
      <h4>({year})</h4>
      <p>{description}</p>
    </Wrapper>
  )
}

export default ShowCard
