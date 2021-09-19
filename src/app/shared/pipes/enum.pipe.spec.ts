import { EnumToArrayPipe } from './enum.pipe';

describe('EnumPipe', () => {
  it('create an instance', () => {
    const pipe = new EnumToArrayPipe();
    expect(pipe).toBeTruthy();
  });
});
