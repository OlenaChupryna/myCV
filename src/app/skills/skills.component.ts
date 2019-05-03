import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SkillsService } from '../skills.service';
import { ISkill } from '../interfaces';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit, AfterViewInit {
  skillsForm: FormGroup;
  allSkills: ISkill[] = [];
  visibleSkills: ISkill[] = [];
  private formBuilderObgect: Object;

  constructor(
    private skillsService: SkillsService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.visibleSkills = this.skillsService.getChousenSkills();
    this.allSkills = this.skillsService.getAllSkills();
    this.formBuilderObgect = this.createFormBuilderObgect();
    this.skillsForm = this.formBuilder.group(this.formBuilderObgect);
  }
  ngAfterViewInit() {
    this.bindObservable();
  }

  goTo() {
    window.location.href = 'https://talking-threads.herokuapp.com/';
  }

  getVisibleSkills(): ISkill[] {
    return this.skillsService.getChousenSkills();
  }

  createFormBuilderObgect(): Object {
    let result = {};
    this.allSkills.forEach(skill =>
      Object.defineProperty(result, skill.codeWord, {
        value: ['', ''],
        enumerable: true
      })
    );
    return result;
  }
  bindObservable(): void {
    this.allSkills.forEach(skill => {
      let element = document.getElementById(skill.codeWord);

      let observable = fromEvent(element, 'change');

      observable.subscribe((event) => {
        if ((<HTMLInputElement>event.target).checked) {
          this.skillsService.addChousenSkill((<HTMLInputElement>event.target).name);
          this.visibleSkills = this.skillsService.getChousenSkills();
        } else {
          this.skillsService.removeChousenSkill((<HTMLInputElement>event.target).name);
          this.visibleSkills = this.skillsService.getChousenSkills();
        }
      })
    })
  }

}
