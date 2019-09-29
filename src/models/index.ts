import { Sequelize } from "sequelize";
import config from "../config";
import { Address } from "./addresses";
import { Album } from "./albums";
import { Comment } from "./comments";
import { Company } from "./companies";
import { Geo } from "./geo";
import { Photo } from "./photos";
import { Post } from "./posts";
import { Todo } from "./todo";
import { User } from "./users";

export class Models {
	private static sequelize: Sequelize;

	public static models: any;

	/**
	 * init
	 */
	public static init() {
		this.sequelize = new Sequelize(config.dbConnectionString);

		const address = new Address().init(this.sequelize);
		const album = new Album().init(this.sequelize);
		const comment = new Comment().init(this.sequelize);
		const company = new Company().init(this.sequelize);
		const geo = new Geo().init(this.sequelize);
		const photo = new Photo().init(this.sequelize);
		const post = new Post().init(this.sequelize);
		const todo = new Todo().init(this.sequelize);
		const user = new User().init(this.sequelize);

		// Relations
		post.hasMany(comment, { foreignKey: "postId" });
		user.hasMany(post, { foreignKey: "userId" });
		album.hasMany(photo, { foreignKey: "albumId" });

		user.hasOne(address, { foreignKey: "userId" });
		user.hasOne(company, { foreignKey: "userId" });

		address.hasOne(geo, { foreignKey: "addressId" });

		user.hasMany(todo, { foreignKey: "userId" });

		this.models = {
			address,
			album,
			comment,
			company,
			geo,
			photo,
			post,
			todo,
			user,
		};
	}

	public static sync() {
		return this.sequelize.sync({ force: true });
	}
}
