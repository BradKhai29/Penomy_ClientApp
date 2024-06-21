import { createRouter, createWebHistory } from "vue-router";

// Import pages.
import HomePage from "../views/HomePage.vue";
import ChapterDetailPage from "../views/ChapterDetailPage.vue";
import LoginPage from "../views/auth/LoginPage.vue";

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
	HomePage: new Endpoint("/", "home"),
	ChapterDetailPage: new Endpoint("/chapter/:id", "chapter"),
	LoginPage: new Endpoint("/login", "login")
};

const routes = [
	{
		path: endpoints.HomePage.path,
		name: endpoints.HomePage.name,
		component: HomePage
	},
	{
		path: endpoints.ChapterDetailPage.path,
		name: endpoints.ChapterDetailPage.name,
		component: ChapterDetailPage
	},
	{
		path: endpoints.LoginPage.path,
		name: endpoints.LoginPage.name,
		component: LoginPage
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export { endpoints };
export default router;
