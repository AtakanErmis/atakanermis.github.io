import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
    faTwitter,
    faGithub,
    faReddit,
    faTelegram,
    faLastfm,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";

const social_links = [
    {
        name: "Twitter",
        icon: faTwitter,
        link: "https://twitter.com/atakan_ermis"
    },
    {
        name: "Reddit",
        icon: faReddit,
        link: "https://www.reddit.com/user/AtakanErmis"
    },
    { name: "Github", icon: faGithub, link: "https://github.com/AtakanErmis" },
    { name: "Telegram", icon: faTelegram, link: "https://t.me/AtakanErmis" },
    {
        name: "Last.FM",
        icon: faLastfm,
        link: "https://www.last.fm/user/AtakanErmis"
    },
    {
        name: "Instagram",
        icon: faInstagram,
        link: "https://instagram.com/atakanermis"
    },
    { name: "E-Mail", icon: faEnvelope, link: "mailto:me@atakanermis.me" }
];

const Main = () => {
    return (
        <main>
            <ul>
                {social_links.map(e => (
                    <li key={social_links.indexOf(e)}>
                        <a
                            className="social_link"
                            href={e.link}
                            aria-label={e.name}
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={e.icon} />
                        </a>
                    </li>
                ))}
            </ul>
        </main>
    );
};

export default Main;
