import {Component, OnInit} from "@angular/core";
import {EventService} from "./event.service";
import {IEvent} from "./event.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  templateUrl:'./event-list.component.html',
  styles: [`
    /*.thumbnail { min-height: 210px; }*/
    .pad-left { margin-left: 10px; }
    .well div { color: #bbb; }
  `]
})
export class EventListComponent implements OnInit{
  events:IEvent[];
  event:IEvent[];
  constructor(private eventService: EventService,private route:ActivatedRoute){}
  ngOnInit() {
     this.event = this.route.snapshot.data['data']
     //  this.eventService.getEvents().subscribe(events => { this.events
     // = events})

      console.log('iam from resolver',this.event);
    console.log(this.events);

  }

}
