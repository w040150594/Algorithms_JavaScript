const fs = require('fs');
const path = require('path');

const generateMarkdown = (dir, nestedLevel = 0) => {
  let result = '';
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    // 排除.隐藏文件和node_modules目录
    if (file.startsWith('.') || file === 'node_modules') return;

    // 文件路径
    const filePath = path.join(dir, file);
    // 获取文件信息
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // 如果是首层目录，使用标题格式；否则使用列表格式
      if (nestedLevel === 0) {
        result += `## ${file}\n`;
      } else {
        result += `${'  '.repeat(nestedLevel - 1)}- [${file}](${filePath.replace(/\\/g, '/')}/)\n`;
      }
      // 递归调用生成子目录的Markdown
      result += generateMarkdown(filePath, nestedLevel + 1);
    } else if (nestedLevel > 0) {
      // 文件使用列表格式
      result += `${'  '.repeat(nestedLevel - 1)}- [${file}](${filePath.replace(/\\/g, '/')})\n`;
    }
  });

  return result;
};

let result = `# 前端常见数据结构与算法的实现以及应用 \n${generateMarkdown('.')}`;
console.log(result);