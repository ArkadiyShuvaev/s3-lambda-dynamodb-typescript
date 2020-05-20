import AWS, { DynamoDB } from "aws-sdk";

export default class S3FileInfo {

    private _customEpoch = 1500000000000; // artificial epoch

    /**
     * Creates an instance of the S3FileInfo.
     */
    constructor(private id: string, private timestamp: string) {
        AWS.config.update({region: "eu-central-1"});
    }

    save(): void {
        const ddb = new AWS.DynamoDB({apiVersion: "2012-08-10"});

        var newPrimaryKey = `${this.id}:${this.generateRowId()}`;
        const itemInput: DynamoDB.PutItemInput = {
            TableName: "S3UploadedFiles",
            Item: {
                "id": {S: newPrimaryKey},
                "s3TimeStamp": {S: this.timestamp}
            }
        };

        ddb.putItem(itemInput, (err, data) => {
            if (err) {
                console.error(err);
            }
        });
    }

    private generateRowId() {
        var ts = new Date().getTime() - this._customEpoch;
    }
}