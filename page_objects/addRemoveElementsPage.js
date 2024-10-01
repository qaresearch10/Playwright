import { Page } from "@playwright/test";

class Elements {  
  /**
   * @param {Page} page - Playwright page instance
   */
  constructor(page){
    this.page = page;
  }
  
  get addElementButton() {
    return this.page.locator("button[onclick='addElement()']");
  }

  get deleteElementButton() {
    return this.page.locator("button[onclick='deleteElement()']");
  }
}

class AddRemoveElementsPage {
  /**
   * @param {Page} page - Playwright page instance
   */
  constructor(page) {
    this.page = page;
    this.elements = new Elements(page);
  }

  // Methods
  async addElements(elements = 1) {
    for (let i = 0; i < elements; i++) {
      await this.elements.addElementButton.click();      
    }
  }

  async deleteAllElements() {
    //const deleteButtons = this.elements.deleteElementButton;
    while (await this.elements.deleteElementButton.count() > 0) {
      await this.elements.deleteElementButton.last().click();
    }
  }
}

export default AddRemoveElementsPage;
