import { PasswordValueObject } from 'domain/user/value-objects/password.value-object';

describe('PasswordValueObject', () => {
  it('should return a valid password', () => {
    const result = PasswordValueObject.create('123abc');
    expect(result.isFail()).toBe(false);
    expect(result.value().get('value')).toBe('123abc');
  });

  it('should return fail if password do not have at least 3 char length', () => {
    const result = PasswordValueObject.create('12');
    expect(result.isFail()).toBe(true);
    expect(result.error()).toBe('Password must have min 3 char length');
  });

  it('should return fail if password do has more than 20 char length', () => {
    const result = PasswordValueObject.create('abcdefghijklmnopqrstuvwxyz');
    expect(result.isFail()).toBe(true);
    expect(result.error()).toBe('Password must have max 20 char length');
  });
});
