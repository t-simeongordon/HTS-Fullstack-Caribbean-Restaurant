import { App } from "aws-cdk-lib"
import Lambdatack from "./infrastructure/LambdaStack"
import DataStack from "./infrastructure/dataStack"

const app = new App()
new DataStack(app, 'DataStack')
new Lambdatack(app, 'LambdaStack')
