import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EventListComponent} from "./event/event-list.component";
import {EventsResolverService} from "./event/event-resolver.service";
import {EventDetailComponent} from "./event/event-detail.component";
import {AddSessionComponent} from "./event/add-session.component";

const routes: Routes = [
  {path:'events',component:EventListComponent, resolve: {data: EventsResolverService}},
  {path:'events/:id',component:EventDetailComponent},
  {path:'events/new', component:AddSessionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
