import { submit } from './index';

it('', () => {
  const onClose = jest.fn();
  submit({ onClose }, { title: '', text: '' }, () => {});
});
