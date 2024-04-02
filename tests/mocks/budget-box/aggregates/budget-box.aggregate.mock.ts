import {
  BudgetBoxAggregate,
  BudgetBoxAggregateCreateProps,
} from 'domain/budget-box/aggregates/budget-box.aggregate';
import { ID } from 'types-ddd';
import { BudgetDescriptionValueObjectMock } from '../value-objects/budget-description.value-object.mock';
import { PercentageValueObjectMock } from '../value-objects/percentage.value-object.mock';

export class BudgetBoxAggregateMock {
  static build(
    props?: Partial<BudgetBoxAggregateCreateProps>,
  ): BudgetBoxAggregate {
    return BudgetBoxAggregate.create({
      ownerId: props?.ownerId ?? ID.create(),
      description:
        props?.description ?? BudgetDescriptionValueObjectMock.build(),
      balanceAvailable: props?.balanceAvailable ?? 0,
      isPercentual: props?.isPercentual ?? false,
      budgetPercentage:
        props?.budgetPercentage ?? PercentageValueObjectMock.build(100),
      transactionIds: props?.transactionIds ?? [],
      reasons: props?.reasons ?? [],
    }).value();
  }
}
