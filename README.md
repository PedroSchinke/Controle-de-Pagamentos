table Receipts = {
  id: string uuid()
  user_id: string uuid()
  date: date
  value: number
  type: string
  description?: string
  created_at: new Date()
  updated_at?: new Date()
}

table Users = {
  id: uuid()
  name: string
  email: string
  phone: string
  created_at: new Date()
}