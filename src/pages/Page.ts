export default abstract class Page {
    open (path) {
        browser.url(path)
    }
}