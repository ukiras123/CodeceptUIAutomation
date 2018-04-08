
Feature('GoogleSearch');

Scenario('Search Nepal', (I) => {
    I.amOnPage('/');
    I.fillField('q','Nepal Kathmandu');
    I.click('btnK');
});
