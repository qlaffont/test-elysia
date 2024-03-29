import {NodeSDK} from '@opentelemetry/sdk-node';
import {ConsoleSpanExporter} from '@opentelemetry/sdk-trace-node';
import {getNodeAutoInstrumentations} from '@opentelemetry/auto-instrumentations-node';
import {
  PeriodicExportingMetricReader,
  ConsoleMetricExporter,
} from '@opentelemetry/sdk-metrics';
import {ZipkinExporter} from '@opentelemetry/exporter-zipkin';

const sdk=new NodeSDK({
  // traceExporter: new ConsoleSpanExporter(),
  traceExporter: new ZipkinExporter({
  }),
  // metricReader: new PeriodicExportingMetricReader({
  //   exporter: new ConsoleMetricExporter(),
  // }),
  instrumentations: [getNodeAutoInstrumentations()],
});


sdk.start();