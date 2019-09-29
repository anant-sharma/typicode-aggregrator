import { DataTypes, Model, Sequelize } from "sequelize";

export interface ITodo {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}

class TodoModel extends Model {
	public id!: number;
	public userId!: number;
	public title!: string;
	public completed!: boolean;
}

export class Todo {
	public init(conn: Sequelize) {
		TodoModel.init(
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
				completed: {
					type: DataTypes.BOOLEAN,
					allowNull: false,
				},
			},
			{
				sequelize: conn,
				tableName: "todos",
			},
		);

		return TodoModel;
	}
}
