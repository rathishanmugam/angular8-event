import {Injectable} from "@angular/core";
import {IEvent} from "./event.model";
import {Observable,Subject} from "rxjs";

@Injectable({providedIn: 'root'})
export class EventService {
  getEvents():Observable<IEvent[]> {
    let subject = new Subject<IEvent[]>()
    setTimeout(() => {subject.next(events); subject.complete(); }, 100)
    return subject
  }
  getEvent(id:number):IEvent {
    return events.find(event => event.id === id)
  }

  updateEvent(event){
    let index=events.findIndex(x => x.id = event.id)
    events[index] = event
  }
}

const events: IEvent[] = [
  {
    id: 5928101,
    category: "animal welfare",
    organizer: "Adam",
    title: "Cat Cabaret",
    description: "Yay felines!",
    price: 599.99,
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    },
    date: new Date('4/15/2037'),
    sessions: [
      {
        id: 1,
        name: " cats of us",
        presenter: "Peter Bacon Darwin",
        duration: "Two Hour",
        "time": "2:00",
        show: "morning",
        abstract: `Learn all about the new pipes in Angular 4, both
          how to write them, and how to get the new AI CLI to write
          them for you. Given by the famous PBD, president of Angular
          University (formerly Oxford University)`,
        attendees: ['bradgreen', 'igorminar', 'martinfowler']
      },
  {
    id: 2,
    name: "indian cats",
    presenter: "Peter Bacon Darwin",
    duration: "Two Hour",
    "time": "2:00",
    show: "evening",
    abstract: `Learn all about the new pipes in Angular 4, both
          how to write them, and how to get the new AI CLI to write
          them for you. Given by the famous PBD, president of Angular
          University (formerly Oxford University)`,
    attendees: ['bradgreen', 'igorminar']
  }
  , {
  id: 3
  ,
  name: "Using cats of china"
  ,
  presenter: "Peter Bacon Darwin"
  ,
  duration:"Three Hour"
  ,
  "time": "2:00"
  ,
  show: "night"
  ,
  abstract:
`Learn all about the new pipes in Angular 4, both
          how to write them, and how to get the new AI CLI to write
          them for you. Given by the famous PBD, president of Angular
          University (formerly Oxford University)`,
  attendees
:
['johnpapa', 'bradgreen', 'igorminar', 'martinfowler']

}

]
},
{
  "id"
:
  8419988,
    "category"
:
  "animal welfare",
    "organizer"
:
  "Adam",
    "title"
:
  "Kitty Cluster",
    "description"
:
  "Yay cats!",
    price
:
  599.99,
    location
:
  {
    address: 'The Palatial America Hotel',
      city
  :
    'Salt Lake City',
      country
  :
    'USA'
  }
,
  "date"
:
    new Date('4/15/2037'),
    sessions
:
  [
    {
      id: 1,
      name: "Using cats of us",
      presenter: "Peter Bacon Darwin",
      duration: "Three Hour",
      "time": "7:00",
      show: "morning",
      abstract: `Learn all about the new pipes in Angular 4, both
          how to write them, and how to get the new AI CLI to write
          them for you. Given by the famous PBD, president of Angular
          University (formerly Oxford University)`,
      attendees: ['bradgreen', 'igorminar', 'martinfowler']
    }
  ]
}
,
{
  "id"
:
  4582797,
    "category"
:
  "animal welfare",
    "organizer"
:
  "Adam",
    "title"
:
  "Puppy Parade",
    "description"
:
  "Yay pups!",
    price
:
  599.99,
  onlineUrl
:
  'http://ng-nl.org/',
    date
:
  new Date('4/15/2037'),
    sessions
:
  [
    {
      id: 1,
      name: "Using dogs of us",
      presenter: "Peter Bacon Darwin",
      duration: "Three Hour",
      "time": "7:00",
      show: "morning",
      abstract: `Learn all about the new pipes in Angular 4, both
          how to write them, and how to get the new AI CLI to write
          them for you. Given by the famous PBD, president of Angular
          University (formerly Oxford University)`,
      attendees: ['bradgreen', 'igorminar', 'martinfowler']
    }
  ]
}
,
{
  "id"
:
  7512944,
    "category"
:
  "animal welfare",
    "organizer"
:
  'Adam',
    "title"
:
  "whale dance",
    "description"
:
  "dancing",
    price
:
  599.99,
    location
:
  {
    address: 'The UN Angular Center',
      city
  :
    'New York',
      country
  :
    'USA'
  }
,
  date: new Date('4/15/2037'),
    sessions
:
  [
    {
      id: 1,
      name: " whales of us",
      presenter: "Peter Bacon Darwin",
      duration: "Three Hour",
      "time": "2:00",
      show: "morning",
      abstract: `Learn all about the new pipes in Angular 4, both
      how to write them, and how to get the new AI CLI to write
      them for you. Given by the famous PBD, president of Angular
      University (formerly Oxford University)`,
      attendees: ['bradgreen', 'igorminar', 'martinfowler']
    },
    {
      id: 2,
      name: " cats of india",
      presenter: "Peter Bacon Darwin",
      duration: "two and half",
      "time": "2:00",
      show: "evening",
      abstract: `Learn all about the new pipes in Angular 4, both
      how to write them, and how to get the new AI CLI to write
      them for you. Given by the famous PBD, president of Angular
      University (formerly Oxford University)`,
      attendees: ['bradgreen', 'igorminar']
    }
  ]
}
,

