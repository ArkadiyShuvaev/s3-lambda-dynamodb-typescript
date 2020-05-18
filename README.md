# s3-lambda-dynamodb

A test project for learning AWS. The project is an extended version of an example with adding TypeScript.

## Deploy the sample application

The Serverless Application Model Command Line Interface (SAM CLI) is an extension of the AWS CLI that adds functionality for building and testing Lambda applications. It uses Docker to run your functions in an Amazon Linux environment that matches Lambda. It can also emulate your application's build environment and API.

To use the SAM CLI, you need the following tools.

* SAM CLI - [Install the SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)
* Node.js - [Install Node.js 10](https://nodejs.org/en/), including the NPM package management tool.

To build and deploy your application for the first time, run the following in your shell:

* Install all dependencies:
```bash
cd my-app
npm install
```
* Transpile to JavaScript:
```bash
cd ../my-app
tsc
```
* Validate and build:
```bash
sam validate
sam build
```
* Create s3 bucket to use is as a package repository:
```bash
aws s3 mb s3://s3-lambda-dynamodb-code --region eu-central-1
```
* Deploy to AWS:
```bash
sam deploy --stack-name s3-lambda-dynamodb --region eu-central-1 --s3-bucket s3-lambda-dynamodb-code --capabilities CAPABILITY_IAM
```

## Cleanup
To delete the sample application that you created, use the AWS CLI. Assuming you used your project name for the stack name, you can run the following:

```bash
aws cloudformation delete-stack --stack-name s3-lambda-dynamodb
```
