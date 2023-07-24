import memoize from './memoize';

function calcEllapsedSeconds(num1: number, num2: number): number {
  const ellapsed = (num2 - num1) / 1000;
  console.log('ellapsed seconds', ellapsed);
  return ellapsed;
}

function fibonacci(num: number): number {
  if (num <= 2) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

const memoizedFib = memoize(fibonacci);

test('should memoized second run take less seconds to complete than first run', () => {
  const firstRunStart = performance.now();
  memoizedFib(40);
  const firstRunEnd = performance.now();

  const ellapsedFirstRun = calcEllapsedSeconds(firstRunStart, firstRunEnd);

  const secondRunStart = performance.now();
  memoizedFib(40);
  const secondRunEnd = performance.now();

  const ellapsedSecondRun = calcEllapsedSeconds(secondRunStart, secondRunEnd);

  expect(ellapsedSecondRun).toBeLessThan(ellapsedFirstRun);
});
