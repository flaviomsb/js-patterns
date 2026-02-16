export default function createMonotonicIncreasingQueue(nums: number[]) {
  // Initialize an empty deque to store the elements
  const deque: number[] = [];

  nums.forEach(num => {
    // Maintain order in the deque
    // Remove elements from the back if they are greater than or equal to the current element
    while (deque.length > 0 && deque[deque.length - 1] >= num) {
      deque.pop(); // Remove the back element
    }

    // Add the current element to the back of the deque
    deque.push(num);
  });

  // Return the final deque representing the monotonic increasing queue
  return deque;
}
