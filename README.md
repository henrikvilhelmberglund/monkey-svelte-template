# Monkey Svelte Template

This is a template created using a fork of [vite-plugin-monkey](https://github.com/lisonge/vite-plugin-monkey).

The purpose of this template is to enable the user to write userscripts using Vite for HMR, Svelte 5 as a UI framework, UnoCSS for utility CSS styling and Typescript for reliability. This template also includes [GM-fetch](https://github.com/Sec-ant/gm-fetch) for easier fetching.

You are meant to use this in combination with userscript extensions like [Tampermonkey](https://www.tampermonkey.net/) or [Scriptcat](https://github.com/scriptscat/scriptcat/blob/main/README_EN.md).

If you encounter CSP issues preventing your script from loading use [Disable-CSP](https://github.com/lisonge/Disable-CSP) **on the site blocking your userscript by right clicking the icon and choosing "on ___"** (aka not globally).

## Usage

0. Get a [Tampermonkey](https://www.tampermonkey.net/) or [Scriptcat](https://github.com/scriptscat/scriptcat/blob/main/README_EN.md) extension.
1. `npm install && npm run dev`
2. Install the script in your userscript extension.
3. Go to http://www.google.com to see the userscript in action.
4. Edit the userscript to see that HMR works.
5. Edit `match` inside `vite.config.ts` to the site you want the script to run in.
6. When you are happy with the script, close the server and run `npm run build && npm run preview` to get a built version with better performance.
7. When you want to update the script, run `npm run dev` and replace the script, do your changes, then build and preview again. 

Have fun!