import { ReasonDomainEntity } from 'domain/budget-box/entities/reason.domain-entity';
import { ReasonDescriptionValueObjectMock } from '../value-objects/reason-description.value-object.mock';
import { ReasonDescriptionValueObject } from 'domain/budget-box/value-objects/reason-description.value-object';

export class ReasonDomainEntityMock {
  static build(reason?: ReasonDescriptionValueObject): ReasonDomainEntity {
    return new ReasonDomainEntity({
      description: reason ?? ReasonDescriptionValueObjectMock.build(),
    });
  }
}
