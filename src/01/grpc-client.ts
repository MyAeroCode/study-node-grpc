import messages from "./proto/hello_pb";
import services from "./proto/hello_grpc_pb";
import grpc from "grpc";

export default function startClient() {
    const client = new services.HelloServiceClient(
        "localhost:50051",
        grpc.credentials.createInsecure()
    );

    const request = new messages.HelloRequest();
    request.setName("World");
    client.hello(request, function (err, response) {
        if (err) {
            console.log(`error : ${err}`);
        } else {
            console.log(`Hello : ${response?.getMessage()}`);
        }
    });
}