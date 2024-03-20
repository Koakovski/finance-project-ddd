import { DescriptionValueObject } from 'domain/budget-box/value-objects/description.value-object';

describe('DescriptionValueObject', () => {
  it('should create a valid description', () => {
    const result = DescriptionValueObject.create('some description');

    expect(result.isFail()).toBe(false);
    expect(result.value().value).toBe('some description');
  });

  it('should fail if provide an empty string', () => {
    const result = DescriptionValueObject.create('');
    expect(result.isFail()).toBe(true);
    expect(result.error()).toBe('Invalid Description length min 1 char and max 30 char');
  });

  it('should fail if provide an too large description', () => {
    const result = DescriptionValueObject.create(
      'invalid_invalid_invalid_invalid_invalid_invalid_invalid',
    );
    expect(result.isFail()).toBe(true);
    expect(result.error()).toBe('Invalid Description length min 1 char and max 30 char');
  });

  it('should trim and makel lower case the provided description', () => {
    const result = DescriptionValueObject.create('   Some desCRiptIOn ');
    expect(result.value().value).toBe('some description');
  });
});
