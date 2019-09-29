import { DataTypes, Model, Sequelize } from "sequelize";
import { IGeo } from "./geo";

export interface IAddress {
	id: number;
	userId: number;
	street: string;
	suite: string;
	city: string;
	zipcode: string;
	geo: IGeo;
}

export class AddressModel extends Model {
	public id!: number;
	public userId!: number;
	public street!: string;
	public suite!: string;
	public city!: string;
	public zipcode!: string;
}

export class Address {
	public init(conn: Sequelize) {
		AddressModel.init(
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
				street: {
					type: new DataTypes.STRING(128),
					allowNull: false,
				},
				suite: {
					type: new DataTypes.STRING(128),
					allowNull: false,
				},
				city: {
					type: new DataTypes.STRING(128),
					allowNull: false,
				},
				zipcode: {
					type: new DataTypes.STRING(32),
					allowNull: false,
				},
			},
			{
				sequelize: conn,
				tableName: "addresses",
			},
		);

		return AddressModel;
	}
}
