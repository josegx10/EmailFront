export class User{
  id: number
  name: string
  email: string
  idCompany: number
  password: string
  isApproved: number
  constructor(
    id: number,
  name: string,
  email: string,
  idCompany: number,
  password: string,
  isApproved: number
  ){
    this.id = id
    this.name = name
    this.email = email
    this.idCompany = idCompany
    this.password = password
    this.isApproved = isApproved
  }
}
