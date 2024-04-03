import { IResult, Result, ValueObject } from 'types-ddd';
import { format, isDate } from 'date-fns';

export type DateValueObjectProps = {
  value: Date;
};

export class DateValueObject extends ValueObject<DateValueObjectProps> {
  get value(): string {
    return format(this.props.value, 'yyyy-MM-dd hh:mm:ss');
  }

  public static create(date: Date): IResult<DateValueObject> {
    const isValidDate = isDate(date);
    if (!isValidDate) {
      return Result.fail('Invalid Date');
    } else {
      return Result.Ok(new DateValueObject({ value: date }));
    }
  }
}
