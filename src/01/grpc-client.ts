import { HelloRequest } from "./proto/schema_pb";
import { HelloClient } from "./proto/schema_grpc_pb";
import grpc from "grpc";

export default function startClient() {
    //
    // 커넥션을 생성한다.
    // 해당 예제에서 보안은 설정하지 않는다.
    const client = new HelloClient(
        "localhost:50051",
        grpc.credentials.createInsecure()
    );

    //
    // 요청 객체를 생성하고, 데이터를 삽입한다.
    const request = new HelloRequest();
    request.setName("World");

    //
    // 요청을 보내고, 응답은 콜백에서 처리한다.
    client.hello(request, function (err, response) {
        //
        // 첫 번째 인자는 에러.
        // 두 번째 인자는 응답.
        if (err) {
            console.log(`error : ${err}`);
        } else {
            console.log(`hello : ${response?.getMessage()}`);
        }
    });
}
