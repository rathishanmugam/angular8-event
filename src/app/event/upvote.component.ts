import {Component,Input,Output,EventEmitter} from "@angular/core";
@Component({
  selector:'upvote',
  template:`
  <div class = "votingWidgetContainer pointable" (click)="onClick()">
    <div class="well votingWidget">
      <div class="votingButton">
        <i  class="glyphicon glyphicon-heart"
        [style.color]="iconColor"></i>
      </div>
      <div class="badge badge-inverse votingCount">
        <div>{{count}}</div>
      </div>
    </div>
  </div>
  `,
   styles:[`
    .votingButton {
    margin-left:-7px;
    margin-top:1px;
    cursor:pointer;
  }
  .votingButton i{
    color:white;
}
.badge-inverse{
    background-color:#fff;
    color:#4e5d6c;
}
.votingCount{
    margin-left:-11px;
    margin-top:1px;
    font-weight:bold;
    font-size:14px;
}
.votingWidget{
    height:64px;
    padding-top:7px;
    border-radius:21px;
}
    .votingWidgetContainer{
    padding-left:24px;
}
  `]
})
export  class UpvoteComponent{
  @Input() count: number;
  @Input() set voted(val){
    this.iconColor = val ? 'red' : 'white';
  }
  @Output() vote = new EventEmitter();
  public iconColor : string;
  onClick(){
    this.vote.emit({});
  }
}
