const { v4: uuidv4 } = require('uuid');

const params = fileName => {
  const myFile = fileName.originalname.split('.');
  const fileType = myFile[myFile.length - 1];
  const imageParams = {
    Bucket: 'user-images-38cfa409-826c-4245-8a0c-02e30fc02b56',
    Key: `${uuidv4()}.${fileType}`,
    Body: fileName.buffer
  };
  return imageParams;
};

module.exports = params;
