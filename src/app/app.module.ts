import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {EventListComponent} from "./event/event-list.component";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {EventDetailComponent} from "./event/event-detail.component";
import {SessionListComponent} from "./event/session-list.component";
import {CollapsibleWellComponent} from "./event/collapsible-well.component";
import {AddSessionComponent} from "./event/add-session.component";
import {ReactiveFormsModule} from "@angular/forms";
import {UserModule} from "./user/user.module";
import {UpvoteComponent} from "./event/upvote.component";
import {CreateEventComponent} from "./event/create-event.component";
import {LocationValidatorDirective} from "./event/location-validator.directive";

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventDetailComponent,
SessionListComponent,
    CollapsibleWellComponent,
    AddSessionComponent,
    UpvoteComponent,
    CreateEventComponent,
    LocationValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    UserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
