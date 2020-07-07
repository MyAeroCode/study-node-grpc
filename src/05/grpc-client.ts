import { EchoObject } from "./proto/schema_pb";
import services from "./proto/schema_grpc_pb";
import grpc from "grpc";

export default async function startClient() {
    const client = new services.EchoClient(
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
    client.echo(echoRequest, function (err, response) {
        if (err || response === undefined) {
            console.log(`error : ${err}`);
        } else {
            printEcho1Object(response);
        }
    });
}

//
// 서버에서 보낸 응답 객체의 값을 콘솔에 출력.
function printEcho1Object(obj: EchoObject) {
    console.group(`echoobject`);
    console.log("raw : ", JSON.stringify(obj, null, 4));
    console.log(`f : ${obj.getF()}`);
    console.log(`g : ${obj.getG()}`); // deprecated 되었지만 여전히 사용할 수 있음.
    console.groupEnd();
}
