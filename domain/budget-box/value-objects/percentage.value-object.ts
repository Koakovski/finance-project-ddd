import { IResult, Result, ValueObject } from 'types-ddd';

export type PercentageValueObjectProps = {
  value: number;
};

export class PercentageValueObject extends ValueObject<PercentageValueObjectProps> {
  get value(): number {
    return this.props.value;
  }

  setDefaultValueForBenefit() {
    this.props.value = 100;
  }

  public static create(percentage: number): IResult<PercentageValueObject> {
    const isMinValidPercentage = percentage >= 0;
    if (!isMinValidPercentage) {
      return Result.fail('Invalid Percentage, must be greater than 0');
    }
    const isMaxValidPercentage = percentage <= 100;
    if (!isMaxValidPercentage) {
      return Result.fail('Invalid Percentage, must be less than 100');
    } else {
      return Result.Ok(new PercentageValueObject({ value: percentage }));
    }
  }
}
