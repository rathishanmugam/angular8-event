import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {EventService} from "./event.service";
import {map} from "rxjs/operators";
@Injectable({providedIn:'root'})
export  class EventListResolverService implements Resolve<any>{
  constructor(private eventService:EventService){

  }
  resolve(route : ActivatedRouteSnapshot){
    return this.eventService.getEvent(route.params['id']). pipe(map(events => events))
  }
}
