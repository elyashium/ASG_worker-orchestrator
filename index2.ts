//How do you connect to an auto scaling group
//they have libraries, sdk for these
// @aws-sdk/client-auto-scaling

//we can also use http endpoints here instead of the SDK

import {AutoScalingClient, SetDesiredCapacityCommand } from "@aws-sdk/client-auto-scaling";


const client = new AutoScalingClient({region: "REGION", credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY!,
    secretAccessKey : process.env.AWS_ACCESS_SECRET!
}});

const command = new SetDesiredCapacityCommand({
    AutoScalingGroupName: "name of the autoscling group in AWS",
    DesiredCapacity: 3
});

const data = await client.send(command);
console.log(data);