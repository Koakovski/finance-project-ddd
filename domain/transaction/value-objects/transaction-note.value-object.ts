import { IResult, Result, ValueObject } from 'types-ddd';

export type TransactionNoteValueObjectProps = {
  value: string;
};

export class TransactionNoteValueObject extends ValueObject<TransactionNoteValueObjectProps> {
  get value(): string {
    return this.props.value;
  }

  public static create(note: string): IResult<TransactionNoteValueObject> {
    const trimmedNote = note.trim();
    const isValidDescriptionLength =
    trimmedNote.length >= 1 && trimmedNote.length <= 144;
    if (!isValidDescriptionLength) {
      return Result.fail('Invalid Note length min 1 char and max 144 char');
    } else {
      return Result.Ok(
        new TransactionNoteValueObject({ value: trimmedNote.toLowerCase() }),
      );
    }
  }
}
