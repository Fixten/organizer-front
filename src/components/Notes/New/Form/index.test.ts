import { submit } from './index';

describe('create new note', () => {
  const onClose = jest.fn();
  const dispatch = jest.fn();
  it('if no data', () => {
    expect.assertions(2);
    submit({ onClose }, { title: '', text: '' }, dispatch);
    expect(onClose).toHaveBeenCalledTimes(0);
    expect(dispatch).toHaveBeenCalledTimes(0);
  });
  it('with data', () => {
    expect.assertions(2);
    submit({ onClose }, { title: 'title', text: 'test' }, dispatch);
    expect(onClose).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledTimes(1);
  });
  it('test', () => {
    expect.hasAssertions();
    onClose();
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
