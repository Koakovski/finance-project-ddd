import { AcceptedAtValueObject } from 'domain/user/value-objects/accepted-at.value-object';

export class AcceptedAtValueObjectMock {
  static build(date?: Date): AcceptedAtValueObject {
    return AcceptedAtValueObject.create(
      date ?? new Date('2020-01-02 10:00:00'),
    ).value();
  }
}
