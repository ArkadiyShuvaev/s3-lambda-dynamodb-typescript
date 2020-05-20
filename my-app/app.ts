// import {Handler} from 'aws-lambda';
// import * as AwsLambda from "aws-lambda";
import { Context, S3Event, Callback } from "aws-lambda";
import S3FileInfo from "./s3FileInfo";

export function s3Handler(event: S3Event, context: Context, callback: Callback): void {
    const s3ObjKey = event.Records[0].s3.object.key;
    const s3ObjTime = event.Records[0].eventTime;
    console.log(event);
    console.log(context);

    const s3FileInfo = new S3FileInfo(s3ObjKey, s3ObjTime);
    s3FileInfo.save();

    callback();
}
