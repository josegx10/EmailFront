export class UserEmail{
  id: number;
  idRender: number;
  idRecipient : number;
  Body : string;
  Subject : string;
  constructor(
    id: number,
  idRender: number,
  idRecipient : number,
  Body : string,
  Subject : string
  ){
    this.id = id
    this.idRender = idRender
    this.idRecipient = idRecipient
    this.Body = Body
    this.Subject = Subject
  }
}
