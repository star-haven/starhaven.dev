import pm64box from "./pm64/3dbox.webp";
import ttydbox from "./ttyd/3dbox.webp";
import spmbox from "./spm/3dbox.webp";
import ssbox from "./ss/3dbox.webp";
import csbox from "./cs/3dbox.webp";
import okbox from "./tok/3dbox.webp";

export interface Game {
    url?: string;
    viewTransitionTag: string;
    name: string;
    console: string;
    boxArtUrl: string;
    year: number;
}

export const obj: { [key: string]: Game } = {
    pm64: {
        url: "http://127.0.0.1:5173/mods/pm64", //'/play/pm64',
        viewTransitionTag: "pm64",
        name: "Paper Mario",
        console: "Nintendo 64",
        boxArtUrl: pm64box,
        year: 2000,
    },
    ttyd: {
        url: "https://starhaven.dev/mods/ttyd",
        viewTransitionTag: "ttyd",
        name: "Paper Mario: The Thousand-Year Door",
        console: "Nintendo GameCube",
        boxArtUrl: ttydbox,
        year: 2004,
    },
    spm: {
        url: "https://starhaven.dev/mods/spm",
        viewTransitionTag: "spm",
        name: "Super Paper Mario",
        console: "Nintendo Wii",
        boxArtUrl: spmbox,
        year: 2007,
    },
    ss: {
        url: "https://starhaven.dev/mods/ss",
        viewTransitionTag: "ss",
        name: "Paper Mario: Sticker Star",
        console: "Nintendo 3DS",
        boxArtUrl: ssbox,
        year: 2012,
    },
    cs: {
        url: "https://starhaven.dev/mods/cs",
        viewTransitionTag: "cs",
        name: "Paper Mario: Color Splash",
        console: "Nintendo Wii U",
        boxArtUrl: csbox,
        year: 2016,
    },
    ok: {
        url: "https://starhaven.dev/mods/tok",
        viewTransitionTag: "tok",
        name: "Paper Mario: The Origami King",
        console: "Nintendo Switch",
        boxArtUrl: okbox,
        year: 2020,
    },
};

export const arr = Object.values(obj);
