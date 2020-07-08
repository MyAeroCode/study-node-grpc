import { NumberData } from "./proto/schema_pb";
import { StreamTestClient } from "./proto/schema_grpc_pb";
import grpc from "grpc";

const client = new StreamTestClient(
    "localhost:50051",
    grpc.credentials.createInsecure()
);

export default async function startClient() {
    const target = [
        callUnaryRPC,
        callClientStreamRPC,
        callServerStreamRPC,
        callBidirectionalStreamRPC,
    ];
    for (const call of target) {
        console.group(call.name);
        await call();
        console.groupEnd();
        console.log();
    }
}

//
// 단항 -> 단항
async function callUnaryRPC() {
    return new Promise((resolve) => {
        //
        // 요청 객체 생성
        const n = 123;
        const numData = new NumberData();
        numData.setN(n);
        console.log(`request : ${n}`);

        //
        // 요청 시도
        client.echo(numData, function (err, response) {
            if (err) {
                console.error(err);
            } else {
                console.log(`response : ${response?.getN()}`);
            }
            resolve();
        });
    });
}

//
// 스트림 -> 단항
async function callClientStreamRPC() {
    return new Promise((resolve) => {
        //
        // 쓰기 스트림 생성
        const stream = client.sum(function (err, response) {
            if (err) {
                console.error(err);
            } else {
                console.log("response : ", response?.getN());
                resolve();
            }
        });

        //
        // 스트림에 데이터를 전송
        for (let i = 1; i <= 10; i++) {
            const numData = new NumberData();
            numData.setN(i);
            console.log(`write : ${i}`);
            stream.write(numData);
        }

        //
        // 스트림 닫기
        stream.end();
    });
}

//
// 단항 -> 스트림
async function callServerStreamRPC() {
    return new Promise((resolve) => {
        //
        // 요청 객체 생성
        const n = 2;
        const numData = new NumberData();
        numData.setN(n);
        console.log(`request : ${n}`);

        //
        // 읽기 스트림 생성
        const readStream = client.mul(numData);

        //
        // 서버가 데이터를 보낸 경우 실행할 콜백
        readStream.on("data", function (chunk: NumberData) {
            console.log(`read : ${chunk.getN()}`);
        });

        //
        // 서버가 스트림을 닫을 경우 실행할 콜백
        readStream.on("end", function () {
            console.log("stream is closed");
            resolve();
        });
    });
}

//
// 스트림 <-> 스트림
async function callBidirectionalStreamRPC() {
    return new Promise((resolve) => {
        //
        // 양방향 스트림 생성
        const stream = client.map();

        //
        // 서버가 데이터를 보낸 경우 실행할 콜백
        stream.on("data", function (chunk: NumberData) {
            console.log(`read : ${chunk.getN()}`);
        });

        //
        // 클라이언트 또는 서버가 스트림을 닫을 경우 실행할 콜백
        stream.on("end", function () {
            console.log("stream is closed");

            //
            // 서버 측에서 스트림을 끊었다면,
            // 클라이언트는 여기서 스트림을 종료해야 한다.
            stream.end();
            resolve();
        });

        //
        // 서버에게 데이터를 전송한다
        for (let i = 1; i <= 10; i++) {
            console.log(`write ${i}`);
            const numberData = new NumberData();
            numberData.setN(i);
            stream.write(numberData);
        }

        //
        // 클라이언트 측에서 스트림을 닫는다.
        stream.end();
    });
}
