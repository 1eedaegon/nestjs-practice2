# Controllers

- 컨트롤러는 request를 받고 response를 클라이언트에 반환하는 책임을 갖고있다.
- 컨트롤러의 목적은 클라이언트의 요청을 수신하는 것이다.
- 둘 이상의 라우트가 있고 각각 다른 작업을 수행할 수 있다.
- Nestjs는 클래스를 데코레이터로 메타데이터와 연결하고 라우팅 맵을 만든다.

## 1. Routing

- `@Controller(path)`로 라우팅 집합을 만든다.

```typescript
import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return `Your request is: ${request}`;
  }
}
```

`@Get` 데코레이터는 http 요청에 대한 엔드포인트 핸들러를 만든다.
