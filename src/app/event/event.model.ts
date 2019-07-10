export interface IEvent {
  id: number
  category: string
  organizer: string
  title: string
  description: string
  date: Date
  price: number
  location?: {
    address: string
    city: string
    country: string
  },
  onlineUrl?: string,
  sessions: ISession[]
}

export interface ISession {
  id: number
  name: string
  presenter: string
  duration: number
  time:string
  show: string
  abstract: string
  attendees: string[]
}
export interface EventResolved {
  event: IEvent;
  error?: any;
}
