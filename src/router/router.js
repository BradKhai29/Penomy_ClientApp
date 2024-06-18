import { createRouter, createWebHashHistory } from "vue-router";

// Import pages.
import HomePage from "../views/HomePage.vue";

// Define paths for routing.
/**
 * The class contains data for routing path.
 */
class Endpoint {
	/**
	 * @param {String} path Path of this routing endpoint.
	 * @param {String} name The alias name for this routing endpoint.
	 */
	constructor(path, name) {
		this.path = path;
		this.name = name;
	}
}

/**
 * This object contains all routing endpoints of this app.
 */
const endpoints = {
	HomePage: new Endpoint("/", "home")
};

const routes = [
	{
		path: endpoints.HomePage.path,
		name: endpoints.HomePage.name,
		component: HomePage
	}
];

const router = createRouter({
	history: createWebHashHistory(),
	routes
});

export { endpoints };
export default router;
