import { EmailValueObject } from "domain/user/value-objects/email.value-object";

export class EmailValueObjectMock {
  static build(email?: string): EmailValueObject {
    return EmailValueObject.create(email ?? 'valid_mail@domain.com').value();
  }
}
