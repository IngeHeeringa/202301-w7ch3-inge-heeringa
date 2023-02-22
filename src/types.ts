export interface Goal {
  id: number;
  title: string;
  completed: boolean;
}

export type GoalsState = Goal[];
