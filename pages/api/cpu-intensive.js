// pages/api/cpu-intensive.js
export default function handler(req, res) {
  const startTime = Date.now();
  let sum = 0;
  for (let i = 0; i < 1000000; i++) {
    sum += Math.sqrt(i);
  }
  const endTime = Date.now();
  const elapsedTime = (endTime - startTime) / 1000; // in seconds

  res.status(200).json({ message: `CPU-intensive task completed in ${elapsedTime.toFixed(3)} seconds.` });
}
