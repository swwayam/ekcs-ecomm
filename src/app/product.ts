export interface Product {
    id: number
    title: string,
    price: number,
    description:     string,
    category: string,
    image: string,
    rating: number[],
    availableQuantity: number
    purchaseQuantity: number
    isInCart: boolean
}
