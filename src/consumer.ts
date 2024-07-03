import { Client } from "ts-client-pkg";
import { ClientOptions } from "ts-client-pkg/dist/client";

export function buildClient() {
    console.log('Consuming client');
    const options: ClientOptions = {
        url: 'http://localhost:3000',
        verbose: true,
        other_stuff: 'other_stuff'
    }
    const client = new Client(options);

    return client;
}