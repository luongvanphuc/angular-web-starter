import { BaseEntity } from '@entities/base-entity';

export class User implements BaseEntity {
  constructor(
    public id?: number,
    public roleId?: number,
    public firstName?: string,
    public lastName?: string,
    public email?: string,
    public password?: string,
    public avatarId?: number,
    public isInvestor?: number,
    public idCard?: string,
    public idCardFront?: number,
    public idCardBack?: number,
    public gender?: number,
    public birthday?: Date,
    public phone?: string,
    public address?: string,
    public accessToken?: string,
    public tokenExpire?: string,

    // fake props
    public fullName?: string,
  ) {
  }
}
