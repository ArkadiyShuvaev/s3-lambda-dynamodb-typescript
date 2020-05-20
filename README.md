# s3-lambda-dynamodb

A test project for learning AWS. The project is an extended version of an example with adding TypeScript.

The function adds information to DynamoDb table about all files are uploaded to S3:
![Event Flow](https://github.com/ArkadiyShuvaev/s3-lambda-dynamodb-typescript/blob/master/s3-lambda-dynamodb.png)

## Deploy the sample application

1. To test the project, you need the following tools:

* SAM CLI - [Install the SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)
* Node.js - [Install Node.js 10](https://nodejs.org/en/), including the NPM package management tool.

2. To build and deploy your application for the first time, run the following in your shell:

* Install all dependencies:
```bash
cd my-app
npm install
```
* Transpile to JavaScript:
```bash
cd ../
tsc
```
* Validate and build:
```bash
sam validate
sam build
```
* Create s3 bucket to use it as a package repository:
```bash
aws s3 mb s3://s3-lambda-dynamodb-code --region eu-central-1
```
* Deploy to AWS:
```bash
sam deploy --stack-name s3-lambda-dynamodb --region eu-central-1 --s3-bucket s3-lambda-dynamodb-code --capabilities CAPABILITY_IAM
```

## Cleanup
To delete the sample application that you created, use the AWS CLI. Assuming you used your project name for the stack name, you can run the following:

* Delete all files from the "s3lambdadynamobucket" bucket first. Otherwise, AWS CloudFormation will not be able to remove the not-empty bucket
* Remove an AWS CloudFormation stack:
```bash
aws cloudformation delete-stack --stack-name s3-lambda-dynamodb
```
