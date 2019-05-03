export interface ILanguage {
  name: string;
  level: string;
  certificate?: string
}
export interface ICourse {
  name: string;
  place: string;
  time: string
}
export interface ISkill {
  codeWord: string;
  name: string;
  list: string[];
}