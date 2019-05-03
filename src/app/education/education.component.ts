import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { trigger, state, style, animate, transition, group } from '@angular/animations';
import { ICourse } from '../interfaces';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  animations: [
    trigger('fadeAnimation', [
      state('*', style({
        opacity: '1',
        transform: "scale(1) translate(0)"
      })),
      state('void', style({
        opacity: '0',
        transform: "scale(.2) translate(-100%)"
      })),
      transition(':enter', animate('700ms 100ms ease-in')),
      transition(':leave', animate('700ms 100ms ease-out')),
    ]
    )
  ]
})
export class EducationComponent implements OnInit {

  languages = [];
  isDataReceived = false;
  isDataVisible = false;
  isEducationVisible = false;
  isCoursesVisible = false;
  courses: ICourse[] = [
    { name: "Web UI", place: "SoftServe IT Academy", time: "December 2018-March 2019" },
    { name: "NodeJS, ReactJS and MongoDB", place: "Oracle Academy", time: "October 2018-January 2019" },
    { name: "Open JS JavaScript Core course", place: "Dev-Pro.net and NURE IT Academy", time: "October-December 2017" },
    { name: "JavaScript Development", place: "Oracle Academy", time: "September-October 2017" },
    { name: "Front-end technologies (HTML, CSS)", place: "Oracle Academy", time: " July-August 2017" }
  ]
  constructor(private _dataSevice: DataService) { }

  ngOnInit() { }

  fetchData() {
    if (!this.isDataReceived) {
      this._dataSevice.getUsers()
        .subscribe(
          data => {
            this.languages = data;
            this.isDataReceived = true;

          },
          err => console.log(err));
    }
    this.isDataVisible = true;
  }
  hideList() {
    this.isDataVisible = false;
  }
  showEducation() {
    this.isEducationVisible = true;
  }
  hideEducation() {
    this.isEducationVisible = false;
  }
  showCourses() {
    this.isCoursesVisible = true;
  }
  hideCourses() {
    this.isCoursesVisible = false;
  }

}
