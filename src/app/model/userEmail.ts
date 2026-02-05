export class sentEmail{
  id: number;
  idRender: number;
  idRecipient : number;
  body : string;
  subject : string;
  dateSent : Date
  constructor(
    id: number,
  idRender: number,
  idRecipient : number,
  Body : string,
  Subject : string,
  DateSent : Date
  ){
    this.id = id
    this.idRender = idRender
    this.idRecipient = idRecipient
    this.body = Body
    this.subject = Subject
    this.dateSent = DateSent
  }
}
