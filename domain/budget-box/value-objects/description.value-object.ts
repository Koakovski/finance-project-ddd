import { IResult, Result, ValueObject } from 'types-ddd';

export type DescriptionValueObjectProps = {
  value: string;
};

export class DescriptionValueObject extends ValueObject<DescriptionValueObjectProps> {
  get value(): string {
    return this.props.value;
  }

  public static create(description: string): IResult<DescriptionValueObject> {
    const trimmedDescription = description.trim();
    const isValidDescriptionLength =
      trimmedDescription.length >= 1 && trimmedDescription.length <= 30;
    if (!isValidDescriptionLength) {
      return Result.fail('Invalid Description length min 1 char and max 30 char');
    } else {
      return Result.Ok(
        new DescriptionValueObject({ value: trimmedDescription.toLowerCase() }),
      );
    }
  }
}
