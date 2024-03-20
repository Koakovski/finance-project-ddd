import { IResult, Result, ValueObject } from 'types-ddd';
import { format, isDate } from 'date-fns';

export type AcceptedAtValueObjectProps = {
  value: Date;
};

export class AcceptedAtValueObject extends ValueObject<AcceptedAtValueObjectProps> {
  get value(): string {
    return format(this.props.value, 'yyyy-MM-dd hh:mm:ss');
  }

  public static create(date: Date): IResult<AcceptedAtValueObject> {
    const isValidDate = isDate(date);
    if (!isValidDate) {
      return Result.fail('Invalid Date');
    } else {
      return Result.Ok(new AcceptedAtValueObject({ value: date }));
    }
  }
}
