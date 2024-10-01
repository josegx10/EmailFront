export class Domain{
  id: number
  name: string
  email: string
  company: string
  isApproved: number
  constructor(
    id: number,
  name: string,
  email: string,
  company: string,
  isApproved: number
  ){
    this.id = id
    this.name = name
    this.email = email
    this.company = company

    this.isApproved = isApproved
  }
}
