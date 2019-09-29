import { DataTypes, Model, Sequelize } from "sequelize";

export interface IPhoto {
	albumId: number;
	id: number;
	title: string;
	url: string;
	thumbnailUrl: string;
}

class PhotoModel extends Model {
	public id!: number;
	public albumId!: number;
	public title!: string;
	public url!: string;
	public thumbnailUrl!: string;
}

export class Photo {
	public init(conn: Sequelize) {
		PhotoModel.init(
			{
				id: {
					type: DataTypes.INTEGER,
					autoIncrement: true,
					primaryKey: true,
				},
				albumId: {
					type: DataTypes.INTEGER,
					allowNull: false,
				},
				url: {
					type: new DataTypes.STRING(1024),
					allowNull: false,
				},
				thumbnailUrl: {
					type: new DataTypes.STRING(2048),
					allowNull: false,
				},
			},
			{
				sequelize: conn,
				tableName: "photos",
			},
		);

		return PhotoModel;
	}
}
