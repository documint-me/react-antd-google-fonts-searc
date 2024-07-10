import type { Plugin } from 'grapesjs';
export type PluginOptions = {
    section?: string;
    property?: string;
    onSelectGoogleFont?: (...args: any[]) => void;
};
export declare const plugin: Plugin<PluginOptions>;
export default plugin;
