import { EchoObject } from "./proto/schema_pb";
import { EchoService } from "./proto/schema_grpc_pb";
import grpc, { ServerUnaryCall } from "grpc";

export default function startServer() {
    const server = new grpc.Server();

    server.addService(EchoService, {
        echo: async function (
            call: ServerUnaryCall<EchoObject>,
            callback: (err: any, res?: EchoObject) => void
        ) {
            const request = call.request;
            callback(null, request);
        },
    });

    server.bind("localhost:50051", grpc.ServerCredentials.createInsecure());
    console.log("chapter 05 started!");
    server.start();
}
