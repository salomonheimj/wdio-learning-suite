// Practice E-Commerce Site – Automation Bro
// https://practice.automationbro.com/
describe('home', () => {
    it('open url and assert the tile', () => {
        // open browser
        browser.url('https://practice.automationbro.com/');

        // assert title
        expect(browser).toHaveTitle('Practice E-Commerce Site – Automation Bro');
    });
});