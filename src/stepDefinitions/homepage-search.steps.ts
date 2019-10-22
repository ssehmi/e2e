import { assert } from 'chai';
import { binding, given, when, then } from 'cucumber-tsflow';
import homepage from '../pages/Homepage';

@binding()
export class HomepageSearchSteps {
    @given(/^I am on the search page$/)
    public givenOnHomepage() {
        homepage.open();
        const title = browser.getTitle();
        const seoTitle = homepage.getTextFromSource('title');

        assert.equal(seoTitle, 'Google');
        assert.equal(title, 'Google');
    }

    @when(/^I enter "([^"]*)" into the search box$/)
    public whenISearch(arg1) {
        homepage.enterText(arg1);
        const searchText = homepage.searchInput.getValue();
        assert.equal(searchText, arg1);
    }

    @when(/^I click the search button$/)
    public whenSearchClicked() {
        homepage.search();
    }

    @then(/^I should see a list of search results$/)
    public resultsShouldShow() {
        assert.isTrue(homepage.isSearched());
    }
}
