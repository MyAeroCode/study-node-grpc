import services from "./proto/schema_grpc_pb";
import grpc from "grpc";

export default function startServer() {
    const server = new grpc.Server();

    function callback(call: any, callback: any) {
        const request = call.request;
        callback(null, request);
    }

    server.addService(services.EchoService, {
        echo1: callback,
        echo2: callback,
        echo3: callback,
    });

    server.bind("localhost:50051", grpc.ServerCredentials.createInsecure());
    console.log("started!");
    server.start();
}
