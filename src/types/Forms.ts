export enum Form {
    Initial,
    Loading,
    Success,
    Error
}

export type FormState = {
    state: Form;
    message?: string;
};

export type Subscribers = {
    count: number;
};

export type Entry = {
    id: string;
    body: string;
    updated_at: string;
    created_by: string;
}