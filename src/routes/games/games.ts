import pm64box from "./pm64/3dbox.webp?run";
import ttydbox from "./ttyd/3dbox.webp?run";
import spmbox from "./spm/3dbox.webp?run";
import ssbox from "./ss/3dbox.webp?run";
import csbox from "./cs/3dbox.webp?run";
import okbox from "./ok/3dbox.webp?run";

export interface Game {
    url?: string;
    viewTransitionTag: string;
    name: string;
    console: string;
    boxArtUrl: object[];
    year: number;
}

export const obj: { [key: string]: Game } = {
    pm64: {
        url: "https://wikipedia.org/wiki/Paper_Mario_(video_game)", //'/play/pm64',
        viewTransitionTag: "pm64",
        name: "Paper Mario",
        console: "Nintendo 64",
        boxArtUrl: pm64box,
        year: 2000,
    },
    ttyd: {
        url: "https://wikipedia.org/wiki/Paper_Mario:_The_Thousand-Year_Door",
        viewTransitionTag: "ttyd",
        name: "Paper Mario: The Thousand-Year Door",
        console: "Nintendo GameCube",
        boxArtUrl: ttydbox,
        year: 2004,
    },
    spm: {
        url: "https://wikipedia.org/wiki/Super_Paper_Mario",
        viewTransitionTag: "spm",
        name: "Super Paper Mario",
        console: "Nintendo Wii",
        boxArtUrl: spmbox,
        year: 2007,
    },
    ss: {
        url: "https://wikipedia.org/wiki/Paper_Mario:_Sticker_Star",
        viewTransitionTag: "ss",
        name: "Paper Mario: Sticker Star",
        console: "Nintendo 3DS",
        boxArtUrl: ssbox,
        year: 2012,
    },
    cs: {
        url: "https://wikipedia.org/wiki/Paper_Mario:_Color_Splash",
        viewTransitionTag: "cs",
        name: "Paper Mario: Color Splash",
        console: "Nintendo Wii U",
        boxArtUrl: csbox,
        year: 2016,
    },
    ok: {
        url: "https://wikipedia.org/wiki/Paper_Mario:_The_Origami_King",
        viewTransitionTag: "ok",
        name: "Paper Mario: The Origami King",
        console: "Nintendo Switch",
        boxArtUrl: okbox,
        year: 2020,
    },
};

export const arr = Object.values(obj);
