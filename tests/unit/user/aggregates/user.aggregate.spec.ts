import {
  UserAggregate,
  UserAggregateProps,
} from 'domain/user/aggregates/user.aggregate';
import { TermValueObjectMock } from '../../../mocks/users/value-objects/term.value-object.mock';
import { EmailValueObjectMock } from '../../../mocks/users/value-objects/email.value-object.mock';
import { PasswordValueObjectMock } from '../../../mocks/users/value-objects/password.value-object.mock';

describe('UserAggregate', () => {
  function makeProps(): UserAggregateProps {
    return {
      email: EmailValueObjectMock.build(),
      password: PasswordValueObjectMock.build(),
      totalBalanceAvailable: 0,
      terms: [TermValueObjectMock.build()],
    };
  }

  it('should create a valid user', () => {
    const props = makeProps();
    const result = UserAggregate.create(props);

    expect(result.isFail()).toBe(false);
  });
});
