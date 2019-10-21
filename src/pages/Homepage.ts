import Page from './Page';

class Homepage extends Page {
  /**
  * define elements
  */
  //get usernameInput()   { return $('//*[@name="username"]'); }

  get searchInput()   { return $('input.gLFyf'); }
  get searchButton()  { return $('input.gNO89b'); }
  get resultsList()   { return $('#resultStats'); }

  /**
   * define or overwrite page methods
   */

  open () {
      super.open('https://google.com')       //provide your additional URL if any. this will append to the baseUrl to form complete URL
      browser.pause(1000);
  }

  enterText (item) {
    this.searchInput.clearValue();
    this.searchInput.setValue(item);
    browser.pause(1000);
  }

  search () {
    this.searchButton.click();
  }
  isSearched () {
    this.resultsList.waitForDisplayed(1000);
    return this.resultsList.isDisplayed();
  }
}

export default new Homepage();