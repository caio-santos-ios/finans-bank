export type TLogin = {
    email: string;
    password: string;
}

export type TRegister = {
    photoProfile: string;
    name?: string;
    email: string;
    password: string;
}

export type TAccount = {
    id: number;
    name: string;
    email: string;
    photoProfile: string;
    receiveTransfers: [];
    sendTransfers: [];
}