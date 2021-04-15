var Minio = require('minio')

// Instantiate the minio client with the endpoint
// and access keys as shown below.
var minioClient = new Minio.Client({
  endPoint: '10.170.224.157',
  port: 9000,
  accessKey: 'A5041U3JGA4LXD7N',
  secretKey: 'PTBWH0BD6SG28QXX',
  useSSL: false // Default is true.
})

// File that needs to be uploaded.
var file = '/tmp/photos-europe.tar'

// Make a bucket called europetrip.
minioClient.makeBucket('jit-edge', 'us-east-1', function (err) {
  if (err) return console.log(err)

  console.log('Bucket created successfully in "us-east-1".')

  var metaData = {
    'Content-Type': 'application/octet-stream',
    "Access-Control-Allow-Headers": "",
    'X-Amz-Meta-Testing': 1234,
    'example': 5678
  }
  // Using fPutObject API upload your file to the bucket europetrip.
  minioClient.fPutObject('jit-edge', 'photos-europe.tar', file, metaData, function (err, etag) {
    if (err) return console.log(err)
    console.log('File uploaded successfully.')
  })
})