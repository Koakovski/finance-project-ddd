import { IpRegex } from 'domain/regex/ip.regex';
import { IResult, Result, ValueObject } from 'types-ddd';
import isEmail from 'validator/lib/isEmail';

export type IpValueObjectProps = {
  value: string;
};

export class IpValueObject extends ValueObject<IpValueObjectProps> {
  private constructor(props: IpValueObjectProps) {
    super(props);
  }

  public static create(ip: string): IResult<IpValueObject> {
    const isValidIp = IpRegex.test(ip);
    if (!isValidIp) {
      return Result.fail('Invalid Ip');
    }

    return Result.Ok(new IpValueObject({ value: ip }));
  }
}
