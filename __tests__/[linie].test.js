/* eslint-disable no-undef */
import '@testing-library/jest-dom/extend-expect';

import { render } from '@testing-library/react';

import params from '../__mocks__/paramsMock';
import linie8304 from '../__mocks__/propsMock';
import { getStaticPaths, getStaticProps } from '../pages/[linie]';
import Linie from '../pages/[linie]';

describe('Linie', () => {
  test('In Linie', async () => {
    const props = linie8304.linie8304;
    const { getByText } = render(<Linie props={props} params={params} />);
    expect(getByText('Linie: ' + params.linie.toString())).toBeInTheDocument();
  });
  test('In Linie', async () => {
    await getStaticPaths({ params });
    await getStaticProps({ params });
  });
});
