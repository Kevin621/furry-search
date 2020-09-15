const snekfetch = require('snekfetch');

/**
 * 
 * @param {string} url 
 * @returns {string}
 */
function search(url) {
    try {
        const { body } = await snekfetch
            .get(`https://saucenao.com/search.php?db=999&output_type=2&testmode=1&numres=16&url=${url}`)
        let simi = Number(body.results[0].header.similarity);
        if(simi < 80){
            console.log('failed to find result')
        }
        let simil = Number(body.results[0].header.similarity);
        let link = body.results[0].data.source;
        let artist = body.results[0].data.creator;
        
        return [simil, link, artist]
    } catch(err) {
        return console.log(err);
    }
};
module.exports = search;

console.log(search("https://cdn.discordapp.com/attachments/730477809675534349/754894623515607080/IMG_20200912_192433_986.jpg"))