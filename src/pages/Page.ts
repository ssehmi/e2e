const fetch = require('node-fetch');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

export default abstract class Page {
    private _path: string;

    public open(path: string): void {
        this._path = path;
        browser.url(path);
    }

    /**
     * For SSR rendered apps the client can render different content to the server
     * This allows the view source of the page to be inspected to verify its the same as the
     * DOM when the client renders
     */
    public async getSourceDom(): Promise<Document> {
        return await fetch(this._path)
            .then(res => res.text())
            .then(htmlsource => {
                const dom = new JSDOM(htmlsource);
                return dom.window.document;
            });
    }
}
