export default abstract class Page {
    public open (path: string): void {
        browser.url(path)
    }

    /**
     * For SSR rendered apps the client can render different content to the server
     * This allows the view source of the page to be inspected to verify its the same as the
     * DOM when the clien renders
     */
    public getTextFromSource(selector: string): string {
        const pageSource = browser.getPageSource();

        const text = browser.execute((pagesource: string, queryElement: string) => {
            let documentFragment = document.createRange().createContextualFragment(pagesource);
            return documentFragment.querySelector(queryElement).textContent;
        }, pageSource, selector);

        return text;
    }
}