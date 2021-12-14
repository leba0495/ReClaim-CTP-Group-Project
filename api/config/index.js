const Cloud = require('@google-cloud/storage')
const path = require('path')
const serviceKey = path.join(__dirname, 'YOUR KEY FILE HERE')

const { Storage } = Cloud
const storage = new Storage({
  keyFilename: serviceKey,
  projectId: 'reclaim-335002',
})

module.exports = storage