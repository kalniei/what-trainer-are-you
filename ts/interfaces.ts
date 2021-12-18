export interface IQuizOptions {
  id: string;
  optionValue: number;
  optionLabel: string;
  selected: boolean;
}

export interface IQuiz {
  id: number;
  label: string;
  options: IQuizOptions[];
}
