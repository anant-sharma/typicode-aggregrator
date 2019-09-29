import axios, { AxiosInstance } from "axios";
import { Models } from "../models";

export class DataController {
	private axiosInstance: AxiosInstance;

	constructor() {
		this.axiosInstance = axios.create({
			baseURL: "https://jsonplaceholder.typicode.com/",
		});
	}

	private fetchData(verb: string) {
		return this.axiosInstance.get(verb);
	}

	public async populateUsersData() {
		const { data: users = [] } = await this.fetchData("users");

		for (const user of users) {
			const userResponse = await Models.models.user.create({ ...user });

			const addressResponse = await Models.models.address.create({
				...user.address,
				userId: userResponse.dataValues.id,
			});

			await Models.models.geo.create({ ...user.address.geo, addressId: addressResponse.dataValues.id });

			await Models.models.company.create({ ...user.company, userId: userResponse.dataValues.id });
		}
	}

	public async populateTodosData() {
		const { data = [] } = await this.fetchData("todos");
		Models.models.todo.bulkCreate(data);
	}

	public async populatePostsData() {
		const { data = [] } = await this.fetchData("posts");
		Models.models.post.bulkCreate(data);
	}

	public async populateCommentsData() {
		const { data = [] } = await this.fetchData("comments");
		Models.models.comment.bulkCreate(data);
	}

	public async populateAlbumsData() {
		const { data = [] } = await this.fetchData("albums");
		Models.models.album.bulkCreate(data);
	}

	public async populatePhotosData() {
		const { data = [] } = await this.fetchData("photos");
		Models.models.photo.bulkCreate(data);
	}
}
