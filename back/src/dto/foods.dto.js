class FoodsDTO {
    constructor(food){
        this.name = food.name;
        this.category = food.category;
        this.description = food.description;
        this.price = food.price;
        this.imagen = food.imagen;
        this.stock = food.stock;
        this.novedad = food.novedad;
    }
}

export default FoodsDTO;