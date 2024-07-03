# ts-client-consumer-pkg

Application that consumes a client defined in another package.

The package installed is `ts-client-pkg`.

The package `ts-client-pkg` exposes a the classes `Client` and `ClientOptions` as public interfaces. Therefore such classes can be imported and consumed by this package as can be seen in the [consumer](./src/consumer.ts) file.

## test

Run the tests using the command

`npm run test`
