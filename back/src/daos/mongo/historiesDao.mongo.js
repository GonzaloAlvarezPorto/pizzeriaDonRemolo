import historiesModel from "./models/histories.Model.js";

class HistoriesDaoMongo {
    constructor() {
        this.model = historiesModel;
    }
    create = async newHistory => await this.model.create(newHistory);

    getBy = async filter => await this.model.findOne(filter);

    get = async () => await this.model.find({});

    update = async (hid, updateData) => await this.model.findByIdAndUpdate(hid, updateData);

    delete = async (hid) => await this.model.findByIdAndDelete(hid);
}

export default HistoriesDaoMongo;