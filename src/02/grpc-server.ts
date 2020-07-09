import { Echo1Object, Echo2Object, Echo3Object } from "./proto/schema_pb";
import { EchoService } from "./proto/schema_grpc_pb";
import grpc, { ServerUnaryCall } from "grpc";

export default function startServer() {
    const server = new grpc.Server();

    server.addService(EchoService, {
        echo1: async function echo(
            call: ServerUnaryCall<Echo1Object>,
            callback: (err: any, res?: Echo1Object) => void
        ) {
            const request = call.request;
            callback(null, request);
        },

        echo2: async function echo(
            call: ServerUnaryCall<Echo2Object>,
            callback: (err: any, res?: Echo2Object) => void
        ) {
            const request = call.request;
            callback(null, request);
        },

        echo3: async function echo(
            call: ServerUnaryCall<Echo3Object>,
            callback: (err: any, res?: Echo3Object) => void
        ) {
            const request = call.request;
            callback(null, request);
        },
    });

    server.bind("localhost:50051", grpc.ServerCredentials.createInsecure());
    console.log("chapter 02 started!");
    server.start();
}
