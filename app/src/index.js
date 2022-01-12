import Parser from "rss-parser";
import {MongoClient} from "mongodb";

const main = async () => {
    const mongoConnString = "mongodb://localhost";
    const client = await MongoClient.connect(mongoConnString, {useNewUrlParser: true});
    const db = client.db("blogHeadlines");
    const collection = db.collection("articles");

    const parser = new Parser();
    const feed = await parser.parseURL("https://feeds.feedburner.com/mrmoneymustache/.rss");
    console.log(feed);

    for (let {title, link, pubDate} of feed.items) {
        console.log(title, link, pubDate)
        await collection.updateOne({title}, {$set: {link, pubDate: new Date(pubDate).toISOString(), fetchedDate: new Date().toISOString()}}, {upsert: true});
    }

    await client.close();
    // const result = await axios.get("https://feeds.feedburner.com/mrmoneymustache");
    // console.log(result);
};

main().catch(e => console.error(e));