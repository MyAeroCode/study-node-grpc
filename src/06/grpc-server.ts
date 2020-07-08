import { StreamTestService } from "./proto/schema_grpc_pb";
import grpc, {
    ServerUnaryCall,
    ServerReadableStream,
    ServerWritableStream,
    ServerDuplexStream,
} from "grpc";
import { NumberData } from "./proto/schema_pb";

export default function startServer() {
    const server = new grpc.Server();

    //
    // Unary
    function echo(
        call: ServerUnaryCall<NumberData>,
        callback: (err: any, res: NumberData) => void
    ) {
        callback(null, call.request);
    }

    //
    // Client Stream
    function sum(
        stream: ServerReadableStream<NumberData>,
        callback: (err: any, res: NumberData) => void
    ) {
        let totalSum = 0;

        //
        // 클라이언트에서 데이터를 보낸 경우 실행할 콜백
        stream.on("data", function (chunk: NumberData) {
            const n = chunk.getN();
            totalSum += n;
            console.log(`read : ${n}`);
        });

        //
        // 클라이언트에서 스트림을 종료할 경우 실행할 콜백
        stream.on("end", function () {
            const numberData = new NumberData();
            numberData.setN(totalSum);
            console.log(`write : ${totalSum}`);
            callback(null, numberData);

            console.log("stream is closed");
        });
    }

    //
    // Server Stream
    // 콜백이 주어지지 않음에 주의.
    function mul(stream: ServerWritableStream<NumberData>) {
        //
        // 클라이언트가 보낸 요청객체 확인
        const n = stream.request.getN();
        console.log(`request : ${n}`);

        //
        // 클라이언트에게 데이터 전송
        for (let i = 1; i <= 10; i++) {
            const numberData = new NumberData();
            const mapped = n * i;
            numberData.setN(mapped);
            console.log(`write : ${mapped}`);
            stream.write(numberData);
        }

        //
        // 스트림 끊기
        stream.end();
    }

    //
    // Bidirectional Stream
    // 콜백이 주어지지 않음에 주의.
    function map(stream: ServerDuplexStream<NumberData, NumberData>) {
        //
        // 클라이언트가 데이터를 보낸 경우 실행할 콜백
        stream.on("data", function (chunk: NumberData) {
            const n = chunk.getN();
            const numberData = new NumberData();
            numberData.setN(n * n);
            stream.write(numberData);
        });

        //
        // 클라이언트 또는 서버가 스트림을 종료할 경우 실행할 콜백
        stream.on("end", function () {
            console.log("stream is closed");

            //
            // 클라이언트 측에서 스트림을 끊었다면,
            // 서버는 여기서 스트림을 종료해야 한다.
            stream.end();
        });
    }

    server.addService(StreamTestService, {
        echo,
        sum,
        mul,
        map,
    });

    server.bind("localhost:50051", grpc.ServerCredentials.createInsecure());
    console.log("started!");
    server.start();
}
