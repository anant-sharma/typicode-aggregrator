import { DataTypes, Model, Sequelize } from "sequelize";
import { IAddress } from "./addresses";
import { ICompany } from "./companies";

export interface IUser {
	id: number;
	name: string;
	username: string;
	email: string;
	phone: string;
	website: string;

	address: IAddress;
	company: ICompany;
}

class UserModel extends Model {
	public id!: number;
	public name!: string;
	public username!: string;
	public email!: string;
	public phone!: string;
	public website!: string;
}

export class User {
	public init(conn: Sequelize) {
		UserModel.init(
			{
				id: {
					type: DataTypes.INTEGER,
					autoIncrement: true,
					primaryKey: true,
				},
				name: {
					type: new DataTypes.STRING(128),
					allowNull: false,
				},
				username: {
					type: new DataTypes.STRING(128),
					allowNull: false,
				},
				email: {
					type: new DataTypes.STRING(128),
					allowNull: false,
				},
				phone: {
					type: new DataTypes.STRING(128),
					allowNull: false,
				},
				website: {
					type: new DataTypes.STRING(128),
					allowNull: false,
				},
			},
			{
				sequelize: conn,
				tableName: "users",
			},
		);

		return UserModel;
	}
}
