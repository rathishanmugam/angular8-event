import {Component} from "@angular/core";
import {IEvent,ISession} from "./event.model";
import {EventService} from "./event.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  templateUrl:'./event-detail.component.html',
  styles: [`
    .container { padding-left:20px; padding-right:20px; }
    a {cursor:pointer}
  `]
})
export class EventDetailComponent {
  event:IEvent
  addMode:boolean
  sortBy:string='name'
  filterBy = 'all'
  constructor(private eventService:EventService,
              private route:ActivatedRoute){}
  ngOnInit() {
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id'])
  }
  addSession() {
    this.addMode = true
  }
  saveNewSession(session:ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = nextId + 1
    this.event.sessions.push(session)
    this.eventService.updateEvent(this.event)
    this.addMode = false
  }

  cancelAddSession() {
    this.addMode = false
  }
}
