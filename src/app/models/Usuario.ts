import { ObjectId } from 'mongodb';

export class Usuario {

  constructor(
    public id?: ObjectId,
    public nombre?: string,
    public apellidos?: string,
    public email?: string,
    public password?: string,
    public rol?: string
  ) {}

}
