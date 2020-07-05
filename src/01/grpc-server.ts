import messages from "./proto/hello_pb";
import services from "./proto/hello_grpc_pb";
import grpc from "grpc";

export default function startServer() {
    const server = new grpc.Server();
    server.addService(services.HelloServiceService, {
        hello: function (call: any, callback: any) {
            const response = new messages.HelloResponse();
            const name = call.request.getName();
            const message = `Hello, ${name}!`;
            console.log(message);
            response.setMessage(message);
            callback(null, response);
        },
    });
    server.bind("localhost:50051", grpc.ServerCredentials.createInsecure());
    console.log("started!");
    server.start();
}
