import FoodsDaoMongo from "../daos/mongo/foodsDao.mongo.js";
import HeadersDaoMongo from "../daos/mongo/headersDao.mongo.js";
import HistoriesDaoMongo from "../daos/mongo/historiesDao.mongo.js";
import SocialsDaoMongo from "../daos/mongo/socialsDao.mongo.js";
import FoodsRepository from "../repositories/foods.repository.js";
import HeadersRepository from "../repositories/headers.repository.js";
import HistoriesRepository from "../repositories/histories.repository.js";
import SocialsRepository from "../repositories/socials.repository.js";

const foodsService = new FoodsRepository(new FoodsDaoMongo);
const socialsService = new SocialsRepository(new SocialsDaoMongo);
const headersService = new HeadersRepository(new HeadersDaoMongo());
const historiesService = new HistoriesRepository(new HistoriesDaoMongo());

export { socialsService, foodsService, headersService, historiesService };