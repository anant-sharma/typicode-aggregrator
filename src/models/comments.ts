import { DataTypes, Model, Sequelize } from "sequelize";

export interface IComment {
	postId: number;
	id: number;
	name: string;
	email: string;
	body: string;
}

class CommentModel extends Model {
	public id!: number;
	public postId!: number;
	public name!: string;
	public email!: string;
	public body!: string;
}

export class Comment {
	public init(conn: Sequelize) {
		CommentModel.init(
			{
				id: {
					type: DataTypes.INTEGER,
					autoIncrement: true,
					primaryKey: true,
				},
				postId: {
					type: DataTypes.INTEGER,
					allowNull: false,
				},
				name: {
					type: new DataTypes.STRING(128),
					allowNull: false,
				},
				email: {
					type: new DataTypes.STRING(128),
					allowNull: false,
				},
				body: {
					type: new DataTypes.STRING(4096),
					allowNull: false,
				},
			},
			{
				sequelize: conn,
				tableName: "comments",
			},
		);

		return CommentModel;
	}
}
