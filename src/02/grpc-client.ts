import {
    Echo1Object,
    Echo2Object,
    Echo3Object,
    InnerMessage1,
    InnerMessage2,
    Direction,
} from "./proto/schema_pb";
import { EchoClient } from "./proto/schema_grpc_pb";
import grpc from "grpc";

const client = new EchoClient(
    "localhost:50051",
    grpc.credentials.createInsecure()
);

export default async function startClient() {
    //
    // 실행할 테스트 목록
    const tests = [test_echo1, test_echo2, test_echo3];

    //
    // 각각의 테스트를 실행한다.
    for (const test of tests) {
        console.group(test.name);
        await test();
        console.groupEnd();
    }
}

async function test_echo1() {
    return new Promise((resolve) => {
        //
        // 요청 객체에 데이터 삽입
        const echo1request = new Echo1Object();
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
        client.echo1(echo1request, function (err, res) {
            if (err || res === undefined) {
                //
                // 에러 발생
                console.log(`error : ${err}`);
            } else {
                //
                // 응답 출력
                console.log("raw : ", JSON.stringify(res, null, 4));
                console.log(`dobule : ${res.getD()}`);
                console.log(`float : ${res.getF()}`);
                console.log(`int32 : ${res.getI32()}`);
                console.log(`int64 : ${res.getI64()}`);
                console.log(`uint32 : ${res.getUi32()}`);
                console.log(`uint64 : ${res.getUi64()}`);
                console.log(`sint32 : ${res.getSi32()}`);
                console.log(`sint64 : ${res.getSi64()}`);
                console.log(`fixed32 : ${res.getFix32()}`);
                console.log(`fixed64 : ${res.getFix64()}`);
                console.log(`sfixed32 : ${res.getSfix32()}`);
                console.log(`sfixed64 : ${res.getSfix64()}`);
                console.log(`bool : ${res.getB()}`);
                console.log(`string : ${res.getS()}`);
                console.log(`bytes : ${res.getBytes()}`);
            }
            resolve();
        });
    });
}

async function test_echo2() {
    return new Promise((resolve) => {
        //
        // 요청 객체에 데이터 삽입
        const echo2request = new Echo2Object();
        const m1 = new InnerMessage1();
        const m2 = new InnerMessage2();
        m1.setA(1);
        m1.setB(2);
        m2.setY(4);
        echo2request.setDirection(Direction.RIGHT);
        echo2request.setM1(m1);
        echo2request.setM2(m2);

        //
        // 요청 후 콜백에서 처리
        client.echo2(echo2request, function (err, res) {
            if (err || res === undefined) {
                //
                // 에러 발생
                console.log(`error : ${err}`);
            } else {
                //
                // 응답 출력
                const m1 = res.getM1();
                const m2 = res.getM2();
                console.log("raw : ", JSON.stringify(res, null, 4));
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
                console.log(`direction : ${res.getDirection()}`);
            }
            resolve();
        });
    });
}

async function test_echo3() {
    return new Promise((resolve) => {
        //
        // 요청 객체에 데이터 삽입
        const echo3request = new Echo3Object();
        echo3request.addX(3);
        echo3request.addX(6);
        echo3request.addX(9);
        echo3request.addX(12);

        //
        // 요청 후 콜백에서 처리
        client.echo3(echo3request, function (err, res) {
            if (err || res === undefined) {
                //
                // 에러 발생
                console.log(`error : ${err}`);
            } else {
                //
                // 응답 출력
                console.log("raw : ", JSON.stringify(res, null, 4));
                console.log(`xList : ${res.getXList()}`);
            }
        });
    });
}
