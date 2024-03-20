import { IpValueObject } from 'domain/user/value-objects/ip.value-object';

export class IpValueObjectMock {
  static build(ip?: string): IpValueObject {
    return IpValueObject.create(ip ?? '123abc').value();
  }
}
