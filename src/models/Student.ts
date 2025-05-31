export interface Student {
  name: string;
  rollNumber: string;
  scores: {
    subject: string;
    mark: number;
  }[];
}
