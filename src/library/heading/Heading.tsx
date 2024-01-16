import React, { FC } from 'react';
import { HeadingStyles } from './HeadingStyles';

type HeadingProps = {
    text: string
} 

const Heading: FC<HeadingProps> = ({text}) => {
  return (
    <HeadingStyles>
        <h2>{text}</h2>
    </HeadingStyles>
  )
}

export default Heading