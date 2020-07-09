import { EchoObject } from "./proto/schema_pb";
import services from "./proto/schema_grpc_pb";
import grpc from "grpc";

const client = new services.EchoClient(
    "localhost:50051",
    grpc.credentials.createInsecure()
);

const echoRequest = new EchoObject();
echoRequest.setMessage("Hello, World!");

export default async function startClient() {
    //
    // 테스트할 함수 목록.
    const target = [
        // test_echo_nocallback_without_timeout,
        test_echo_nocallback_with_timeout,
        test_echo_nocallback_with_cancle,
        test_echo_callback_with_error,
        test_echo_exception,
    ];

    for (const test of target) {
        console.group(test.name);
        await test();
        console.groupEnd();
        console.log();
    }
}

async function test_echo_nocallback_without_timeout() {
    return new Promise((resolve) => {
        //
        // 데드라인을 설정하지 않고 콜백을 사용하지 않는 함수를 호출.
        const req = client.echo_nocallback(echoRequest, function (
            err,
            response
        ) {
            console.group("nocallback without timeout");
            console.log(`err : ${err}`);
            console.log(`res : ${response}`);
            console.groupEnd();
            resolve();
        });
    });
}

async function test_echo_nocallback_with_timeout() {
    return new Promise((resolve) => {
        //
        // 타임아웃이 발생할 시각.
        const deadline = new Date(Date.now() + 5000);

        //
        // 타임아웃과 함께 콜백을 사용하지 않는 함수를 호출.
        const req = client.echo_nocallback(echoRequest, { deadline }, function (
            err,
            response
        ) {
            console.group("nocallback with timeout");
            console.log(`err : ${err}`);
            console.log(`res : ${response}`);
            console.groupEnd();
            resolve();
        });
    });
}

async function test_echo_nocallback_with_cancle() {
    return new Promise((resolve) => {
        //
        // 타임아웃을 설정하지 않고 콜백을 사용하지 않는 함수를 호출.
        // 단, 10초 이후에 해당 호출을 취소함.
        const req = client.echo_nocallback(echoRequest, function (
            err,
            response
        ) {
            console.group("nocallback with timeout");
            console.log(`err : ${err}`);
            console.log(`res : ${response}`);
            console.groupEnd();
            resolve();
        });

        //
        // 10초 후에 해당 호출을 취소함.
        setTimeout(() => {
            console.log("try cancle");
            req.cancel();
            resolve();
        }, 10 * 1000);
    });
}

async function test_echo_exception() {
    return new Promise((resolve) => {
        //
        // 서버 다운을 발생시키는 함수를 호출.
        const req = client.echo_exception(echoRequest, function (
            err,
            response
        ) {
            console.group("exception");
            console.log(`err : ${err}`);
            console.log(`res : ${response}`);
            console.groupEnd();
            resolve();
        });
    });
}

async function test_echo_callback_with_error() {
    return new Promise((resolve) => {
        //
        // 에러를 콜백으로 반환하는 함수 호출.
        client.echo_callback_with_error(echoRequest, function (err, response) {
            console.group("callback with error");
            console.log(`err : ${err}`);
            console.log(`res : ${response}`);
            console.groupEnd();
            resolve();
        });
    });
}
