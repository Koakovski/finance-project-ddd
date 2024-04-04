import { TransactionNoteValueObject } from 'domain/transaction/value-objects/transaction-note.value-object';

export class TransactionNoteValueObjectMock {
  static build(note?: string): TransactionNoteValueObject {
    return TransactionNoteValueObject.create(note ?? 'value_note').value();
  }
}
