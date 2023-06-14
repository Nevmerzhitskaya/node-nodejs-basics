import { workerData, parentPort } from 'node:worker_threads';

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);


const data = workerData ? nthFibonacci(workerData) : null;

const sendResult = () => {
    
    if (Math.random() > 0.5) throw new Error('');
    parentPort.postMessage(data);
};

sendResult();