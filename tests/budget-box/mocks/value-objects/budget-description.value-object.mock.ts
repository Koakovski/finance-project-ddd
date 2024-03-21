import { BudgetDescriptionValueObject } from "domain/budget-box/value-objects/budget-description.value-object";

export class BudgetDescriptionValueObjectMock {
  static build(description?: string): BudgetDescriptionValueObject {
    return BudgetDescriptionValueObject.create(
      description ?? 'Some description',
    ).value();
  }
}
