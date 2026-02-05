export class Domain{
  id: number
  name: string
  email: string
  domain: string
  approved: number
  constructor(
    id: number,
  name: string,
  email: string,
  domain: string,
  approved: number
  ){
    this.id = id
    this.name = name
    this.email = email
    this.domain = domain

    this.approved = approved
  }
}
