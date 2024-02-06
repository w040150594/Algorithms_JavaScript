const fs = require('fs');
const path = require('path');

const generateMarkdown = (dir, nestedLevel = 0) => {
  let result = '';
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    // 排除.隐藏文件
    if (file.startsWith('.')) return;

    // 文件路径
    const filePath = path.join(dir, file);
    // 获取文件信息
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      result += `${'  '.repeat(nestedLevel)}- [${file}](${filePath.replace(/\\/g, '/')}/)\n`;
      result += generateMarkdown(filePath, nestedLevel + 1);
    } else if (nestedLevel > 0) {
      result += `${'  '.repeat(nestedLevel)}- [${file}](${filePath.replace(/\\/g, '/')})\n`;
    }
  });

  return result;
};

const directoryLinks = generateMarkdown('.');