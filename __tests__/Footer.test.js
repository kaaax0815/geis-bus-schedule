/* eslint-disable no-undef */
import '@testing-library/jest-dom/extend-expect';

import { render } from '@testing-library/react';

var { linie8304, linien } = require('../__mocks__/propsMock');
import params from '../__mocks__/paramsMock';
import Linie from '../pages/[linie]';
import Custom404 from '../pages/404';
import Home from '../pages/index';

describe('Footer', () => {
  test('In Home', async () => {
    const props = linien;
    const { getByText } = render(<Home props={props} />);
    expect(getByText('Powered by')).toBeInTheDocument();
    expect(getByText('Datenschutzerklärung')).toBeInTheDocument();
    expect(getByText('Impressum')).toBeInTheDocument();
    expect(getByText('Nach oben')).toBeInTheDocument();
  });
  test('In 404', () => {
    const { getByText } = render(<Custom404 />);
    expect(getByText('Powered by')).toBeInTheDocument();
    expect(getByText('Datenschutzerklärung')).toBeInTheDocument();
    expect(getByText('Impressum')).toBeInTheDocument();
    expect(getByText('Nach oben')).toBeInTheDocument();
  });
  test('In Linie', async () => {
    const props = linie8304;
    const { getByText } = render(<Linie props={props} params={params} />);
    expect(getByText('Powered by')).toBeInTheDocument();
    expect(getByText('Datenschutzerklärung')).toBeInTheDocument();
    expect(getByText('Impressum')).toBeInTheDocument();
    expect(getByText('Nach oben')).toBeInTheDocument();
  });
});
