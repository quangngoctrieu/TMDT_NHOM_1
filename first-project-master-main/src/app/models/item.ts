export class Item{
    id: number;
    name: string;
    price: number;// đơn giá
    size: string;
    color: string;
    total: number;// số lượng
    status: boolean;
    constructor (id: number, name: string, price: number, size: string, color: string, total: number, status: boolean){
        this.id=id;
        this.name=name;
        this.price=price;
        this.size=size;
        this.color=color;
        this.total=total;
        this.status=false;
    }
}