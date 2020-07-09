import { HelloRequest, HelloResponse } from "./proto/schema_pb";
import { HelloService } from "./proto/schema_grpc_pb";
import grpc, { ServerUnaryCall } from "grpc";

export default function startServer() {
    const server = new grpc.Server();

    //
    // HelloService에 hello함수를 추가한다.
    server.addService(HelloService, {
        hello: async function (
            call: ServerUnaryCall<HelloRequest>,
            callback: (err: any, res?: HelloResponse) => void
        ) {
            //
            // 응답 객체를 생성하고, 데이터를 넣는다.
            const response = new HelloResponse();
            const name = call.request.getName();
            const message = `Hello, ${name}!`;
            response.setMessage(message);

            //
            // 로깅.
            console.log(message);

            //
            // 에러는 첫 번째 인자에 넘긴다.
            // 응답은 두 번째 인자에 넘긴다.
            callback(null, response);
        },
    });

    //
    // 서버를 특정 포트에 바인딩한다.
    // 해당 예제에서 보안은 설정하지 않는다.
    server.bind("localhost:50051", grpc.ServerCredentials.createInsecure());
    console.log("chapter 01 started!");
    server.start();
}
