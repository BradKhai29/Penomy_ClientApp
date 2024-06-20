import { createRouter, createWebHistory } from "vue-router";

// Import pages.
import HomePage from "../views/HomePage.vue";
import MangaDetailPage from "../views/MangaDetail.vue";
import HistoryPage from "../views/HistoryPage.vue";
// import ChapterDetailPage from "../views/ChapterDetailPage.vue";

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
	MangaDetailPage: new Endpoint("/manga/:id", "manga"),
	HistoryPage: new Endpoint("/history", "history"),
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
	},
	{
		path: endpoints.MangaDetailPage.path,
		name: endpoints.MangaDetailPage.name,
		component: MangaDetailPage
	},
	{
		path: endpoints.HistoryPage.path,
		name: endpoints.HistoryPage.name,
		component: HistoryPage
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export { endpoints };
export default router;