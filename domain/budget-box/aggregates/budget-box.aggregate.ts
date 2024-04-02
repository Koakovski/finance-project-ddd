import { Aggregate, IResult, Result, UID } from 'types-ddd';
import { BudgetDescriptionValueObject } from '../value-objects/budget-description.value-object';
import { PercentageValueObject } from '../value-objects/percentage.value-object';
import { ReasonDomainEntity } from '../entities/reason.domain-entity';

export interface BudgetBoxAggregateProps {
  ownerId: UID;
  description: BudgetDescriptionValueObject;
  balanceAvailable: number;
  isPercentual: boolean;
  budgetPercentage: PercentageValueObject;
  transactionIds: UID[];
  reasons: ReasonDomainEntity[];
}

export interface BudgetBoxAggregateCreateProps {
  ownerId: UID;
  description: BudgetDescriptionValueObject;
  balanceAvailable: number;
  isPercentual: boolean;
  budgetPercentage: PercentageValueObject;
  transactionIds: UID[];
  reasons: ReasonDomainEntity[];
}

export class BudgetBoxAggregate extends Aggregate<BudgetBoxAggregateProps> {
  get ownerId(): UID {
    return this.props.ownerId;
  }

  get description(): BudgetDescriptionValueObject {
    return this.props.description;
  }

  get balanceAvailable(): number {
    return this.props.balanceAvailable;
  }

  get isPercentual(): boolean {
    return this.props.isPercentual;
  }

  get budgetPercentage(): PercentageValueObject {
    return this.props.budgetPercentage;
  }

  get transactionIds(): UID[] {
    return this.props.transactionIds;
  }

  get reasons(): ReasonDomainEntity[] {
    return this.props.reasons;
  }

  static create(
    props: BudgetBoxAggregateCreateProps,
  ): IResult<BudgetBoxAggregate> {
    if (!props.isPercentual && props.budgetPercentage.value !== 100) {
      props.budgetPercentage = PercentageValueObject.create(100).value();
    }

    return Result.Ok(new BudgetBoxAggregate(props));
  }
}
