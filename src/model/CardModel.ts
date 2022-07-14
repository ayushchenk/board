export type CardModel = {
    code: string;
    title: string;
    status: string;
    priority: Priority;
};

export enum Priority {
    Lowest = 1,
    Low = 2,
    Medium = 3,
    High = 4,
    Highest = 5
}