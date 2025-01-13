class SocialsRepository {
    constructor(dao){
        this.dao = dao;
    }

    createSocial = async newSocial => await this.dao.create(newSocial);

    getSocial = async filter => await this.dao.getBy(filter);

    getSocials = async () => await this.dao.get();

    updateSocial = async (sid, updateData) => await this.dao.update(sid, updateData);

    deleteSocial = async sid => await this.dao.delete(sid);
}

export default SocialsRepository;