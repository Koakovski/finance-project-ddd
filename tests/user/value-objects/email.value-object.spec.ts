import { EmailValueObject } from 'domain/user/value-objects/email.value-object';

describe('EmailValueObject', () => {
  it('should create a valid email', () => {
    const result = EmailValueObject.create('valid_mail@domain.com');
    expect(result.isFail()).toBe(false);
    expect(result.value().value).toBe('valid_mail@domain.com');
  });

  it('should return fail if providaded a invalid email', () => {
    const result = EmailValueObject.create('invalid_mail');
    expect(result.isFail()).toBe(true);
  });

  it('should normalize the email to lower case', () => {
    const result = EmailValueObject.create('Valid_Mail@DOMAin.coM');
    expect(result.value().value).toBe('valid_mail@domain.com');
  });
});
