import headersModel from "./models/headers.Model.js";

class HeadersDaoMongo{
    constructor(){
        this.model = headersModel;
    }

    create = async newHeader => await this.model.create(newHeader);

    getBy = async filter => await this.model.findOne(filter);

    get = async() => await this.model.find({});

    update = async (hid, updateData) => await this.model.findByIdAndUpdate(hid, updateData);

    delete = async hid => await this.model.findByIdAndDelete(hid);
}

export default HeadersDaoMongo;