interface IRating {
    rate: number;
    count: number;
}
export interface IProduct { // I는 interface
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: IRating;
    quantity: number;
    total: number;
}