// import axios from 'axios';
let axios = require('axios');

//爬虫
// (async function(params) {
//     let res = await axios.get('https://c.m.163.com/ug/api/wuhan/app/index/feiyan-data-list?t=' + new Date().getTime());
//     console.log(res.data);
// })()

(async function(params) {
    let res = await axios.get('https://i.snssdk.com/forum/home/v1/info/?activeWidget=1&forum_id=1663411524116487');
    console.log(res.data);
})()
