import { EmailValueObject } from 'types-ddd';

export class EmailValueObjectMock {
  static build(email?: string): EmailValueObject {
    return EmailValueObject.create(email ?? 'valid_mail@domain.com').value();
  }
}
