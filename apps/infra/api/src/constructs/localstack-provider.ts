import {
  AwsProvider as TerraformAwsProvider,
  type AwsProviderConfig,
  type AwsProviderEndpoints,
} from '@cdktf/provider-aws/lib/provider';
import { type Construct } from 'constructs';

export class LocalStackProvider extends TerraformAwsProvider {
  constructor(scope: Construct, id: string, config: AwsProviderConfig = {}) {
    super(scope, id, {
      ...config,
      endpoints: LOCALSTACK_ENDPOINTS,
      s3UsePathStyle: true,
      skipCredentialsValidation: true,
      skipRequestingAccountId: true,
      skipMetadataApiCheck: 'true',
      accessKey: 'test',
      secretKey: 'test',
    });
  }
}

const LOCALSTACK_ENDPOINTS: AwsProviderEndpoints[] = [
  {
    acm: 'http://localhost:4566',
    apigateway: 'http://localhost:4566',
    apigatewayv2: 'http://localhost:4566',
    cloudformation: 'http://localhost:4566',
    cloudwatch: 'http://localhost:4566',
    dynamodb: 'http://localhost:4566',
    ec2: 'http://localhost:4566',
    es: 'http://localhost:4566',
    elasticache: 'http://localhost:4566',
    firehose: 'http://localhost:4566',
    iam: 'http://localhost:4566',
    kinesis: 'http://localhost:4566',
    lambda: 'http://localhost:4566',
    logs: 'http://localhost:4566',
    rds: 'http://localhost:4566',
    redshift: 'http://localhost:4566',
    route53: 'http://localhost:4566',
    s3: 'http://s3.localhost.localstack.cloud:4566',
    secretsmanager: 'http://localhost:4566',
    ses: 'http://localhost:4566',
    sns: 'http://localhost:4566',
    sqs: 'http://localhost:4566',
    ssm: 'http://localhost:4566',
    stepfunctions: 'http://localhost:4566',
    sts: 'http://localhost:4566',
  },
];
