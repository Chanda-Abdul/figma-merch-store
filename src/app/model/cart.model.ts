export interface Cart{
    items: Array<CartItem>
}

export interface CartItem {
    productName: string,
    productImg: string;
    price: number,
    quantity: number,
    id: number
}