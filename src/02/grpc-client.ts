import messages, {
    Echo1Object,
    Echo2Object,
    Echo3Object,
} from "./proto/schema_pb";
import services from "./proto/schema_grpc_pb";
import grpc from "grpc";

export default async function startClient() {
    const client = new services.EchoClient(
        "localhost:50051",
        grpc.credentials.createInsecure()
    );

    //
    // 요청 객체에 데이터 삽입
    const echo1request = new messages.Echo1Object();
    echo1request.setD(1); // 64비트 부동소수점
    echo1request.setF(2); // 32비트 부동소수점
    echo1request.setI32(+3); // 공용 가변크기 32비트 정수
    echo1request.setI64(-4); // 공용 가변크기 64비트 정수
    echo1request.setUi32(5); // 부호없는 가변크기 32비트 정수
    echo1request.setUi64(6); // 부호없는 가변크기 64비트 정수
    echo1request.setSi32(+7); // 부호있는 가변크기 32비트 정수
    echo1request.setSi64(-8); // 부호있는 가변크기 64비트 정수
    echo1request.setFix32(9); // 부호없는 고정크기 32비트 정수
    echo1request.setFix64(10); // 부호없는 고정크기 64비트 정수
    echo1request.setSfix32(+11); // 부호있는 고정크기 32비트 정수
    echo1request.setSfix64(-12); // 부호있는 고정크기 64비트 정수
    echo1request.setB(true); // 불리언
    echo1request.setS("Hello, World!"); // 문자열
    echo1request.setBytes(Buffer.from([1, 2, 3, 4, 5])); // 바이트 버퍼

    //
    // 요청 후 콜백에서 처리
    client.echo1(echo1request, function (err, response) {
        if (err || response === undefined) {
            console.log(`error : ${err}`);
        } else {
            printEcho1Object(response);
        }
    });

    //
    // 요청 객체에 데이터 삽입
    const echo2request = new messages.Echo2Object();
    const m1 = new messages.InnerMessage1();
    const m2 = new messages.InnerMessage2();
    m1.setA(1);
    m1.setB(2);
    m2.setY(4);
    echo2request.setDirection(messages.Direction.RIGHT);
    echo2request.setM1(m1);
    echo2request.setM2(m2);

    //
    // 3초간 일시정지.
    await new Promise((resolve) => setTimeout(resolve, 3000));

    //
    // 요청 후 콜백에서 처리
    client.echo2(echo2request, function (err, response) {
        if (err || response === undefined) {
            console.log(`error : ${err}`);
        } else {
            printEcho2Object(response);
        }
    });

    //
    // 3초간 일시정지.
    await new Promise((resolve) => setTimeout(resolve, 3000));

    //
    // 요청 객체에 데이터 삽입
    const echo3request = new messages.Echo3Object();
    echo3request.addX(3);
    echo3request.addX(6);
    echo3request.addX(9);
    echo3request.addX(12);

    //
    // 요청 후 콜백에서 처리
    client.echo3(echo3request, function (err, response) {
        if (err || response === undefined) {
            console.log(`error : ${err}`);
        } else {
            printEcho3Object(response);
        }
    });
}

//
// 서버에서 보낸 응답 객체의 값을 콘솔에 출력.
function printEcho1Object(obj: Echo1Object) {
    console.group(`echo1object`);
    console.log("raw : ", JSON.stringify(obj, null, 4));
    console.log(`dobule : ${obj.getD()}`);
    console.log(`float : ${obj.getF()}`);
    console.log(`int32 : ${obj.getI32()}`);
    console.log(`int64 : ${obj.getI64()}`);
    console.log(`uint32 : ${obj.getUi32()}`);
    console.log(`uint64 : ${obj.getUi64()}`);
    console.log(`sint32 : ${obj.getSi32()}`);
    console.log(`sint64 : ${obj.getSi64()}`);
    console.log(`fixed32 : ${obj.getFix32()}`);
    console.log(`fixed64 : ${obj.getFix64()}`);
    console.log(`sfixed32 : ${obj.getSfix32()}`);
    console.log(`sfixed64 : ${obj.getSfix64()}`);
    console.log(`bool : ${obj.getB()}`);
    console.log(`string : ${obj.getS()}`);
    console.log(`bytes : ${obj.getBytes()}`);
    console.groupEnd();
}

//
// 서버에서 보낸 응답 객체의 값을 콘솔에 출력.
function printEcho2Object(obj: Echo2Object) {
    const m1 = obj.getM1();
    const m2 = obj.getM2();

    console.group(`echo2object`);
    console.log("raw : ", JSON.stringify(obj, null, 4));
    console.group("m1");
    console.log("raw : ", JSON.stringify(m1, null, 4));
    console.log(`a : ${m1?.getA()}`);
    console.log(`b : ${m1?.getB()}`);
    console.groupEnd();
    console.group("m1");
    console.log("raw : ", JSON.stringify(m2, null, 4));
    console.log(`a : ${m2?.getX()}`);
    console.log(`b : ${m2?.getY()}`);
    console.groupEnd();
    console.log(`direction : ${obj.getDirection()}`);
    console.groupEnd();
}

//
// 서버에서 보낸 응답 객체의 값을 콘솔에 출력.
function printEcho3Object(obj: Echo3Object) {
    console.group(`echo3object`);
    console.log("raw : ", JSON.stringify(obj, null, 4));
    console.log(`xList : ${obj.getXList()}`);
    console.groupEnd();
}
