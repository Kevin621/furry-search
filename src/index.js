const fetch = require('node-fetch')

/**
 * 
 * @param {string} url 
 * @returns {array}
 */
async function search(url) {
    try {
        const { body } = await fetch
            .get(`https://saucenao.com/search.php?db=999&output_type=2&testmode=1&numres=16&url=${url}`)
        let simi = Number(body.results[0].header.similarity);
        if(simi < 80){
            console.log('failed to find result')
        }
        const simil = Number(body.results[0].header.similarity);
        const link = body.results[0].data.source;
        const artist = body.results[0].data.creator;
        return console.log(`Made by: ${artist}
Souce: ${link}`)
    } catch(err) {
        return console.log(err);
    }

};
module.exports = search;



