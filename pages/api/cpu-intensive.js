// pages/api/cpu-intensive.js
export default function handler(req, res) {
  const startTime = Date.now();
  let sum = 0;

  // Adjust loop iterations to target around 500 milliseconds
  for (let i = 0; i < 20000000; i++) {
    sum += Math.sqrt(i);
  }

  // Add a 30-second delay before sending the response
  setTimeout(() => {
    const endTime = Date.now();
    const elapsedTime = (endTime - startTime) / 1000; // in seconds

    res.status(200).json({ message: `CPU-intensive task completed in ${elapsedTime.toFixed(3)} seconds.` });
  }, 30000); // 30 seconds in milliseconds
}
