import AWS, { DynamoDB } from "aws-sdk";

export default class S3FileInfo {


    /**
     * Creates an instance of the S3FileInfo.
     */
    constructor(private id: string, private timestamp: string) {
        AWS.config.update({region: "eu-central-1"});
    }

    save(): void {
        const ddb = new AWS.DynamoDB({apiVersion: "2012-08-10"});
        const itemInput: DynamoDB.PutItemInput = {
            TableName: "S3UploadedFiles",
            Item: {
                "id": {S: this.id},
                "s3TimeStamp": {S: this.timestamp}
            }
        };

        ddb.putItem(itemInput, (err, data) => {
            if (err) {
                console.error(err);
            } else {
                console.log(data);
            }
        });
    }
}