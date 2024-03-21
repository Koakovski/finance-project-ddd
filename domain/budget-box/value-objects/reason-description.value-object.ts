import { IResult, Result, ValueObject } from 'types-ddd';

export type ReasonDescriptionValueObjectProps = {
  value: string;
};

export class ReasonDescriptionValueObject extends ValueObject<ReasonDescriptionValueObjectProps> {
  get value(): string {
    return this.props.value;
  }

  public static create(description: string): IResult<ReasonDescriptionValueObject> {
    const trimmedDescription = description.trim();
    const isValidDescriptionLength =
      trimmedDescription.length >= 1 && trimmedDescription.length <= 30;
    if (!isValidDescriptionLength) {
      return Result.fail('Invalid Description length min 1 char and max 30 char');
    } else {
      return Result.Ok(
        new ReasonDescriptionValueObject({ value: trimmedDescription.toLowerCase() }),
      );
    }
  }
}
