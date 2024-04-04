import { TransactionNoteValueObject } from 'domain/transaction/value-objects/transaction-note.value-object';
import { faker } from '@faker-js/faker';

describe('TransactionNoteValueObject', () => {
  it('should create a valid note', () => {
    const result = TransactionNoteValueObject.create('some note');

    expect(result.isFail()).toBe(false);
    expect(result.value().value).toBe('some note');
  });

  it('should fail if provide an empty string', () => {
    const result = TransactionNoteValueObject.create('');
    expect(result.isFail()).toBe(true);
    expect(result.error()).toBe(
      'Invalid Note length min 1 char and max 144 char',
    );
  });

  it('should fail if provide an too large description', () => {
    const result = TransactionNoteValueObject.create(faker.string.alphanumeric({ length: 145 }));
    expect(result.isFail()).toBe(true);
    expect(result.error()).toBe(
      'Invalid Note length min 1 char and max 144 char',
    );
  });

  it('should trim and makel lower case the provided description', () => {
    const result = TransactionNoteValueObject.create('   Some NoTE ');
    expect(result.value().value).toBe('some note');
  });
});
