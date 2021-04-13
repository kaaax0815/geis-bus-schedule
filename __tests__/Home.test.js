/* eslint-disable no-undef */
import '@testing-library/jest-dom/extend-expect';

import { render } from '@testing-library/react';
import * as fetch from 'node-fetch';

import Home from '../pages/index';

describe('Homepage', () => {
  test('In Home', async () => {
    const props = await fetch('https://api.npoint.io/5853be5c4d0d6999f9d4').then((props) =>
      props.json()
    );
    const { getByText } = render(<Home props={props} />);
    expect(getByText('Geis')).toBeInTheDocument();
    expect(getByText('Busfahrplan')).toBeInTheDocument();
    expect(getByText('8304')).toBeInTheDocument();
  });
});
