import { DateValueObject } from 'domain/common/date.value-object';

export class DateValueObjectMock {
  static build(date?: Date): DateValueObject {
    return DateValueObject.create(
      date ?? new Date('2020-01-02 10:00:00'),
    ).value();
  }
}
