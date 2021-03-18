const fs = require('fs-extra');
const path = require('path');

const directoryPath = path.join(__dirname, 'src/assets/i18n');
const targetFilePath = 'src/app/supported-language.ts'

fs.readdir(directoryPath, function (err, files) {
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }

  var enumLangsStart = 'export enum SupportedLanguage {';
  const enumLangsEnd = '}'

  files.forEach(function (file) {
    // Do whatever you want to do with the file
    let basename = path.basename(file, '.json');
    enumLangsStart += basename.concat(',');
  });

  try {
    fs.unlinkSync(targetFilePath)
    //file removed
  } catch (err) {
    console.error(err)
  }

  fs.writeFile(targetFilePath, enumLangsStart.concat(enumLangsEnd), function (err) {
    if (err) {
      return console.error(err);
    }
  });
});
