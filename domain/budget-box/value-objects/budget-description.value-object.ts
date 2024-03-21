import { IResult, Result, ValueObject } from 'types-ddd';

export type BudgetDescriptionValueObjectProps = {
  value: string;
};

export class BudgetDescriptionValueObject extends ValueObject<BudgetDescriptionValueObjectProps> {
  get value(): string {
    return this.props.value;
  }

  public static create(description: string): IResult<BudgetDescriptionValueObject> {
    const trimmedDescription = description.trim();
    const isValidDescriptionLength =
      trimmedDescription.length >= 1 && trimmedDescription.length <= 30;
    if (!isValidDescriptionLength) {
      return Result.fail('Invalid Description length min 1 char and max 30 char');
    } else {
      return Result.Ok(
        new BudgetDescriptionValueObject({ value: trimmedDescription.toLowerCase() }),
      );
    }
  }
}
