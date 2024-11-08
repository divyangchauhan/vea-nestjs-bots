## Description

Bots for vea bridge.
This project is nestjs module that can be imported in any nestjs project to include vea bridge bots.

## Project setup

```bash
$ yarn install
```

## Build the project

```bash
# development
$ yarn run build
```

## Install the module in your project

```bash
$ yarn add 'path/to/vea'
```

## Add the module to your project

```typescript
import { VeaModule } from 'path/to/vea/dist/vea.module';

@Module({
  imports: [VeaModule],
})
export class AppModule {}
```

## License

Vea bridge is [MIT licensed](https://github.com/kleros/vea/blob/dev/LICENSE).
