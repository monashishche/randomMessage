const NineGag = require('9gag');
const Scraper = NineGag.Scraper;
const Downloader = NineGag.Downloader;

async function memes() {
    try {
        // number of posts, section and number of comments
        // can pass a custom http client as the last Scraper argument
        const scraper = new Scraper(10, 'hot', 3);
        const posts = await scraper.scrap();
        posts.forEach(p => console.log(`${p.title} -> ${p.content} -> ${p.comments.map(c => c.content)[0]}`));
        await new Downloader('output').downloadPosts(posts);
    }
    catch (err) {
        console.error(err);
    }
}

memes();