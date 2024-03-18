import { IResult, Result, ValueObject } from 'types-ddd';
import { IpValueObject } from './ip.value-object';
import { AcceptedAtValueObject } from './accepted-at.value-object';

export const OS = {
  LINUX: 'LINUX',
  WINDOWS: 'WINDOWS',
  MACOS: 'MACOS',
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
  acceptedAt: AcceptedAtValueObject;
  userAgent: UserAgent;
};

export type TermValueObjectCreateProps = {
  ip: IpValueObject;
  acceptedAt: AcceptedAtValueObject;
  userAgent: {
    name: string;
    version: string;
    os: string;
    type: string;
  };
};

export class TermValueObject extends ValueObject<TermValueObjectProps> {
  private constructor(props: TermValueObjectProps) {
    super(props);
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
