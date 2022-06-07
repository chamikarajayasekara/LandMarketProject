import AWS from 'aws-sdk';

AWS.config.update({
    region: 'ap-southeast-1',
    accessKeyId: "AKIASJCPLGPHZZ2NCMUV",
    secretAccessKey: "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"
});

const db = new AWS.DynamoDB.DocumentClient({ apiVersion: 'latest' });

export default db;