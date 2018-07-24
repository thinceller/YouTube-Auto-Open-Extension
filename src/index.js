import * as YouTube from 'youtube-node';

const API_KEY = process.env.API_KEY;

const youTube = new YouTube();
youTube.setKey(API_KEY);

const searchQuery = '月ノ美兎';

youTube.search(searchQuery, 10, {order: 'viewCount'}, (error, result) => {
  let count = 1;
  if (error) {
    console.log(error);
  } else {
    for (const data of result.items) {
      console.log(`
${count} : ${data.snippet.title}
URL : https://youtube.com/watch?v=${data.id.videoId}
`);
      count++;
    }
  }
});
