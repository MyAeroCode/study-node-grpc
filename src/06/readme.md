## Stream

`gRPC`는 스트림을 통한 데이터 송수신을 지원하며, 송수신 형태의 따라 4가지로 메소드를 분류합니다.

-   Unary Call
-   Client Stream Call
-   Server Stream Call
-   Bidirectional Stream Call

<br/>

### Unary Call

`Unary Call`은 다음과 같이 서버와 클라이언트 `둘 다 스트림을 사용하지 않는` 송수신 형태입니다. 클라이언트가 하나의 요청를 보내면, 서버가 하나의 응답을 보내는 `1:1` 관계입니다.

**IDL :**

```protobuf
message NumberData {
    int32 n = 1;
}

//
// 서비스 명세
service StreamTest {
    //
    // 인자로 받은 숫자 하나를 그대로 반환한다.
    rpc echo (NumberData) returns (NumberData);
}
```

<br/>

**클라이언트 코드 :**

```ts
//
// 단항 -> 단항
async function callUnaryRPC() {
    return new Promise((resolve) => {
        //
        // 요청 객체 생성
        const n = 123;
        const numData = new NumberData();
        numData.setN(n);

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
```

<br/>

**서버 코드 :**

```ts
function echo(
    call: ServerUnaryCall<NumberData>,
    callback: (err: any, res: NumberData) => void
) {
    callback(null, call.request);
}
```

<br/>

### Client Stream Call

`Client Stream Call`은 말그대로 클라이언트만 스트림을 사용합니다. 클라이언트는 여러개의 데이터를 보내고, 서버는 `스트림이 종료되었을 때` 단일 응답을 반환하는 `N:1`의 관계입니다.

**IDL :**

```protobuf
//
// 서비스 명세
service StreamTest {
    //
    // 스트림으로 받은 여러 숫자의 합을 반환한다.
    rpc sum (stream NumberData) returns (NumberData);
}
```

<br/>

**클라이언트 코드:**

클라이언트는 원하는 만큼 데이터를 스트림에 `write`하고, 마지막에 `end()`를 호출해야 합니다.

```ts
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
            stream.write(numData);
        }

        //
        // 스트림 닫기
        stream.end();
    });
}
```

<br/>

**서버 코드 :**

서버측은 `.on("data")`를 통해 클라이언트의 데이터를 수신하고, `.on("end")`를 통해 클라이언트가 스트림을 끊은 것을 감지할 수 있습니다. 이후에는 `callback`을 통해 단일 응답을 전송합니다.

```ts
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
```

<br/>

### Server Stream Call

`Server Stream Call`은 서버만 스트림을 사용합니다. 클라이언트가 단일 요청을 보내면, 서버는 지속적인 응답을 반환하는 `1:N`의 관계입니다.

**IDL :**

```protobuf
//
// 서비스 명세
service StreamTest {
    //
    // 인자로 받은 숫자의 배수들을 반환한다.
    rpc mul (NumberData) returns (stream NumberData);
}
```

<br/>

**클라이언트 코드 :**

```ts
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
```

<br/>

**서버 코드 :**

```ts
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
```

<br/>

### Bidirectional Stream Call

`Bidirectional Stream Call`은 양쪽이 모두 스트림을 사용합니다. 비동기적으로 상대방과 대량의 데이터를 주고받을 수 있는 `N:N`의 관계입니다. 유의할 점은 양쪽모두 `.end()`를 호출해야 정상적으로 스트림이 종료된다는 것입니다. `.on("end")`를 사용하여 상대방이 스트림을 종료한 것을 감지하면, 해당 시점에서 자신도 `.end()`를 호출해야 합니다.

**IDL :**

```protobuf
//
// 서비스 명세
service StreamTest {
    //
    // 인자로 받은 숫자들을 변환하여 반환한다.
    rpc map (stream NumberData) returns (stream NumberData);
}
```

<br/>

**클라이언트 코드 :**

```ts
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
```

<br/>

**서버 코드:**

```ts
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
```
