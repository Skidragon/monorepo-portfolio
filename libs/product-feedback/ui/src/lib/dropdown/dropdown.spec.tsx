import { render } from '@testing-library/react';

import Dropdown from './dropdown';

describe('Dropdown', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dropdown />);
    expect(baseElement).toBeTruthy();
  });
  // TODO: If I have time to make a custom dropdown
  // it.todo('should open dropdown list when dropdown is triggered', () => {});
  // it.todo(
  //   'should close dropdown list when dropdown is triggered in open state',
  //   () => {}
  // );
  // it.todo('should close dropdown list when an option is selected', () => {});
  // it.todo(
  //   'should close dropdown list when click is outside the dropdown',
  //   () => {}
  // );
  // it.todo('should be able to go up and down the list with keyboard', () => {});
  // it.todo(
  //   'should highlight the last option when first option is selected and user presses the up arrow',
  //   () => {}
  // );
  // it.todo('should go to the end of the list when') {}
});
