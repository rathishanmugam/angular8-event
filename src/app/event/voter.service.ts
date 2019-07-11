import {Injectable} from "@angular/core";
import {ISession} from "./event.model";

@Injectable({providedIn:'root'})
export  class VoterService{
  deleteVoter(session:ISession,voterName:string){
    session.attendees = session.attendees.filter(voter => voter !== voterName);
  }
  addVoter(session:ISession,voterName:string){
    session.attendees.push(voterName);
  }
  userHasVoted(session:ISession,voterName:string){
    return session.attendees.some(voter => voter === voterName);
  }
}
