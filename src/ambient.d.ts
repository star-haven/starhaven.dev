/* eslint-disable @typescript-eslint/ban-types */
// Squelch warnings of image imports from your assets dir
declare module "$lib/assets/*" {
    const meta: Object[];
    export default meta;
}

// Added to remove warnings from boxArtUrl imports
declare module "./*" {
    const meta: Object[];
    export default meta;
}
