## Cancelling an RPC

### Cancle

클라이언트와 서버는 언제든지 중간에 요청을 취소할 수 있습니다.

<br/>

**클라이언트에서 명시적으로 취소 :**

`request object`에 존재하는 `.cancle()`을 호출하면 해당 요청은 취소됩니다.

```ts
//
// 콜백을 사용하지 않는 함수를 호출.
const req = client.echo_nocallback(echoRequest, function (err, response) {
    //
    // 도달할 수 없는 영역.
});

//
// 10초 후에 해당 호출을 취소함.
setTimeout(() => {
    console.log("try cancle");
    req.cancel();
}, 10 * 1000);
```

<br/>

**클라이언트에서 제한시각을 설정 :**

`request` 당시에 `deadline`을 함께 넘기면, 해당 시각을 넘었을 때 해당 요청은 취소됩니다.

```ts
//
// 타임아웃이 발생할 시각.
// 현재 시각으로부터 5초 뒤를 가르킨다.
const deadline = new Date(Date.now() + 5000);

//
// 타임아웃과 함께 콜백을 사용하지 않는 함수를 호출.
const req = client.echo_nocallback(echoRequest, { deadline }, function (
    err,
    response
) {
    console.group("nocallback with timeout");
    console.log(`err : ${err}`); // deadline exceeded.
    console.log(`res : ${response}`); // undefined.
    console.groupEnd();
});
```

<br/>

**서버에서 명시적으로 취소 :**

콜백에 에러를 전달하면 됩니다.

```ts
//
// 콜백으로 에러를 넘김.
function echo_callback_with_error(
    call: ServerUnaryCall<EchoObject>,
    callback: (err: any, res?: EchoObject) => void
) {
    //
    // 첫 번째 인자가 설정되어 있다면,
    // 두 번째 인자에 응답을 넘기더라도 undefined로 대체된다.
    callback(new Error(`This service never succeeds.`), call.request);
}
```

<br/>

## Detected cancelled

서버는 `call` 객체의 `cancelled` 플래그를 통해 해당 요청이 취소되었는지 확인할 수 있습니다. 아래 서비스는 요청이 취소되지 않는 한, 불필요한 커넥션을 유지합니다.

```ts
async function echo_nocallback(
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
            console.log(`cancel detected`);
            break;
        } else {
            console.log(`cancelled : ${call.cancelled}`);
        }
    }
}
```

<br/>

---

## Server Down

중간에 서버가 다운된 경우, 모든 클라이언트에 `TCP Read failed` 에러가 반환됩니다.
