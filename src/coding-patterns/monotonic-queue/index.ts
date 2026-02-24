function createMonotonicFrom(
  nums: number[],
  fn: (num: number, deque: number[]) => boolean,
): number[] {
  // Initialize an empty deque to store the elements
  const deque: number[] = [];

  nums.forEach((num) => {
    // Maintain order in the deque
    // Remove elements from the back
    while (deque.length > 0 && fn(num, deque)) {
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
    (num, deque) => deque[deque.length - 1] >= num,
  );
}

function createMonotonicDecreasingQueue(nums: number[]): number[] {
  return createMonotonicFrom(
    nums,
    (num, deque) => deque[deque.length - 1] <= num,
  );
}

function logenstSubarray(nums: number[], limit: number): number {
  // Monotonic queues to store the indices of elements in the order of minimum and maximum
  const maxDeque = [];
  const minDeque = [];

  let start = 0; // The starting index of the current subarray
  let maxLength = 0; // The maximum length of the subarray found so far

  for (let end = 0; end < nums.length; end++) {
    // Maintain the maxDeque to have the maximum value at the front
    while (
      maxDeque.length &&
      nums[maxDeque[maxDeque.length - 1]] <= nums[end]
    ) {
      maxDeque.pop();
    }
    maxDeque.push(end);

    // Maintain the minDeque to have the minimum value at the front
    while (
      minDeque.length &&
      nums[minDeque[minDeque.length - 1]] >= nums[end]
    ) {
      minDeque.pop();
    }
    minDeque.push(end);

    // Check the difference between the current maximum and minimum in the window
    while (nums[maxDeque[0]] - nums[minDeque[0]] > limit) {
      // If the difference exceeds the limit, move the start pointer to the right
      start++;
      // Remove the elements from the deque if they are out of the current window
      if (maxDeque[0] < start) {
        maxDeque.shift();
      }
      if (minDeque[0] < start) {
        minDeque.shift();
      }
    }

    // Update the maximum length found
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

export {
  createMonotonicIncreasingQueue,
  createMonotonicDecreasingQueue,
  logenstSubarray,
};
