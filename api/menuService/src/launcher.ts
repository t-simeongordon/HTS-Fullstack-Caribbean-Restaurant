import { App } from "aws-cdk-lib"
import Lambdatack from "./infrastructure/LambdaStack"
import DataStack from "./infrastructure/DataV1Stack"
const app = new App()
new DataStack(app, 'DataV1Stack')
new Lambdatack(app, 'LambdaStack')
