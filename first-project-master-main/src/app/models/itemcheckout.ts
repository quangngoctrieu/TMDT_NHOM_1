export class ItemCheckOut{
    id:number;
    iduser: string;//sdt
    idproduct: number;//ma san pham
    name: string;
    price: number;// đơn giá
    size: string;
    color: string;
    total: number;// số lượng
    status: boolean;
    constructor (){
        this.id=0;
        this.iduser="";
        this.idproduct=0;
        this.name="";
        this.price=0;
        this.size="S";
        this.color="red";
        this.total=0;
        this.status=false;
    }
}