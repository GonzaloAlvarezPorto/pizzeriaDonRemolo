class HistoriesRepository{
    constructor(dao){
        this.dao = dao;
    }

    createHistory = async newHistory => await this.dao.create(newHistory);

    getHistory = async filter => await this.dao.getBy(filter);

    getHistories = async() => await this.dao.get();

    updateHistory = async (hid, updateData) => await this.dao.update(hid, updateData);

    deleteHistory = async hid => await this.dao.delete(hid);
}

export default HistoriesRepository;