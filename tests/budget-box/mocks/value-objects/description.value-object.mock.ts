import { DescriptionValueObject } from 'domain/budget-box/value-objects/description.value-object';

export class DescriptionValueObjectMock {
  static build(description?: string): DescriptionValueObject {
    return DescriptionValueObject.create(
      description ?? 'Some description',
    ).value();
  }
}
