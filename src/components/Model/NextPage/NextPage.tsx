import React from 'react';
import { styled } from '../../../style/stitches.config';
import { FaArrowDown } from 'react-icons/fa';

import { NextPage as NextPageCSS } from './style';

const StyledNextPage = styled('a', NextPageCSS);

type NextPageProps = React.ComponentProps<typeof StyledNextPage>;

export const NextPage = ({ ...props }: NextPageProps) => {
  return (
    <StyledNextPage {...props}>
      <FaArrowDown />
    </StyledNextPage>
  );
};
