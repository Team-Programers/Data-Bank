const https = require('https');
const fs = require('fs');

const url = 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1MmM2ODBmYzk0ZDMwMWE2MmY3NDBmMTVhNjI4EgsSBxCTssi86hsYAZIBIwoKcHJvamVjdF9pZBIVQhM2NjYxMjM0MjEwOTk5ODY0MDEz&filename=&opi=89354086';

https.get(url, (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    console.log('Downloaded length:', data.length);
    const bodyMatch = data.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (bodyMatch) {
      console.log('Body found! Length:', bodyMatch[1].length);
      fs.writeFileSync('body_content.txt', bodyMatch[1]);
      console.log('Body written to body_content.txt');
    } else {
      console.log('No body found, writing full html to full_content.txt');
      fs.writeFileSync('full_content.txt', data);
    }
  });
}).on('error', (err) => {
  console.error('Error fetching URL:', err.message);
});
