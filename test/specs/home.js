import home_page from '../pages/home_page';
import HomePage from '../pages/home_page';

describe('home', () => {
    it('open url and assert the tile', async () => {
        // open browser
        // await browser.url('https://practice.automationbro.com/');
        await HomePage.open();

        // assert title
        await expect(browser).toHaveTitle('Practice E-Commerce Site – Automation Bro');
    });
    it('open about page and assert the url', async () => {
        // open about page
        await browser.url('https://practice.automationbro.com/about/');

        // assert URL
        await expect(browser).toHaveUrl('https://practice.automationbro.com/about/');
    });
    it('click get started button and assert url contains get started text', async () => {
        // open home page
        await HomePage.open();

        // click get started button
        // await $('#get-started').click();
        await HomePage.btnGetStarted.click();

        // assert url contains get started text
        await expect(browser).toHaveUrlContaining('get-started');
    });
    it('click logo and assert url doesnt contain get start text', async () => {
        // open about page
        await browser.url('https://practice.automationbro.com/about/');

        // click logo
        await HomePage.imageLogo.click();

        // assert url doesn't contain get started text
        await expect(browser).not.toHaveUrlContaining('get-started');
    });
    it('find heading element and assert text', async () => {
        // open home page
        await HomePage.open();

        // find heading element
        const headingElement = await HomePage.txtHeading;

        // get text
        // const headingText = await headingElement.getText();

        // assert the text after getting it - uses jest
        // await expect(headingText).toEqual('Think different. Make different.');

        // assert the text directly from heading element - uses wdio assesrtions
        await expect(headingElement).toHaveText('Think different. Make different.');
    });

});