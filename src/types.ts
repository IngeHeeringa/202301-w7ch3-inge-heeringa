export interface Goal {
  id: number;
  title: string;
  isCompleted: boolean;
}

export type GoalsState = Goal[];
