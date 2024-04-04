import { faker } from "@faker-js/faker";
import { BudgetDescriptionValueObject } from "domain/budget-box/value-objects/budget-description.value-object";

describe('BudgetDescriptionValueObject', () => {
  it('should create a valid description', () => {
    const result = BudgetDescriptionValueObject.create('some description');

    expect(result.isFail()).toBe(false);
    expect(result.value().value).toBe('some description');
  });

  it('should fail if provide an empty string', () => {
    const result = BudgetDescriptionValueObject.create('');
    expect(result.isFail()).toBe(true);
    expect(result.error()).toBe('Invalid Description length min 1 char and max 30 char');
  });

  it('should fail if provide an too large description', () => {
    const result = BudgetDescriptionValueObject.create(
      faker.string.alphanumeric({ length: 31 }),
    );
    expect(result.isFail()).toBe(true);
    expect(result.error()).toBe('Invalid Description length min 1 char and max 30 char');
  });

  it('should trim and makel lower case the provided description', () => {
    const result = BudgetDescriptionValueObject.create('   Some desCRiptIOn ');
    expect(result.value().value).toBe('some description');
  });
});
