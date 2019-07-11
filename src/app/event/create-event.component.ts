import {Component, OnInit} from '@angular/core'
import { Router } from '@angular/router'
import {EventService} from "./event.service";

@Component({
  templateUrl:'create-event.component.html',
  styles: [`
    em {float:right; color:#E05C65; padding-left:10px;}
    .error input {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999; }
    .error :-moz-placeholder { color: #999; }
    .error ::-moz-placeholder {color: #999; }
    .error :ms-input-placeholder { color: #999; }
  `]
})
export class CreateEventComponent {
  newEvent
  isDirty:boolean = true
   categories: [
    'sustainability',
    'nature',
    'animal welfare',
    'housing',
    'education',
    'food',
    'community'
    ];
  constructor(private router: Router,
              private  eventService:EventService) {

  }
// ngOnInit(): <any> {
//     return this.categories;
// }

  saveEvent(formValues) {
    console.log('new event:',formValues)
    // this.eventService.saveEvent(formValues)
    this.isDirty = false
    this.router.navigate(['/events'])
  }

  cancel() {
    this.router.navigate(['/events'])
  }
}
