import { Component, Input, OnChanges } from '@angular/core'
import {ISession} from "./event.model";

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnChanges {
  @Input() sessions: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;
  visibleSessions: ISession[] = [];
  ngOnChanges() {
    this.filterSessions(this.filterBy);
    if(this.sessions) {
      this.sortBy === 'name' ? this.visibleSessions.sort(sortByNameAsc) : this.visibleSessions.sort(sortByAttendeesDesc);
    }
  }
  filterSessions(filter) {
    if(filter === 'all') {
      this.visibleSessions = this.sessions.slice(0);
    } else {
      this.visibleSessions = this.sessions.filter(session => {
        return session.show.toLocaleLowerCase() === filter;
      })
    }
  }
}

function sortByNameAsc(s1: ISession, s2: ISession) {
  if(s1.name > s2.name) return 1
  else if(s1.name === s2.name) return 0
  else return -1
}

function sortByAttendeesDesc(s1: ISession, s2: ISession) {
  return s2.attendees.length - s1.attendees.length;
}
