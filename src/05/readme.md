## Reserved, Deprecated

코드를 업데이트 하다보면 `기존의 필드가 삭제`되거나 `새로운 필드가 추가`되는 상황을 흔히 접할 수 있습니다. 예를 들어, 아래와 같은 `Message`를 생각해보겠습니다.

```protobuf
message Foo {
    int32 a = 1;
    int32 b = 2;
}
```

<br/>

다음 업데이트에 `a` 필드가 삭제해야 한다면 `.proto`를 어떻게 수정해야 할까요? 가장 떠올리기 쉬운 방법은 2가지 정도가 있습니다. 다음 중 어느것이 옳은 방법일까요?

**a 필드만 삭제한다 :**

```protobuf
message Foo {
    int32 b = 2;
}
```

<br/>

**a 필드를 삭제하고, 번호도 당긴다 :**

```protobuf
message Foo {
    int32 b = 1;
}
```

<br/>

### Reserved

`.proto`는 반드시 하나의 이력으로 생각해야 합니다. 첫 번째 `.proto`에서 시작해서 점점 `N+1`번째 `.proto`로 업데이트 된다는 것 입니다. 여기서 `N`번째 이력과 `N+1`번째 이력으로 넘어가기 위해서는 서로 `호환`되어야 하는데, `호환성`을 검사할 때 `필드 순번`과 `필드 이름`을 사용합니다.

<br/>

구체적인 호환성 관련 규칙은 다음과 같습니다.

-   두 이력에서 같은 `이름`을 가진 필드는 `순번`과 `타입`이 같아야 한다.
-   두 이력에서 같은 `순번`을 가진 필드는 `이름`과 `타입`이 같아야 한다.
-   지금까지 삭제되었던 모든 필드 `이름`은 재사용되선 안된다.
-   지금까지 삭제되었던 모든 필드 `순번`은 재사용되선 안된다.

<br/>

즉, `.proto`를 업데이트 할 때 지켜야할 규칙을 요약하면 :

```text
지금까지 삭제된 순번이나 이름을 다시 사용해선 안된다.
```

<br/>

그러나, 처음부터 개발했던 담당자라면 몰라도, 나중에 들어오는 담당자는 지금까지 사용된 `필드 이름`과 `필드 순번`을 전부 꿰고 있을리가 없죠. `protobuf`는 이러한 상황을 위해 `reserved`란 기능을 제공하고 있습니다. 특정 `필드 이름`과 `필드 순번`을 사용할 수 없도록 예약하는 기능입니다. 이러한 기능은 다음 목적을 위해 사용될 수 있습니다.

-   제거되었던 이름과 순번을 사용하지 못하게 막음.
-   나중에 추가될 이름과 순번을 위해, 지금 사용하지 못하도록 막음.

<br/>

`reserved`는 `message`안에서 선언되어야 하며, 2가지 방식으로 사용될 수 있습니다.

-   `번호`를 예약하거나.
-   `이름`을 예약하거나.

```protobuf
message EchoObject {
    //
    // 필드 번호로 예약.
    // a to b 을 사용하면 50~100까지 한번에 예약할 수 있습니다.
    reserved 1, 3, 5, 50 to 100;

    //
    // 필드 이름으로 예약.
    reserved "b", "d";
}
```

<br/>

이 때 중요한 것은, 한번에 두 방식을 혼용하면 안된다는 것입니다. 즉, 아래는 잘못된 문법입니다.

```protobuf
message EchoObject {
    //
    // 혼용하면 안됩니다.
    reserved 1, 3, 5, 50 to 100, "b", "d";
}
```

<br/>

`reserved`로 예약된 순번과 이름을 사용하려고 하면 `protoc`에서 에러가 발생합니다.

```protobuf
message EchoObject {
    //
    // 필드 번호로 예약.
    reserved 1, 3, 5, 50 to 100;

    //
    // 필드 이름으로 예약.
    reserved "b", "d";

    // string a = 1; >> 예약된 번호를 사용하므로 에러 발생.
    // string b = 2; >> 예약된 이름을 사용하므로 에러 발생.
    // string c = 3; >> 예약된 번호.
    // string d = 4; >> 예약된 이름.
    // string e = 5; >> 예약된 번호.
    string f = 6 ;
}
```

### Deprecated

다음과 같이 필드에 `[deprecated = true]` 옵션을 함께 지정하면, 해당 필드가 더 이상 사용되지 않아야 함을 명시할 수 있습니다.

```protobuf
message EchoObject {
    string g = 7 [deprecated = true];
}
```

<br/>

하지만, 실질적인 효과는 없다는 것이 문제입니다. `deprecated`로 선언되더라도 컴파일 타겟으로 들어갑니다. 언어에 따라서 `@deprecated` 데코레이터가 추가될 수 있겠지만, 이것을 통해서는 `호환성`을 전혀 지킬 수 없기 때문에, 공식문서에서도 `reserved`를 사용하는 것을 추천하고 있습니다. 아래는 해당 내용의 원문입니다.

<br/>

**[원문](https://developers.google.com/protocol-buffers/docs/proto3#options) :**

> deprecated (field option): If set to true, indicates that the field is deprecated and should not be used by new code. In most languages this has no actual effect. In Java, this becomes a @Deprecated annotation. In the future, other language-specific code generators may generate deprecation annotations on the field's accessors, which will in turn cause a warning to be emitted when compiling code which attempts to use the field. If the field is not used by anyone and you want to prevent new users from using it, consider replacing the field declaration with a reserved statement.
