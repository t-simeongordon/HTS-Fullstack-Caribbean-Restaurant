import { Stack, StackProps } from 'aws-cdk-lib'
import { Construct } from 'constructs'
import { Function as LambdaFunction, Runtime, Code } from 'aws-cdk-lib/aws-lambda'
import { join } from 'path'

export default class Lambdatack extends Stack {
    constructor(scope: Construct, id: string, props?:StackProps){
        super(scope, id, props)

        new LambdaFunction(this, 'MenuLambda', {
            runtime: Runtime.NODEJS_20_X,
            handler: "menu.main",
            code: Code.fromAsset(join(__dirname, '..', 'services'))
        }) 
    }
}