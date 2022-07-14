export type CardModel = {
    code: string;
    title: string;
    status: string;
    priority: Priority;
};

export enum Priority {
    Lowest = 0,
    Low = 1,
    Medium = 2,
    High = 3,
    Highest = 4
}