import { DataTypes, Model, Sequelize } from "sequelize";

export interface IAlbum {
	userId: number;
	id: number;
	title: string;
}

class AlbumModel extends Model {
	public id!: number;
	public userId!: number;
	public title!: string;
}

export class Album {
	public init(conn: Sequelize) {
		AlbumModel.init(
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
			},
			{
				sequelize: conn,
				tableName: "albums",
			},
		);

		return AlbumModel;
	}
}
