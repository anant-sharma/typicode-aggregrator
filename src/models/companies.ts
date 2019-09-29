import { DataTypes, Model, Sequelize } from "sequelize";

export interface ICompany {
	id: number;
	userId: number;
	name: string;
	catchPhrase: string;
	bs: string;
}

class CompanyModel extends Model {
	public id!: number;
	public userId!: number;
	public name!: string;
	public catchPhrase!: string;
	public bs!: string;
}

export class Company {
	public init(conn: Sequelize) {
		CompanyModel.init(
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
				name: {
					type: new DataTypes.STRING(128),
					allowNull: false,
				},
				catchPhrase: {
					type: new DataTypes.STRING(128),
					allowNull: false,
				},
				bs: {
					type: new DataTypes.STRING(128),
					allowNull: false,
				},
			},
			{
				sequelize: conn,
				tableName: "companies",
			},
		);

		return CompanyModel;
	}
}