{
  id
:
  4913092,

    category
:
  "food",
    organizer
:
  'Adam',
    title
:
  "indian food",
    description
:
  "yammy",
    price
:
  599.99,
    location
:
  {
    address: 'The Excalibur',
      city
  :
    'Las Vegas',
      country
  :
    'USA'
  }
,
  date: new Date('4/15/2037'),
    sessions
:
  [
    {
      id: 1,
      name: "Using cats of china",
      presenter: "Peter Bacon Darwin",
      duration: "Three Hour",
      "time": "2:00",
      show: "night",
      abstract: `Learn all about the new pipes in Angular 4, both
      how to write them, and how to get the new AI CLI to write
      them for you. Given by the famous PBD, president of Angular
      University (formerly Oxford University)`,
      attendees: ['johnpapa', 'bradgreen', 'igorminar', 'martinfowler']

    }
  ]
}
,
{
  "id"
:
  6368002,
    "category"
:
  "animal welfare",
    "organizer"
:
  "Adam",
    "title"
:
  "monkey dance",
    "description"
:
  "dance",
    price
:
  599.99,
  onlineUrl
:
  'http://ng-nl.org/',
    date
:
  new Date('4/15/2037'),
    sessions
:
  [
    {
      id: 1,
      name: "Using monkeys of us",
      presenter: "Peter Bacon Darwin",
      duration: "Two and half Hour",
      "time": "2:00",
      show: "morning",
      abstract: `Learn all about the new pipes in Angular 4, both
          how to write them, and how to get the new AI CLI to write
          them for you. Given by the famous PBD, president of Angular
          University (formerly Oxford University)`,
      attendees: ['bradgreen', 'igorminar', 'martinfowler']
    }
  ]
}
,
{
  "id"
:
  8773607,
    "category"
:
  "housing",
    "organizer"
:
  "Adam",
    "title"
:
  "wdwedwqe",
    "description"
:
  "deerew",
    price
:
  599.99,
    location
:
  {
    address: 'The UN Angular Center',
      city
  :
    'New York',
      country
  :
    'USA'
  }
,
  date: new Date('4/15/2037'),
    sessions
:
  [
    {
      id: 1,
      name: "Using cats of china",
      presenter: "Peter Bacon Darwin",
      duration: "one and half",
      "time": "2:00",
      show: "night",
      abstract: `Learn all about the new pipes in Angular 4, both
          how to write them, and how to get the new AI CLI to write
          them for you. Given by the famous PBD, president of Angular
          University (formerly Oxford University)`,
      attendees: ['johnpapa', 'bradgreen', 'igorminar', 'martinfowler']

    }
  ]
}
]

