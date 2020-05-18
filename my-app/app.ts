//import S3 from "aws-sdk/clients/s3";
// import * as AwsLambda from "aws-lambda";
import { Context, S3Event, } from "aws-lambda";

export function s3Handler(event: S3Event, context: Context): void {
    console.log(event);
    console.log(context);
}
