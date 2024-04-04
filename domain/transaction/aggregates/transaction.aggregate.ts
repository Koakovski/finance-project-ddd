import { Aggregate } from 'types-ddd';

export const TransactionType = {
  ENTRADA: 'ENTRADA',
  SAIDA: 'SAIDA',
} as const;

export type TransactionType =
  (typeof TransactionType)[keyof typeof TransactionType];

export const TransactionStatus = {
  PENDENTE: 'PENDENTE',
  CONCLUIDO: 'CONCLUIDO',
} as const;

export type TransactionStatus =
  (typeof TransactionStatus)[keyof typeof TransactionStatus];

export class TransactionAggregate extends Aggregate<any> {}
