class FoodsRepository {
    constructor(dao){
        this.dao = dao;
    }

    createFood = async newFood => await this.dao.create(newFood);

    getFood = async filter => await this.dao.getBy(filter);

    getFoods = async () => await this.dao.get();

    updateFood = async (fid, updateData) => await this.dao.update(fid, updateData);

    deleteFood = async fid => await this.dao.delete(fid);
}

export default FoodsRepository;