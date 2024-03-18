import { AcceptedAtValueObject } from 'domain/user/value-objects/accepted-at.value-object';
import { IpValueObject } from 'domain/user/value-objects/ip.value-object';
import {
  TermValueObject,
  TermValueObjectCreateProps,
} from 'domain/user/value-objects/term.value-object';

describe('TermValueObject', () => {
  function makeProps(): TermValueObjectCreateProps {
    return {
      ip: IpValueObject.create('123.123.123.123').value(),
      acceptedAt: AcceptedAtValueObject.create(
        new Date('2020-01-02 10:00:00'),
      ).value(),
      userAgent: {
        name: 'firefox',
        version: '86.0.0',
        os: 'Linux',
        type: 'browser',
      },
    };
  }

  it('should create a valid term', () => {
    const props = makeProps();
    const result = TermValueObject.create(props);

    expect(result.isFail()).toBe(false);
  });

  it('should fail if provide an invalid OS', () => {
    const props = makeProps();
    props.userAgent.os = 'invalid_os';
    const result = TermValueObject.create(props);

    expect(result.isFail()).toBe(true);
    expect(result.error()).toBe('Invalid OS');
  });
});
