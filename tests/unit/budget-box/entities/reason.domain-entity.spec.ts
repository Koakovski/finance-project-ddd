import { ReasonDomainEntity } from 'domain/budget-box/entities/reason.domain-entity';
import { ReasonDescriptionValueObjectMock } from 'tests/mocks/budget-box/value-objects/reason-description.value-object.mock';

describe('ReasonDomainEntity', () => {
  it('should create a valid description', () => {
    const result = ReasonDomainEntity.create({
      description: ReasonDescriptionValueObjectMock.build('some description'),
    });

    expect(result.isFail()).toBe(false);
    expect(result.value().description.value).toBe('some description');
  });
});
