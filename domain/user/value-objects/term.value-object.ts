import { IResult, Result, ValueObject } from 'types-ddd';
import { IpValueObject } from './ip.value-object';
import { DateValueObject } from 'domain/common/date.value-object';

export const OS = {
  LINUX: 'LINUX',
  WINDOWS: 'WINDOWS',
  MAC: 'MAC',
  IPHONE: 'IPHONE',
  APPLE: 'APPLE',
  MACINTOSH: 'MACINTOSH',
  ANDROID: 'ANDROID',
  IPAD: 'IPAD',
} as const;

export type OS = (typeof OS)[keyof typeof OS];

export type UserAgent = {
  name: string;
  version: string;
  os: OS;
  type: string;
};

export type TermValueObjectProps = {
  ip: IpValueObject;
  acceptedAt: DateValueObject;
  userAgent: UserAgent;
};

export type TermValueObjectCreateProps = {
  ip: IpValueObject;
  acceptedAt: DateValueObject;
  userAgent: {
    name: string;
    version: string;
    os: string;
    type: string;
  };
};

export class TermValueObject extends ValueObject<TermValueObjectProps> {
  get ip(): IpValueObject {
    return this.props.ip;
  }

  get acceptedAt(): DateValueObject {
    return this.props.acceptedAt;
  }

  get userAgent(): UserAgent {
    return this.props.userAgent;
  }

  public static create(
    props: TermValueObjectCreateProps,
  ): IResult<TermValueObject> {
    const isValidOs = Object.values(OS).includes(
      props.userAgent.os.toUpperCase() as OS,
    );
    if (!isValidOs) {
      return Result.fail('Invalid OS');
    }

    return Result.Ok(
      new TermValueObject({
        ip: props.ip,
        acceptedAt: props.acceptedAt,
        userAgent: {
          name: props.userAgent.name,
          version: props.userAgent.version,
          os: props.userAgent.os as OS,
          type: props.userAgent.type,
        },
      }),
    );
  }
}
