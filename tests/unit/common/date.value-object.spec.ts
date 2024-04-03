import { DateValueObject } from 'domain/common/date.value-object';

describe('DateValueObject', () => {
  it('should create a valid date', () => {
    const result = DateValueObject.create(new Date('2020-01-02 10:00:00'));

    expect(result.isFail()).toBe(false);
    expect(result.value().value).toBe('2020-01-02 10:00:00');
  });

  it('should fail if provide an invalid date', () => {
    const result = DateValueObject.create('invalid_date' as any);
    expect(result.isFail()).toBe(true);
    expect(result.error()).toBe('Invalid Date');
  });
});
