/* eslint-disable @typescript-eslint/ban-types */
// Squelch warnings of image imports from your assets dir

type AssetData = Object[];

declare module "$lib/assets/*" {
    const meta: AssetData;
    export default meta;
}

// Added to remove warnings from boxArtUrl imports
declare module "./*" {
    const meta: AssetData;
    export default meta;
}
