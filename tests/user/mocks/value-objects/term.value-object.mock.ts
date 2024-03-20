import { TermValueObject } from 'domain/user/value-objects/term.value-object';
import { AcceptedAtValueObjectMock } from './accepetd-at.value-object.mock';
import { IpValueObject } from 'domain/user/value-objects/ip.value-object';
import { AcceptedAtValueObject } from 'domain/user/value-objects/accepted-at.value-object';
import { IpValueObjectMock } from './ip.value-object.mock';

type TermValueObjectMockProps = {
  ip?: IpValueObject;
  acceptedAt?: AcceptedAtValueObject;
  userAgent?: {
    name?: string;
    version?: string;
    os?: string;
    type?: string;
  };
};

export class TermValueObjectMock {
  static build(props?: TermValueObjectMockProps): TermValueObject {
    return TermValueObject.create({
      ip: props?.ip ?? IpValueObjectMock.build(),
      acceptedAt: props?.acceptedAt ?? AcceptedAtValueObjectMock.build(),
      userAgent: {
        name: props?.userAgent?.name ?? 'firefox',
        version: props?.userAgent?.version ?? '86.0.0',
        os: props?.userAgent?.os ?? 'Linux',
        type: props?.userAgent?.type ?? 'browser',
      },
    }).value();
  }
}
