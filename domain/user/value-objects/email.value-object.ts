import { IResult, Result, ValueObject } from 'types-ddd';
import isEmail from 'validator/lib/isEmail';

export type EmailValueObjectProps = {
  value: string;
};

export class EmailValueObject extends ValueObject<EmailValueObjectProps> {
  get value(): string {
    return this.props.value;
  }

  public static create(email: string): IResult<EmailValueObject> {
    const isValidEmail = isEmail(email);
    if (!isValidEmail) {
      return Result.fail('Invalid Email');
    } else {
      return Result.Ok(new EmailValueObject({ value: email.toLowerCase() }));
    }
  }
}
