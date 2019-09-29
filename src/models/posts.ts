import { DataTypes, Model, Sequelize } from "sequelize";

export interface IPost {
	userId: number;
	id: number;
	title: string;
	body: string;
}

class PostModel extends Model {
	public id!: number;
	public userId!: number;
	public title!: string;
	public body!: string;
}

export class Post {
	public init(conn: Sequelize) {
		PostModel.init(
			{
				id: {
					type: DataTypes.INTEGER,
					autoIncrement: true,
					primaryKey: true,
				},
				userId: {
					type: DataTypes.INTEGER,
					allowNull: false,
				},
				title: {
					type: new DataTypes.STRING(1024),
					allowNull: false,
				},
				body: {
					type: new DataTypes.STRING(4096),
					allowNull: false,
				},
			},
			{
				sequelize: conn,
				tableName: "posts",
			},
		);

		return PostModel;
	}
}
