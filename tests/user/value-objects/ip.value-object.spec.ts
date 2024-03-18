import { IpValueObject } from 'domain/user/value-objects/ip.value-object';

describe('IpValueObject', () => {
  it('should create a valid ip', () => {
    const result = IpValueObject.create('123.123.123.123');
    expect(result.isFail()).toBe(false);
    expect(result.value().get('value')).toBe('123.123.123.123');
  });

  it('should fail if provide an invalid ip', () => {
    const result = IpValueObject.create('invalid_ip');
    expect(result.isFail()).toBe(true);
    expect(result.error()).toBe('Invalid Ip');
  });
});
