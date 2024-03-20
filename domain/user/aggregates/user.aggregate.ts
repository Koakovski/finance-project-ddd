import { Aggregate, IResult, Result } from 'types-ddd';
import { EmailValueObject } from '../value-objects/email.value-object';
import { PasswordValueObject } from '../value-objects/password.value-object';
import { TermValueObject } from '../value-objects/term.value-object';

export interface UserAggregateProps {
  email: EmailValueObject;
  password: PasswordValueObject;
  totalBalanceAvailable: number;
  terms: TermValueObject[];
}

export class UserAggregate extends Aggregate<UserAggregateProps> {
  get email(): EmailValueObject {
    return this.props.email;
  }

  get password(): PasswordValueObject {
    return this.props.password;
  }

  get totalBalanceAvailable(): number {
    return this.props.totalBalanceAvailable;
  }

  get terms(): TermValueObject[] {
    return this.props.terms;
  }

  static create(props: UserAggregateProps): IResult<UserAggregate> {
    return Result.Ok(
      new UserAggregate({
        email: props.email,
        password: props.password,
        totalBalanceAvailable: props.totalBalanceAvailable,
        terms: props.terms,
      }),
    );
  }
}
