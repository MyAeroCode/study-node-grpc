import { EchoObject } from "./proto/schema_pb";
import services from "./proto/schema_grpc_pb";
import grpc, { ServerUnaryCall } from "grpc";

export default function startServer() {
    const server = new grpc.Server();

    server.addService(services.EchoService, {
        //
        // 콜백을 호출하지 않는다.
        echo_nocallback: async function (
            call: ServerUnaryCall<EchoObject>,
            callback: (err: any, res: EchoObject) => void
        ) {
            //
            // nothing.
            while (true) {
                //
                // wait 1s.
                await new Promise((resolve) => setTimeout(resolve, 1000));

                //
                // check if cancelled.
                if (call.cancelled) {
                    //
                    // 클라이언트가 명시적으로 취소했거나.
                    // 데드라인이 지났거나.
                    console.log(`cancelled detected`);
                    break;
                } else {
                    console.log(`cancelled : ${call.cancelled}`);
                }
            }
        },

        //
        // 콜백 전에 처리되지 않은 예외를 발생시킴.
        echo_exception: async function (
            call: ServerUnaryCall<EchoObject>,
            callback: (err: any, res?: EchoObject) => void
        ) {
            throw new Error(`This service never succeeds.`);
        },

        //
        // 콜백으로 에러를 넘김.
        echo_callback_with_error: async function (
            call: ServerUnaryCall<EchoObject>,
            callback: (err: any, res?: EchoObject) => void
        ) {
            callback(new Error(`This service never succeeds.`), call.request);
        },
    });

    server.bind("localhost:50051", grpc.ServerCredentials.createInsecure());
    console.log("chapter 07 started!");
    server.start();
}
