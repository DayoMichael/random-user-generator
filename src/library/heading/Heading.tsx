import React from 'react';
import { HeadingStyles } from './HeadingStyles';

type HeadingProps = {
    text: string
} 

function Heading({text}: HeadingProps) {
  return (
    <HeadingStyles>
        <h2>{text}</h2>
    </HeadingStyles>
  )
}

export default Heading