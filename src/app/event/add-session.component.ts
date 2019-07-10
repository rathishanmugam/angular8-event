import {Component} from "@angular/core";
import {ISession} from "./event.model";
import {Output,EventEmitter} from "@angular/core";
import {FormControl,FormGroup,Validators} from "@angular/forms";

@Component({
  selector:'create-session',
  templateUrl:'./add-session.component.html',
  styles: [`
    em {float:right; color:#E05C65; padding-left:10px;}
    .error input, .error select, .error textarea {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999; }
    .error :-moz-placeholder { color: #999; }
    .error ::-moz-placeholder {color: #999; }
    .error :ms-input-placeholder { color: #999; }
  `]
})
export class AddSessionComponent{
  @Output() saveNewSession = new EventEmitter()
  @Output() cancelAddSession = new EventEmitter()
  mouseoverLogin
  newSessionForm: FormGroup
  name: FormControl
  presenter: FormControl
  duration: FormControl
  show: FormControl
  time:FormControl
  abstract: FormControl
  ngOnInit() {
    this.name = new FormControl('', Validators.required)
    this.presenter = new FormControl('', Validators.required)
    this.duration = new FormControl('', Validators.required)
    this.show = new FormControl('', Validators.required)
    this.time = new FormControl('', [Validators.required, Validators.pattern('[0-9].*')]),
    this.abstract = new FormControl('', [Validators.required, Validators.maxLength(40)])

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      time: this.time,
      show:this.show,
      abstract: this.abstract
    })
  }
  validateName() {
    return  this.name.valid  || this.name.untouched
  }
  validateTime() {
    return  this.time.valid || this.time.untouched
  }
  validatePresenter() {
    return  this.presenter.valid || this.presenter.untouched
  }
  saveSession(formValues) {
    let session:ISession = {
      id: undefined,
      name: formValues.name,
      duration: formValues.duration,
      time: formValues.time,
      show:formValues.show,
      presenter: formValues.presenter,
      abstract: formValues.abstract,
      attendees: []
    }
    this.saveNewSession.emit(session)
  }

  cancel() {
    this.cancelAddSession.emit()
  }
}
