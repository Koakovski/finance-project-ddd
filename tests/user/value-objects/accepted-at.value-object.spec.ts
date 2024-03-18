import { AcceptedAtValueObject } from 'domain/user/value-objects/accepted-at.value-object';
import { IpValueObject } from 'domain/user/value-objects/ip.value-object';

describe('AcceptedAtValueObject', () => {
  it('should create a valid acceptance date', () => {
    const result = AcceptedAtValueObject.create(
      new Date('2020-01-02 10:00:00'),
    );

    expect(result.isFail()).toBe(false);
    expect(result.value().value).toBe('2020-01-02 10:00:00');
  });

  it('should fail if provide an invalid date', () => {
    const result = AcceptedAtValueObject.create('invalid_date' as any);
    expect(result.isFail()).toBe(true);
    expect(result.error()).toBe('Invalid Date');
  });
});
