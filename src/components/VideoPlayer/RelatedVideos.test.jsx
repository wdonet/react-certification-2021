import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import RelatedVideosList from './RelatedVideoList';

const build = (Component = <RelatedVideosList />) => {
  const { container } = render(Component);
  return { container };
};

describe('RelatedVideosList', () => {
  it('applies default styles', () => {
    const { firstChild } = build(<RelatedVideosList videos={[]} />).container;
    expect(firstChild).toHaveStyle('height: calc(100vh - 64px)');
    expect(firstChild).toHaveStyle('width: 40%');
    expect(firstChild).toHaveStyle('overflow: scroll');
  });
});
