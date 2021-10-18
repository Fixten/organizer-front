import { submit } from './index';

describe('new checklist item form', () => {
  const dispatch = jest.fn();
  const onClose = jest.fn();
  it('submit', () => {
    expect.assertions(2);
    submit(dispatch, onClose, 'check');
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(onClose).toHaveBeenCalledWith();
  });
  it('submit no data', () => {
    expect.assertions(2);
    submit(dispatch, onClose, '');
    expect(dispatch).toHaveBeenCalledTimes(0);
    expect(onClose).toHaveBeenCalledWith();
  });
});
