import React from 'react';
import { styled } from '../../../style/stitches.config';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

import { NextPage as NextPageCSS } from './style';

const StyledNextPage = styled('a', NextPageCSS);

interface NextPageProps extends React.ComponentProps<typeof StyledNextPage> {
  value?: string;
  reset?: boolean;
}

export const NextPage = ({ value, reset = false, ...props }: NextPageProps) => {
  return (
    <StyledNextPage {...props}>
      {value}
      {reset ? <FaArrowUp /> : <FaArrowDown />}
    </StyledNextPage>
  );
};
