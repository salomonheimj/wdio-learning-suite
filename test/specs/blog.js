describe('on the blog section of the page', async () => {
    it('get all recent post, assert the text of each is greater than 10 characters and that there are 5 total rows', async () => {
        await browser.url('blog/');

        // get all recent posts
        const recentPostsList = await $$('#recent-posts-3 ul li');

        // loop trough all recent post and assert they are greater than 10 characters long
        for (const post of recentPostsList){
            const postText = await post.getText();
            await expect(postText.length).toBeGreaterThan(10);
        }

        // assert there are 4 recent posts
        await expect(recentPostsList).toHaveLength(5);
    });
});