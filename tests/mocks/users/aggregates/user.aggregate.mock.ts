import {
  UserAggregate,
  UserAggregateCreateProps,
} from 'domain/user/aggregates/user.aggregate';
import { EmailValueObjectMock } from '../value-objects/email.value-object.mock';
import { PasswordValueObjectMock } from '../value-objects/password.value-object.mock';

export class UserAggregateMock {
  static build(props?: Partial<UserAggregateCreateProps>): UserAggregate {
    return UserAggregate.create({
      email: props?.email ?? EmailValueObjectMock.build(),
      password: props?.password ?? PasswordValueObjectMock.build(),
      budgetBoxIds: props?.budgetBoxIds,
      totalBalanceAvailable: props?.totalBalanceAvailable ?? 0,
      terms: props?.terms ?? [],
    }).value();
  }
}
