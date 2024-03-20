import { PasswordValueObject } from 'domain/user/value-objects/password.value-object';

export class PasswordValueObjectMock {
  static build(password?: string): PasswordValueObject {
    return PasswordValueObject.create(password ?? '123abc').value();
  }
}
