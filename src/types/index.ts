export interface ICard {
    img: string;
    title: string;
    price: string;
    rate: string;
    id: number;
    amount?: number;
}

export interface ICardlist {
    products: ICard[];
    title?: string;
    type?: string;
}

export interface IState {
    cartItems: ICard[];
    amount: number;
    total: number;
}

export interface IStore {
    cart: IState;
}

