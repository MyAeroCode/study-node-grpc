import { EchoObject } from "./proto/schema_pb";
import { Any } from "google-protobuf/google/protobuf/any_pb";
import { Timestamp } from "google-protobuf/google/protobuf/timestamp_pb";
import { Duration } from "google-protobuf/google/protobuf/duration_pb";
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
        // Map
        const dictionary = echoRequest.getDictionaryMap();
        dictionary.set("hello", 1);
        dictionary.set("world", 2);
    }
    {
        //
        // Any
        const any = new Any();
        any.setValue(Buffer.from("Hello, World!"));
        echoRequest.setAny(any);
    }
    {
        //
        // Timestamp
        const timestamp = new Timestamp();
        timestamp.setSeconds(1);
        timestamp.setNanos(500);
        echoRequest.setTimestamp(timestamp);
    }
    {
        //
        // Duration
        const duration = new Duration();
        duration.setSeconds(1);
        duration.setNanos(500);
        echoRequest.setDuration(duration);
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
        // Dictionary.
        console.group(`dictionary`);
        const dictionary = obj.getDictionaryMap();
        dictionary.getEntryList().forEach((entry) => {
            const [key, val] = entry;
            console.log(`${key} -> ${val}`);
        });
        console.groupEnd();
    }
    {
        //
        // Any.
        console.group(`any`);
        const any = obj.getAny();
        // any.getValue_asB64(); // get as base64.
        // any.getValue_asU8(); // get as UInt8[];
        console.log(Buffer.from(any!!.getValue_asU8()).toString());
        console.groupEnd();
    }
    {
        //
        // Timestamp.
        console.group(`timestamp`);
        const timestamp = obj.getTimestamp();
        console.log(`sec : `, timestamp?.getSeconds());
        console.log(`nano : `, timestamp?.getNanos());
        console.groupEnd();
    }
    {
        //
        // Duration.
        console.group(`duration`);
        const duration = obj.getDuration();
        console.log(`sec : `, duration?.getSeconds());
        console.log(`nano : `, duration?.getNanos());
        console.groupEnd();
    }
    console.groupEnd();
}
