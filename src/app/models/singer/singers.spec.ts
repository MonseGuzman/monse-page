import { Singers } from './singers';

describe('Singers', () => {
  it('should create an instance', () => {
    expect(new Singers('', '', '', false, '')).toBeTruthy();
  });
});
