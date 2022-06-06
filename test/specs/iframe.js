describe('IFrame', async () => {
    it('assert title inside iframe and header outside it', async () => {
        // Open URL
        await browser.url('/iframe-sample/');

        // Access IFrame
        const iframe = await $('#advanced_iframe');

        // Switch to frame
        await browser.switchToFrame(iframe);

        // Asser title
        await expect($('#site-logo')).toExist();

        // Swtich to parent frame
        await browser.switchToParentFrame();

        // Verify page header
        await expect($('h1.tg-page-header__title')).toHaveText('IFrame Sample');
    })
})