import {Component} from "@angular/core";
import {IEvent} from "./event.model";
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
  constructor(private eventService:EventService,
              private route:ActivatedRoute){}
  ngOnInit() {
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id'])
  }

}
