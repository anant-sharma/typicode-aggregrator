import { DataController } from "./controllers";
import { Models } from "./models";

(async () => {
	Models.init();
	await Models.sync();

	const dataController = new DataController();
	await dataController.populateUsersData();
	await dataController.populateTodosData();
	await dataController.populatePostsData();
	await dataController.populateCommentsData();
	await dataController.populateAlbumsData();
	await dataController.populatePhotosData();
})();
