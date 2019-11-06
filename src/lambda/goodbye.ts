import { Handler, Context, APIGatewayEvent } from 'aws-lambda';

const handler: Handler = async (event: APIGatewayEvent, context:Context) => {
  return {
    statusCode: 200,
    body: "Goodbye, World"
  }
}

export {handler}