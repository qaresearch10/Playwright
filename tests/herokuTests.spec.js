import { test, expect } from "@playwright/test";
import HerokuHomePage from "../page_objects/herokuHomePage";
import AddRemoveElementsPage from "../page_objects/addRemoveElementsPage";

test.describe("Heroku App Tests", async () => {  
  test.beforeAll(async () => {
    
  });  

  test.afterAll(async () => {
    
  });

  test("Add/Remove Elements Test", async ({page}) => {    
    const herokuHomePage = new HerokuHomePage(page);
    const addRemoveElementsPage = new AddRemoveElementsPage(page);

    await herokuHomePage.visitHomePage();
    await herokuHomePage.navigateToExamples(herokuHomePage.elements.addRemoveElements);
    
    await addRemoveElementsPage.addElements(4);
    await expect(addRemoveElementsPage.elements.deleteElementButton.nth(0)).toBeVisible();
    await expect(addRemoveElementsPage.elements.deleteElementButton).toHaveCount(4);

    await addRemoveElementsPage.deleteAllElements();
    await expect(addRemoveElementsPage.elements.deleteElementButton).not.toBeVisible();
  });

  test.skip("Add/Remove Elements Test2", async ({page}) => {    
    const herokuHomePage = new HerokuHomePage(page);
    await herokuHomePage.visitHomePage();
    await expect(page).toHaveURL("https://the-internet.herokuapp.com");
  });
});