import App from './App.svelte';

const socialLinks = [
	{
		name: "Twitter",
		icon: "ri-twitter-fill",
		link: "https://twitter.com/atakan_ermis"
	},
	{
		name: "Reddit",
		icon: "ri-reddit-fill",
		link: "https://www.reddit.com/user/AtakanErmis"
	},
	{
		name: "Github",
		icon: "ri-github-fill",
		link: "https://github.com/AtakanErmis"
	},
	{
		name: "Telegram",
		icon: "ri-telegram-fill",
		link: "https://t.me/AtakanErmis"
	},
	{
		name: "Last.FM",
		icon: "ri-music-fill",
		link: "https://www.last.fm/user/AtakanErmis"
	},
	{
		name: "Spotify",
		icon: "ri-spotify-fill",
		link: "https://open.spotify.com/user/5c9in3cvvftwlkbaeqcfvsdok?si=g6Llj8FyQTmMMN40HUgTOg"
	},
	{
		name: "E-Mail",
		icon: "ri-mail-line",
		link: "mailto:ataerms@gmail.com"
	}
];


const app = new App({
	target: document.body,
	props: {
		socialLinks
	}
});

export default app;