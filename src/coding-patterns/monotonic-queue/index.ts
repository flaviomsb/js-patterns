function createMonotonicFrom(
  nums: number[],
  fn: (num: number, deque: number[]) => boolean,
): number[] {
  // Initialize an empty deque to store the elements
  const deque: number[] = [];

  nums.forEach((num) => {
    // Maintain order in the deque
    // Remove elements from the back
    while (fn(num, deque)) {
      deque.pop(); // Remove the back element
    }

    // Add the current element to the back of the deque
    deque.push(num);
  });

  // Return the final deque representing the monotonic increasing queue
  return deque;
}

function createMonotonicIncreasingQueue(nums: number[]): number[] {
  return createMonotonicFrom(
    nums,
    (num, deque) => deque.length > 0 && deque[deque.length - 1] >= num,
  );
}

function createMonotonicDecreasingQueue(nums: number[]): number[] {
  return createMonotonicFrom(
    nums,
    (num, deque) => deque.length > 0 && deque[deque.length - 1] <= num,
  );
}

export { createMonotonicIncreasingQueue, createMonotonicDecreasingQueue };
