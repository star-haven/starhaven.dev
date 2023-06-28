/* eslint-disable @typescript-eslint/ban-types */
// Squelch warnings of image imports from your assets dir

declare const _opaque: unique symbol;
type Opaque<T, V> = T & { readonly [_opaque]: V };
type AssetData = Opaque<Object[], "AssetData">;

declare module "$lib/assets/*" {
    const meta: AssetData;
    export default meta;
}

// Added to remove warnings from boxArtUrl imports
declare module "./*" {
    const meta: AssetData;
    export default meta;
}
