export interface Cart {
    items: Array<CartItem>,
    cartTotal: number,
    cartItemCount: number,
}

export interface CartItem {
    productName: string,
    productImg: string,
    price: number,
    quantity: number,
    id: number,
    variant?: string
}