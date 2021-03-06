import '@testing-library/jest-dom/extend-expect';

import { render } from '@testing-library/react';

import linien from '../__mocks__/propsMock';
import Home from '../pages/index';
import { getStaticProps } from '../pages/index';

describe('Homepage', () => {
  test('In Home', async () => {
    const props = linien.linien;
    const { getByText } = render(<Home props={props} />);
    expect(getByText('Geis')).toBeInTheDocument();
    expect(getByText('Bus­fahr­plan')).toBeInTheDocument(); // <- Soft Hyphen (&shy;) in there
    expect(getByText('8304')).toBeInTheDocument();
  });
  test('In Home', async () => {
    await getStaticProps();
  });
});
