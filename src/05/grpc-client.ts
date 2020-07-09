import { EchoObject } from "./proto/schema_pb";
import { EchoClient } from "./proto/schema_grpc_pb";
import grpc from "grpc";

export default async function startClient() {
    const client = new EchoClient(
        "localhost:50051",
        grpc.credentials.createInsecure()
    );

    //
    // 요청 객체에 데이터 삽입
    const echoRequest = new EchoObject();
    echoRequest.setF("hello");
    echoRequest.setG("world"); // deprecated 되었지만 여전히 사용할 수 있음.

    //
    // 요청 후 콜백에서 처리
    client.echo(echoRequest, function (err, res) {
        if (err || res === undefined) {
            console.log(`error : ${err}`);
        } else {
            console.group(`echoobject`);
            console.log("raw : ", JSON.stringify(res, null, 4));
            console.log(`f : ${res.getF()}`);
            console.log(`g : ${res.getG()}`); // deprecated 되었지만 여전히 사용할 수 있음.
            console.groupEnd();
        }
    });
}
