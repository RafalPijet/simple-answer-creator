export interface Question {
    id: string;
    choice: string
}

export interface CaseContent {
    caseId: string;
    title: string;
    questions: Question[]
}

export interface Entry {
    step: number;
    cases: CaseContent[]
}

export enum AvailableStep {
    increment = 1,
    decrement = -1
}