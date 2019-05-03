import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, group } from '@angular/animations';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  animations: [
    trigger('handWave', [
      state('initial', style({
        transform: "rotate(0deg)"
      })),
      state('final', style({
        transform: "rotate(45deg)"
      })),
      transition('initial=>final', animate('500ms')),
      transition('final=>initial', animate('500ms')),
    ])
  ],
})



export class ResumeComponent implements OnInit {
  currentState = 'initial';

  constructor() { }

  ngOnInit() {
  }

  // getUrl() {
  //   return "url(../../assets/images/hand.png)";
  // }
  // getPhotoUrl() {
  //   return "url(../../assets/images/photo.jpg)";
  // }
  changeState() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }
  wave() {
    this.changeState();
    let int = setInterval(() => this.changeState(), 504);
    setTimeout(() => clearInterval(int), 3600);
  }

}
