import foodsModel from "./models/foods.Model.js";

class FoodsDaoMongo{
    constructor(){
        this.model = foodsModel;
    }

    create = async newFood => await this.model.create(newFood);
    
    getBy = async filter => await this.model.findOne(filter);

    get = async () => await this.model.find({});

    update = async (fid, updateData) => await this.model.findByIdAndUpdate(fid, updateData);

    delete = async fid => await this.model.findByIdAndDelete(fid);
}

export default FoodsDaoMongo;