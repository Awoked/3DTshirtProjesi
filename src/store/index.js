import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: '#e8a7b4',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png',
});

export default state;