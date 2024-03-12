import { IResult, Result, ValueObject } from 'types-ddd';
import isEmail from 'validator/lib/isEmail';

export type EmailValueObjectProps = {
  value: string;
};

export class EmailValueObject extends ValueObject<EmailValueObjectProps> {
  private constructor(props: EmailValueObjectProps) {
    super(props);
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
