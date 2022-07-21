const glob = require('glob')
const fs = require('fs')

async function getFiles() {
    const data = await new Promise((resolve) => {
      glob(
        `content/**/*.md`,
        function (er, files) {
          resolve(files);
        }
      );
    });
    return data;
}

getFiles().then(data => {
    data.forEach(ele => {
        const content = fs.readFileSync(ele, {encoding: 'utf8'}) 
        const reg = /^(#+)(.*)/
        const title = content.match(reg)?.[2];
        let contents = content.replace(reg, '');
        const str = `---\ntitle: ${title}\ndate: 2022-07-21\ndescription: ${title}\n---\n\r`
        if (title) {
          fs.writeFileSync(ele, str+contents, {encoding: 'utf8'})
        }
    })
})