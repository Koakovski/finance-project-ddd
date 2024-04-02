import {
  BudgetBoxAggregate,
  BudgetBoxAggregateProps,
} from 'domain/budget-box/aggregates/budget-box.aggregate';
import { ReasonDomainEntityMock } from 'tests/mocks/budget-box/entities/reason.domain-entity.mock';
import { BudgetDescriptionValueObjectMock } from 'tests/mocks/budget-box/value-objects/budget-description.value-object.mock';
import { PercentageValueObjectMock } from 'tests/mocks/budget-box/value-objects/percentage.value-object.mock';
import { GenerateUUID } from 'types-ddd';

describe('BudgetBoxAggregate', () => {
  function makeProps(): BudgetBoxAggregateProps {
    return {
      ownerId: GenerateUUID(),
      description: BudgetDescriptionValueObjectMock.build(),
      balanceAvailable: 0,
      isPercentual: true,
      budgetPercentage: PercentageValueObjectMock.build(),
      transactionIds: [GenerateUUID()],
      reasons: [ReasonDomainEntityMock.build()],
    };
  }

  it('should create a valid budget box', () => {
    const props = makeProps();
    const result = BudgetBoxAggregate.create(props);

    expect(result.isFail()).toBe(false);
  });

  
  it('should create a valid budget box with correct budgetPercentage if isPercentual is false', () => {
    const props = makeProps();
    props.isPercentual = false
    props.budgetPercentage = PercentageValueObjectMock.build(1)
    const result = BudgetBoxAggregate.create(props);

    expect(result.value().budgetPercentage.value).toBe(100);
  });
});
