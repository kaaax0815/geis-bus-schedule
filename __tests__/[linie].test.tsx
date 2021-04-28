/* eslint-disable no-undef */
import '@testing-library/jest-dom/extend-expect';

import { render } from '@testing-library/react';

import params from '../__mocks__/paramsMock';
import props from '../__mocks__/propsMock';
import { getStaticPaths, getStaticProps } from '../pages/[linie]';
import Linie from '../pages/[linie]';

describe('Linie', () => {
  test('In Linie', async () => {
    const propsMock = props.linie8304;
    const { getByText, getAllByText } = render(<Linie props={propsMock} params={params} />);
    expect(getByText('Linie: ' + params.linie.toString())).toBeInTheDocument();
    expect(
      getAllByText(props.linie8304.arrays[0].FROM + ' → ' + props.linie8304.arrays[0].TO)[0]
    ).toBeInTheDocument();
    expect(
      getAllByText(props.linie8304.arrays[0].FROM + ' → ' + props.linie8304.arrays[0].TO)[1]
    ).toBeInTheDocument();
    expect(
      getAllByText(props.linie8304.arrays[1].FROM + ' → ' + props.linie8304.arrays[1].TO)[0]
    ).toBeInTheDocument();
    expect(
      getAllByText(props.linie8304.arrays[1].FROM + ' → ' + props.linie8304.arrays[1].TO)[1]
    ).toBeInTheDocument();
  });
  test('In Linie', async () => {
    // https://github.com/vercel/next.js/discussions/24555
    await getStaticPaths({ locales: ['de'] });
    await getStaticProps({ params });
  });
});
