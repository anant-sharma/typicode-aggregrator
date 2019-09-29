import * as dotenv from "dotenv";

dotenv.config();

export default {
	dbConnectionString: process.env.postgresConnectionString || "",
};
