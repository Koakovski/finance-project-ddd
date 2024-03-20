import { IResult, Result, ValueObject } from 'types-ddd';
import isEmail from 'validator/lib/isEmail';

export type DescriptionValueObjectProps = {
  value: string;
};

export class DescriptionValueObject extends ValueObject<DescriptionValueObjectProps> {
  private constructor(props: DescriptionValueObjectProps) {
    super(props);
  }

  get value():string{
    return this.props.value
  }

  public static create(description: string): IResult<DescriptionValueObject> {
    const trimmedDescription = description.trim()
    const isValidDescription = description.length <= 50
    if (!isValidDescription) {
      return Result.fail('Invalid Description');
    } else {
      return Result.Ok(new DescriptionValueObject({ value: trimmedDescription }));
    }
  }
}
