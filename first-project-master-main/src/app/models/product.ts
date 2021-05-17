export class Product {
    id: number;
    name: string;
    brand: string;
    infor: string;
    image: string;
    price: number;
    color: string;
    type: string;
    sold: number;
    constructor() {
        this.id = 0;
        this.name = '';
        this.brand = '';
        this.infor = '';
        this.image = '';
        this.price = 0;
        this.color = '';
        this.type = '';
        this.sold = 0;
    }
}