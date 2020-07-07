## Other Data Types

### Map

`Map<K, V>`로 표현되는 자료형입니다.

```protobuf
message EchoObject {
    map<string, int32> dictionary = 1;
}
```

<br/>

`node.js`에서는 `getter`로 딕셔너리를 얻은 이후에, 각종 작업을 진행할 수 있습니다.

```ts
import { EchoObject } from "./proto/schema_pb";

const request = new EchoObject();
const dictionary = request.getDictionaryMap();
dictionary.set("hello", 1);
dictionary.set("world", 2);
```

<br/>

과거 버전에서 `Map`을 사용하려면 아래와 같이 사용하면 됩니다. 논리적으로 동일합니다.

```protobuf
message MapFieldEntry {
  key_type key = 1;
  value_type value = 2;
}

repeated MapFieldEntry map_field = N;
```

<br/>

`Map`은 몇가지 유의사항이 있습니다.

-   `repeated`와 함께 사용 될 수 없습니다.
-   중복된 키가 있을 경우, 마지막에 발견된 키-값을 사용합니다.
-   항상 특정 원소가 특정 순서에 있을것이라고 보장할 수 없습니다.

<br/>

### Any

단어 자체는 `모든 타입을 저장할 수 있다`는 문맥을 가지고 있지만, 실제 동작은 `bytes`와 동일합니다. 이 필드는 `Buffer` 또는 `Uint8[]` 타입의 데이터만 허용됩니다. 이 타입을 사용하기 위해서는 `any.pooto` 파일을 `import`해야 합니다.

```protobuf
import "google/protobuf/any.proto";

message EchoObject {
    google.protobuf.Any any = 2;
}
```

<br/>

`node.js`에서 사용하려면 `Any`객체를 생성해야 합니다.

```ts
import { EchoObject } from "./proto/schema_pb";
import { Any } from "google-protobuf/google/protobuf/any_pb";

const request = new EchoObject();
const any = new Any();
any.setValue(Buffer.from("Hello, World!"));
echoRequest.setAny(any);
```

<br/>

### Timestamp

특정한 `시각`을 나타내는 타입이며 `초`와 `나노초`로 구성되어 있습니다. 이 타입을 사용하기 위해서는 `timestamp.proto`파일을 `import`해야 합니다.

```protobuf
import "google/protobuf/timestamp.proto";

message EchoObject {
    google.protobuf.Timestamp timestamp = 3;
}
```

<br/>

`node.js`에서 사용하려면 `Timestamp`객체를 생성해야 합니다. 이후에 `초`와 `나노초`를 각각 설정할 수 있으며, 두 정보가 합쳐져서 하나의 `시각`이 됨을 기억해야 합니다.

```ts
import { EchoObject } from "./proto/schema_pb";
import { Timestamp } from "google-protobuf/google/protobuf/timestamp_pb";

const request = new EchoObject();
const timestamp = new Timestamp();
timestamp.setSeconds(1);
timestamp.setNanos(500);
echoRequest.setTimestamp(timestamp);

//
// Date 객체와 상호변환될 수 있습니다.
const timestamp = timestamp.fromDate(new Date());
const date = timestamp.toDate();
```

<br/>

### Duration

`시간의 간격`을 나타내는 타입이며 `초`와 `나노초` 둘 중 하나를 사용합니다. 이 타입을 사용하기 위해서는 `duration.proto`파일을 `import`해야 합니다.

```protobuf
import "google/protobuf/duration.proto";

message EchoObject {
    google.protobuf.Duration duration = 4;
}
```

<br/>

`node.js`에서 사용하려면 `Duration`객체를 생성해야 합니다. 이후에 `초`와 `나노초`를 각각 설정할 수 있으며, 두 정보가 합쳐져서 하나의 `시간 간격`이 됨을 기억해야 합니다.

```ts
import { EchoObject } from "./proto/schema_pb";
import { Duration } from "google-protobuf/google/protobuf/duration_pb";

const request = new EchoObject();
const duration = new Duration();
duration.setSeconds(1);
duration.setNanos(500);
echoRequest.setDuration(duration);
```

<br/>

### 기타 데이터 타입

`import`를 통해 가져올 수 있는 또 다른 데이터 타입을 확인하려면, `protoc`가 설치된 폴더의 `google/protobuf/`디렉토리를 확인하세요. 이 디렉토리에 있는 `.proto` 파일을 `import` 할 수 있습니다. 여기에서 사용된 설치방법을 그대로 따랐다면 `./node_modules/grpc-tools/bin`를 확인하면 됩니다.
