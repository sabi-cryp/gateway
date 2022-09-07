export interface IUser {
  id?: number;
  fristname?: string;
  lastname?: string;
  password?: number;
}

export class User implements IUser {
  constructor(public id?: number, public fristname?: string, public lastname?: string, public password?: number) {}
}
