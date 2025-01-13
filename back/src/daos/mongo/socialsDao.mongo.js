import socialsModel from "./models/socials.Model.js";

class SocialsDaoMongo {
    constructor() {
        this.model = socialsModel;
    }

    create = async newSocial => await this.model.create(newSocial);

    getBy = async filter => await this.model.findOne(filter);

    get = async () => await this.model.find({});

    update = async (sid, updateData) => await this.model.findByIdAndUpdate(sid, updateData);

    delete = async (sid) => await this.model.findByIdAndDelete(sid);
}

export default SocialsDaoMongo;