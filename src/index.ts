
/**
 * 
 * @param {string} url 
 */
async function search(url) {
    const fetch = require('node-fetch');
    new fetch
        (`https://saucenao.com/search.php?db=999&output_type=2&testmode=1&numres=16&url=${url}`)
    .then(res => res.json())
    .then(json => {
        
        const source = json.results[0].data.source;
        const artist = json.results[0].data.creator;
        const ext_urls = json.results[0].data.ext_urls;

        return console.log(`Source: ${source}
Artist: ${artist}
ext_urls: ${ext_urls}`)
    })

}
module.exports = search; 



