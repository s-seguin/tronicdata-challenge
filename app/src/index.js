import Parser from "rss-parser";
import {MongoClient} from "mongodb";

const main = async () => {
    const mongoConnString = "mongodb://localhost";
    const client = await MongoClient.connect(mongoConnString, {useNewUrlParser: true});
    const db = client.db("blogHeadlines");
    const collection = db.collection("articles");

    // const source = "https://hnrss.org/frontpage";
    const source = "https://feeds.feedburner.com/mrmoneymustache/.rss";
    const limit = 3;
    const parser = new Parser();
    // const feed = await parser.parseURL("https://feeds.feedburner.com/mrmoneymustache/.rss");
    const feed = await parser.parseURL(source);

    for (let i = 0; i < feed.items.length && i < limit; i++) {
        const {title, link, pubDate} = feed.items[i];
        console.log(title, link, pubDate)
        await collection.updateOne({title}, {$set: {source, link, pubDate: new Date(pubDate).toISOString(), fetchedDate: new Date().toISOString()}}, {upsert: true});
    }

    await client.close();
};

main().catch(e => console.error(e));