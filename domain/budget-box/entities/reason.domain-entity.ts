import { Entity, IResult, Result } from 'types-ddd';
import { ReasonDescriptionValueObject } from '../value-objects/reason-description.value-object';

export interface ReasonDomainEntityProps {
  description: ReasonDescriptionValueObject;
}

export class ReasonDomainEntity extends Entity<ReasonDomainEntityProps> {
  get description(): ReasonDescriptionValueObject {
    return this.props.description;
  }

  create(props: ReasonDomainEntityProps): IResult<ReasonDomainEntity> {
    return Result.Ok(new ReasonDomainEntity(props));
  }
}
