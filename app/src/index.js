import axios from "axios";

const main = async () => {
    const result = await axios.get("https://feeds.feedburner.com/mrmoneymustache");
    console.log(result);
};

main().catch(e => console.error(e));