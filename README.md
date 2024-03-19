# Elysia with Bun runtime

## Getting Started
To get started with this template, simply paste this command into your terminal:
```bash
bun create elysia ./elysia-example
```

## Development
To start the development server run:
```bash
bun run dev
```

## Development Telemetry
To start the development server with OpenTelemetry (currently use Zipkin for export) run:
```bash
docker run -p 9411:9411 openzipkin/zipkin
bun run --preload "./src/telemetry.ts" src/index.ts
```

Open http://localhost:3000/ with your browser to see the result.