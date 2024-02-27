export interface MenuData {
    id: string;
    name: string; 
    img: string; 
    inStock: boolean, 
    price: number; 
    description: string; 
    starRating: number; 
    allergens: string[];
    kcal: number;
}

export interface MenuItems {
    menuItems: MenuData[]
}