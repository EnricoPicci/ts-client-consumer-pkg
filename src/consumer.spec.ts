import { expect } from 'chai';
import { buildClient } from './consumer';

describe(`Chat`, () => {
    it(`should be able to chat`, (done) => {
        const client = buildClient();
        const query = 'How are you?';
        let answer: string;
        client.chat(query).then((res) => {
            answer = res;
            expect(answer).equal(`I'm fine. You?`);
        }).finally(() => {
            done();
        })
    });
});
