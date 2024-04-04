import { faker } from '@faker-js/faker';
import { ReasonDescriptionValueObject } from 'domain/budget-box/value-objects/reason-description.value-object';

describe('ReasonDescriptionValueObject', () => {
  it('should create a valid description', () => {
    const result = ReasonDescriptionValueObject.create('some description');

    expect(result.isFail()).toBe(false);
    expect(result.value().value).toBe('some description');
  });

  it('should fail if provide an empty string', () => {
    const result = ReasonDescriptionValueObject.create('');
    expect(result.isFail()).toBe(true);
    expect(result.error()).toBe(
      'Invalid Description length min 1 char and max 30 char',
    );
  });

  it('should fail if provide an too large description', () => {
    const result = ReasonDescriptionValueObject.create(
      faker.string.alphanumeric({ length: 31 }),
    );
    expect(result.isFail()).toBe(true);
    expect(result.error()).toBe(
      'Invalid Description length min 1 char and max 30 char',
    );
  });

  it('should trim and makel lower case the provided description', () => {
    const result = ReasonDescriptionValueObject.create('   Some desCRiptIOn ');
    expect(result.value().value).toBe('some description');
  });
});
