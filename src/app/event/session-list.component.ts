import { Component, Input, OnChanges } from '@angular/core'
import {ISession} from "./event.model";
import {AuthService} from "../user/auth.service";
import {VoterService} from "./voter.service";

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnChanges {
  constructor(private  auth : AuthService,private  voterService:VoterService){}
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
  toggleVote(session:ISession){
    if(this.userHasVoted(session)){
      this.voterService.deleteVoter(session,this.auth.currentUser.userName);
    }else{
      this.voterService.addVoter(session,this.auth.currentUser.userName);
    }
    if(this.sortBy === 'attendees')
      this.visibleSessions.sort(sortByAttendeesDesc);
  }
  userHasVoted(session:ISession){
    return this.voterService.userHasVoted(session,this.auth.currentUser.userName);
  }
  filterSessions(filter) {
    if(filter === 'all') {
      this.visibleSessions = this.sessions.slice(0);
      console.log(this.visibleSessions);
      console.log(this.sessions)
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
