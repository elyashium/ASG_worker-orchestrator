//How do you connect to an auto scaling group
//they have libraries, sdk for these
// @aws-sdk/client-auto-scaling

import { AutoScaling, AutoScalingClient } from "@aws-sdk/client-auto-scaling";


const client = new AutoScalingClient({region: "REGION", credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY!,
    secretAccessKey : process.env.AWS_ACCESS_SECRET!
}});