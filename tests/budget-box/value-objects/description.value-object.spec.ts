import { DescriptionValueObject } from 'domain/budget-box/value-objects/description.value-object';

describe('DescriptionValueObject', () => {
  it('should create a valid description', () => {
    const result = DescriptionValueObject.create('some description');

    expect(result.isFail()).toBe(false);
    expect(result.value().value).toBe('some description');
  });

  it('should fail if provide an invalid description', () => {
    const result = DescriptionValueObject.create(
      'invalid_invalid_invalid_invalid_invalid_invalid_invalid',
    );
    expect(result.isFail()).toBe(true);
    expect(result.error()).toBe('Invalid Description');
  });

  it('should fail trim the provided description', () => {
    const result = DescriptionValueObject.create(
      '   some description ',
    );
    expect(result.value().value).toBe('some description');
  });
});
