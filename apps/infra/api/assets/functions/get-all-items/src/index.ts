import { DynamoDBDocument } from '@aws-sdk/lib-dynamodb';
import { DynamoDB } from '@aws-sdk/client-dynamodb';
import type { APIGatewayProxyHandlerV2 } from 'aws-lambda';

const TABLE_NAME = process.env['TABLE_NAME']!;

const db = DynamoDBDocument.from(new DynamoDB());

export const handler: APIGatewayProxyHandlerV2 = async () => {
  const params = {
    TableName: TABLE_NAME,
  };

  try {
    const response = await db.scan(params);
    return { statusCode: 200, body: JSON.stringify(response.Items) };
  } catch (dbError) {
    return { statusCode: 500, body: JSON.stringify(dbError) };
  }
};
