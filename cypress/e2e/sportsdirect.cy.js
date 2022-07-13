// 1. Create a new repository in your git (add readme file, add git ignore file based on node) 
//    -> tdl_summer_school_web_aut_sportsdirect
// 2. Clone it to your local machine, create new cypress project in it 
//    (npm init, npm install cypress --save-dev)
// 3. Automate the following scenario based on https://lv.sportsdirect.com/
//   - Open Sportsdirect page
//   - Click on Brands menu option
//   - Click on Addidas logo
//   - Select Trainers option (in middle of page)
//   - Check the following checkboxes:
//     - Mens
//     - Trainers
//     - Court Trainers
//     - Leather
//     - Black
//   - Validate that 2 product boxes are visible
//   - Open box that contains "SE Trainers"
//   - Validate product title "Grand Court SE Trainers Mens"
// 4. Push the changes you made to that git repository.
// 5. Send me link to your repo in discord dm. 

import TaskPage from "../pageObjects/TaskPage.js";

describe("Sports Direct", () => {
  
  it("Sports Direct scenario", () => {
    TaskPage.visit();
    TaskPage.brands.click();
    TaskPage.adidas.click();
    TaskPage.trainers.click();
    TaskPage.selectMens.click({force: true});
    TaskPage.selectTrainers.click({force: true});
    TaskPage.selectCourtTrainers.click({force: true});
    TaskPage.selectLeather.click({force: true});
    TaskPage.selectBlack.click({force: true});
    TaskPage.boxVali.find('li').should('have.length', 2); // Whether 2 boxes are visible
    TaskPage.boxOpen.click();
    TaskPage.productName.should('have.text','Grand Court SE Trainers Mens');
  });
});