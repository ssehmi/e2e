import { assert } from 'chai';
import { binding, given, when, then } from 'cucumber-tsflow';
import Homepage from '../pages/Homepage';

@binding()
export class HomepageSearchSteps {
    @given(/^I am on the search page$/)
    public givenOnHomepage() {
        Homepage.open();
        const title = browser.getTitle();

        const pageSource = browser.getPageSource();

        const seoTitle = browser.execute(pageSource => {
            let frag = document
                .createRange()
                .createContextualFragment(pageSource);
            return frag.querySelector('title').textContent;
        }, pageSource);

        assert.equal(seoTitle, 'Google');
        assert.equal(title, 'Google');
    }

    @when(/^I enter "([^"]*)" into the search box$/)
    public whenISearch(arg1) {
        Homepage.enterText(arg1);
        const searchText = Homepage.searchInput.getValue();
        assert.equal(searchText, arg1);
    }

    @when(/^I click the search button$/)
    public whenSearchClicked() {
        Homepage.search();
    }

    @then(/^I should see a list of search results$/)
    public resultsShouldShow() {
        assert.isTrue(Homepage.isSearched());
    }
}
