## Hello, `TypeScript + gRPC` !

`.proto` 파일을 `js, ts`로 빌드하여 사용하는 방법을 공부합니다.

<br/>

### 프로토 파일

`gRPC`는 아래와 같은 형식을 지닌 `프로토 파일`을 통하여 스키마를 작성합니다. `프로토 파일`은 언어와는 독립되어 있기 때문에, 한번 작성된 `프로토 파일`은 `gRPC` 라이브러리가 공개된 모든 프로그래밍 언어에서 사용할 수 있습니다.

**hello.proto :**

```grpc
//
// Proto3 문법을 사용한다고 명세한다.
syntax = "proto3";

//
// 패키지 이름
package hello;

//
// 요청 객체
message HelloRequest {
    string name = 1;
}

//
// 응답 객체
message HelloResponse {
    string message = 1;
}

//
// 서비스 명세
service HelloService {
    //
    // 서비스에 속한 함수.
    rpc hello (HelloRequest) returns (HelloResponse);
}
```

<br/>

### 프로토 파일 빌드하기

`프로토 파일`을 `Node.JS`에서 사용하기 위해서는 `프로토 파일`을 `js, ts`로 변환시켜주는 컴파일러가 필요합니다. 먼저, 해당 컴파일러 모듈부터 설치하겠습니다.

```bash
npm install grpc-tools -D
npm install ts-protoc-gen -D
```

<br/>

모듈을 설치했다면 `grpc-tools`에 포함된 `protoc.exe`와 `ts-protoc-gen`에 포함된 `protoc-gen-ts` 플러그인을 사용하여 `hello.proto`를 컴파일합니다. 플러그인의 경로는 `절대경로`로 주어야 함에 유의해주세요.

```bash
export SERVER_ROOT="[WRITE_YOUR_PATH]\study-node-grpc";
export SERVER_MODULES="$SERVER_ROOT\node_modules";
export OUT_DIR="./"

cd $SERVER_ROOT;

./node_modules/grpc-tools/bin/protoc \
    --plugin="protoc-gen-grpc=$SERVER_MODULES\grpc-tools\bin\grpc_node_plugin.exe" \
    --plugin="protoc-gen-ts=$SERVER_MODULES\ts-protoc-gen\bin\protoc-gen-ts.cmd" \
    --js_out="import_style=commonjs,binary:$OUT_DIR" \
    --ts_out="service=grpc-node:$OUT_DIR" \
    --grpc_out="$OUT_DIR" \
    ./src/01/proto/hello.proto
```

<br/>

### 서버에서 명세 구현하기

`프로토 파일`에 적은 내용은 `인터페이스`이기 때문에 해당 내용을 구현해야 합니다. `HelloService`에 속한 `hello`함수를 구현합니다.

```ts
import messages from "./proto/hello_pb";
import services from "./proto/hello_grpc_pb";
import grpc from "grpc";

export default function startServer() {
    const server = new grpc.Server();

    //
    // HelloService에 hello함수를 추가한다.
    server.addService(services.HelloServiceService, {
        hello: function (call: any, callback: any) {
            //
            // 응답 객체를 생성하고, 데이터를 넣는다.
            const response = new messages.HelloResponse();
            const name = call.request.getName();
            const message = `Hello, ${name}!`;
            response.setMessage(message);

            //
            // 로깅.
            console.log(message);

            //
            // 에러는 첫 번째 인자에 넘긴다.
            // 응답은 두 번째 인자에 넘긴다.
            callback(null, response);
        },
    });

    //
    // 서버를 특정 포트에 바인딩한다.
    // 해당 예제에서 보안은 설정하지 않는다.
    server.bind("localhost:50051", grpc.ServerCredentials.createInsecure());
    console.log("started!");
    server.start();
}
```

<br/>

### 클라이언트에서 명세 사용하기

같은 `프로토 타입`을 사용하여 서버에 요청할 수 있습니다.

```ts
import messages from "./proto/hello_pb";
import services from "./proto/hello_grpc_pb";
import grpc from "grpc";

export default function startClient() {
    //
    // 커넥션을 생성한다.
    // 해당 예제에서 보안은 설정하지 않는다.
    const client = new services.HelloServiceClient(
        "localhost:50051",
        grpc.credentials.createInsecure()
    );

    //
    // 요청 객체를 생성하고, 데이터를 삽입한다.
    const request = new messages.HelloRequest();
    request.setName("World");

    //
    // 요청을 보내고, 응답은 콜백에서 처리한다.
    client.hello(request, function (err, response) {
        //
        // 첫 번째 인자는 에러.
        // 두 번째 인자는 응답.
        if (err) {
            console.log(`error : ${err}`);
        } else {
            console.log(`Hello : ${response?.getMessage()}`);
        }
    });
}
```
