import { Transform } from 'node:stream';

const transform = async () => {

  const reverseStream = new Transform({
    transform(chunk, encoding, callback) {
      this.push(chunk.reverse() + '\n');
      callback();
    }
  });

  process.stdin.pipe(reverseStream).pipe(process.stdout);
};

await transform();