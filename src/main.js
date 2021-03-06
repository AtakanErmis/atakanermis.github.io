import App from './App.svelte';

const socialLinks = [
	{
		name: "Twitter",
		icon: "icon-twitter",
		link: "https://twitter.com/atakan_ermis"
	},
	{
		name: "Reddit",
		icon: "icon-reddit-alien",
		link: "https://www.reddit.com/user/AtakanErmis"
	},
	{
		name: "Github",
		icon: "icon-github",
		link: "https://github.com/AtakanErmis"
	},
	{
		name: "Telegram",
		icon: "icon-telegram",
		link: "https://t.me/AtakanErmis"
	},
	{
		name: "Last.FM",
		icon: "icon-lastfm",
		link: "https://www.last.fm/user/AtakanErmis"
	},
	{
		name: "Spotify",
		icon: "icon-spotify",
		link: "https://open.spotify.com/user/5c9in3cvvftwlkbaeqcfvsdok?si=g6Llj8FyQTmMMN40HUgTOg"
	},
	{
		name: "E-Mail",
		icon: "icon-email	",
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