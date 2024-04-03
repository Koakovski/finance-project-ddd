import { TermValueObject } from 'domain/user/value-objects/term.value-object';
import { IpValueObject } from 'domain/user/value-objects/ip.value-object';
import { IpValueObjectMock } from './ip.value-object.mock';
import { DateValueObjectMock } from 'tests/mocks/common/date.value-object.mock';
import { DateValueObject } from 'domain/common/date.value-object';

type TermValueObjectMockProps = {
  ip?: IpValueObject;
  acceptedAt?: DateValueObject;
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
      acceptedAt: props?.acceptedAt ?? DateValueObjectMock.build(),
      userAgent: {
        name: props?.userAgent?.name ?? 'firefox',
        version: props?.userAgent?.version ?? '86.0.0',
        os: props?.userAgent?.os ?? 'Linux',
        type: props?.userAgent?.type ?? 'browser',
      },
    }).value();
  }
}
