import { Aggregate, IResult, Result, UID } from 'types-ddd';
import { EmailValueObject } from '../value-objects/email.value-object';
import { PasswordValueObject } from '../value-objects/password.value-object';
import { TermValueObject } from '../value-objects/term.value-object';

export interface UserAggregateProps {
  email: EmailValueObject;
  password: PasswordValueObject;
  budgetBoxIds: UID[];
  totalBalanceAvailable: number;
  terms: TermValueObject[];
}

export interface UserAggregateCreateProps {
  email: EmailValueObject;
  password: PasswordValueObject;
  budgetBoxIds?: UID[];
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

  get budgetBoxIds(): UID[] {
    return this.props.budgetBoxIds;
  }

  get totalBalanceAvailable(): number {
    return this.props.totalBalanceAvailable;
  }

  get terms(): TermValueObject[] {
    return this.props.terms;
  }

  static create(props: UserAggregateCreateProps): IResult<UserAggregate> {
    return Result.Ok(
      new UserAggregate({
        email: props.email,
        password: props.password,
        budgetBoxIds: props.budgetBoxIds ?? [],
        totalBalanceAvailable: props.totalBalanceAvailable,
        terms: props.terms,
      }),
    );
  }
}
