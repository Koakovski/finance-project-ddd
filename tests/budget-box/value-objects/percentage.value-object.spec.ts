import { PercentageValueObject } from 'domain/budget-box/value-objects/percentage.value-object';

describe('PercentageValueObject', () => {
  it('should create a valid percentage', () => {
    const result = PercentageValueObject.create(100);

    expect(result.isFail()).toBe(false);
    expect(result.value().value).toBe(100);
  });

  it('should fail if provide an number less than 100', () => {
    const result = PercentageValueObject.create(-1);
    expect(result.isFail()).toBe(true);
    expect(result.error()).toBe('Invalid Percentage, must be greater than 0');
  });

  it('should fail if provide an number greater than 100', () => {
    const result = PercentageValueObject.create(101);
    expect(result.isFail()).toBe(true);
    expect(result.error()).toBe('Invalid Percentage, must be less than 100');
  });
});
