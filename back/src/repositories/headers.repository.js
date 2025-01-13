class HeadersRepository{
    constructor(dao){
        this.dao = dao;
    }

    createHeader = async newHeader => await this.dao.create(newHeader);

    getHeader = async filter => await this.dao.getBy(filter);

    getHeaders = async() => await this.dao.get();

    updateHeader = async (hid, updateData) => await this.dao.update(hid, updateData);

    deleteHeader = async hid => await this.dao.delete(hid);
}

export default HeadersRepository;