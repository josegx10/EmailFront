export class User{
  id: number
  name: string
  email: string
  idCompany: number
  password: string
  isApproved: number
  isMain: Boolean
  constructor(
    id: number,
  name: string,
  email: string,
  idCompany: number,
  password: string,
  isApproved: number,
  isMain: Boolean
  ){
    this.id = id
    this.name = name
    this.email = email
    this.idCompany = idCompany
    this.password = password
    this.isApproved = isApproved
    this.isMain = isMain
  }
}
