import { PercentageValueObject } from 'domain/budget-box/value-objects/percentage.value-object';

export class PercentageValueObjectMock {
  static build(percentage?: number): PercentageValueObject {
    return PercentageValueObject.create(percentage ?? 0).value();
  }
}
