import { EchoObject, MyNestedBox, MyUnionBox } from "./proto/schema_pb";
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
    {
        //
        // Uint32Box
        const uint32box = new MyNestedBox.NumbericBox.UInt64Box();
        uint32box.setVal(5);
        echoRequest.setUint32box(uint32box);
    }
    {
        //
        // MyUnionBox (Oneof)
        const unionBox = new MyUnionBox();
        unionBox.setOneofUint32(55);
        unionBox.setOneofString("Hello, World!"); // 기존에 설정했던 uint32는 사라짐.
        echoRequest.setUnionbox(unionBox);
    }

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
    {
        //
        // UInt32Box
        console.group(`UInt32Box`);
        const uint32box = obj.getUint32box();
        console.log(uint32box?.getVal());
        console.groupEnd();
    }
    {
        //
        // UnionBox. (Oneof)
        console.group(`Oneof`);
        const unionBox = obj.getUnionbox();

        //
        // Uint32가 저장된 경우.
        let val;
        if (unionBox!.hasOneofUint32()) {
            val = unionBox!.getOneofUint32();
        }
        //
        // String이 저장된 경우.
        else if (unionBox!.hasOneofString()) {
            val = unionBox!.getOneofString();
        }
        //
        // 둘 다 저장되지 않은 경우.
        else {
            val = undefined;
        }

        console.log(`val : ${val}`);
    }
    console.groupEnd();
}
