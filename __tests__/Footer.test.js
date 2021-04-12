/* eslint-disable no-undef */
import '@testing-library/jest-dom/extend-expect';

import { render } from '@testing-library/react';
import * as fetch from 'node-fetch';

import Linie from '../pages/[linie]';
import Custom404 from '../pages/404';
import Home from '../pages/index';

describe('Footer', () => {
  test('In Home', () => {
    const { getByText } = render(<Home />);
    expect(getByText('Powered by')).toBeInTheDocument();
    expect(getByText('Datenschutzerklärung')).toBeInTheDocument();
    expect(getByText('Impressum')).toBeInTheDocument();
  });
  test('In 404', () => {
    const { getByText } = render(<Custom404 />);
    expect(getByText('Powered by')).toBeInTheDocument();
    expect(getByText('Datenschutzerklärung')).toBeInTheDocument();
    expect(getByText('Impressum')).toBeInTheDocument();
  });
  test('In Linie', async () => {
    const props = await fetch('https://api.npoint.io/2361ff205b3905b7ebfc').then((props) =>
      props.json()
    );
    const params = "{ linie: '8304' }";
    const { getByText } = render(<Linie props={props} params={params} />);
    expect(getByText('Powered by')).toBeInTheDocument();
    expect(getByText('Datenschutzerklärung')).toBeInTheDocument();
    expect(getByText('Impressum')).toBeInTheDocument();
  });
});
