import { IResult, Result, ValueObject } from 'types-ddd';

export type PasswordValueObjectProps = {
  value: string;
};

export class PasswordValueObject extends ValueObject<PasswordValueObjectProps> {
  private constructor(props: PasswordValueObjectProps) {
    super(props);
  }

  public static create(password: string): IResult<PasswordValueObject> {
    if (password.length < 3) {
      return Result.fail('Password must have min 3 char length');
    }

    if (password.length > 20) {
      return Result.fail('Password must have max 20 char length');
    }

    return Result.Ok(new PasswordValueObject({ value: password }));
  }
}
