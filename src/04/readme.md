## Nested Type, Oneof

### Nested Type

`Message` 타입 안에 `Message` 또는 `Enum`을 선언할 수 있습니다. 아래처럼요.

```protobuf
//
// Nested Types
message MyNestedBox {
    //
    // 메세지 내부에 메세지 타입을 선언할 수 있습니다.
    message BooleanBox {
        bool val = 1;
    }

    //
    // 얼마든지 깊게 작성해도 됩니다.
    message NumbericBox {
        message UInt32Box {
            int32 val = 1;
        }
        message UInt64Box {
            int64 val = 1;
        }
    }
}
```

<br/>

`.proto`에서 `NestedType`을 참조하려면 부모부터 차례대로 기술하면 됩니다.

```protobuf
message EchoObject {
    //
    // NestedType을 사용하려면
    // 부모에서부터 차례대로 기술합니다.
    MyNestedBox.NumbericBox.UInt32Box uint32box = 1;
}
```

<br/>

`node.js`에서도 마찬가지입니다.

```ts
import { MyNestedBox } from "./proto/schema_pb";

const uint32box = new MyNestedBox.NumbericBox.UInt64Box();
uint32box.setVal(5);
```

<br/>

### Oneof

`oneof`는 여러 타입 중 하나를 갖는 자료형입니다. 예를 들어, 아래의 `MyUnionBox`는 `uint32` 또는 `string` 중 하나만 가질 수 있습니다.

```protobuf
message MyUnionBox {
    //
    // oneof 필드는 uint32 또는 string 값을 가질 수 있습니다.
    oneof oneof {
        uint32 oneof_uint32 = 1;
        string oneof_string = 2;
    }
}
```

<br/>

`node.js`에서 사용하려면 `oneof`가 어떤 값을 가지고 있는지 `has` 메소드를 사용하여 체크해야 합니다. 어떤 값을 가졌는지 확인을 마쳤다면 `get` 메소드를 사용하여 값을 가져옵니다. 이 때, 어떠한 필드도 설정되지 않은 경우에 주의해주세요.

```ts
const unionBox: MyUnionBox;

//
// Uint32가 저장된 경우.
let val;
if (unionBox!.hasOneofUint32()) {
    val = unionBox!.getOneofUint32();
}
//
// String이 저장된 경우.
else if (unionBox!.hasOneofString()) {
    val = unionBox!.getOneofString();
}
//
// 둘 다 저장되지 않은 경우.
else {
    val = undefined;
}

console.log(`val : ${val}`);
```

<br/>

`Oneof` 필드를 여러번 설정하면, 마지막에 설정된 값이 저장됩니다.

```ts
import { MyUnionBox } from "./proto/schema_pb";

const unionBox = new MyUnionBox();
unionBox.setOneofUint32(55);
unionBox.setOneofString("Hello, World!"); // 기존에 설정했던 uint32는 사라짐.
echoRequest.setUnionbox(unionBox);
```
