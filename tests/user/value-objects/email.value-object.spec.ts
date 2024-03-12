import { EmailValueObject } from 'domain/user/value-objects/email.value-object';

describe('EmailValueObject', () => {
  it('should return a valid email', () => {
    const email = EmailValueObject.create('valid_mail@domain.com');
    expect(email.isFail()).toBe(false);
  });

  it('should return fail if providaded a invalid email', () => {
    const email = EmailValueObject.create('invalid_mail');
    expect(email.isFail()).toBe(true);
  });

  it('should normalize the email to lower case', () => {
    const email = EmailValueObject.create('Valid_Mail@DOMAin.coM');
    expect(email.value().get('value')).toBe('valid_mail@domain.com');
  });
});
