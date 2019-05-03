import { Injectable } from '@angular/core';
import { skills } from '../assets/data/skills';
import { ISkill } from './interfaces'

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  skills: ISkill[] = skills;
  chosenSkills: ISkill[] = [];

  constructor() { }

  getAllSkills(): ISkill[] {
    return this.skills;
  }
  getChousenSkills(): ISkill[] {
    return this.chosenSkills;
  }
  addChousenSkill(name: string): void {
    let newSkill: ISkill[] = this.skills.filter(skill => skill.codeWord === name);
    this.chosenSkills.push(...newSkill);
  }
  removeChousenSkill(name: string): void {
    this.chosenSkills = this.chosenSkills.filter(chousenSkill => chousenSkill.codeWord !== name);
  }
}
