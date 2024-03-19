export interface MenuData {
    img: string; 
    name: string; 
    available: boolean, 
    price: number; 
    description: string; 
    starRating: number; 
    kcal: number;
    allergens: string[];
}

export interface MenuItem {
    id: string;
    img: string; 
    name: string; 
    available: boolean, 
    price: number; 
    description: string; 
    starRating: number; 
    kcal: number;
    allergens: string[];
}

export interface MenuItems {
    menuItems: MenuItem[]
}