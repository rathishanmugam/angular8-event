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

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventDetailComponent,
SessionListComponent,
    CollapsibleWellComponent,
    AddSessionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
