import { ReasonDescriptionValueObject } from "domain/budget-box/value-objects/reason-description.value-object";

export class ReasonDescriptionValueObjectMock {
  static build(description?: string): ReasonDescriptionValueObject {
    return ReasonDescriptionValueObject.create(
      description ?? 'Some description',
    ).value();
  }
}
