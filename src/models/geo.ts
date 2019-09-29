import { DataTypes, Model, Sequelize } from "sequelize";

export interface IGeo {
	id: number;
	addressId: number;
	lat: string;
	lng: string;
}

class GeoModel extends Model {
	public id!: number;
	public addressId!: number;
	public lat!: string;
	public lng!: string;
}

export class Geo {
	public init(conn: Sequelize) {
		GeoModel.init(
			{
				id: {
					type: DataTypes.INTEGER,
					autoIncrement: true,
					primaryKey: true,
				},
				addressId: {
					type: DataTypes.INTEGER,
					allowNull: false,
				},
				lat: {
					type: new DataTypes.STRING(128),
					allowNull: false,
				},
				lng: {
					type: new DataTypes.STRING(128),
					allowNull: false,
				},
			},
			{
				sequelize: conn,
				tableName: "geo",
			},
		);

		return GeoModel;
	}
}
