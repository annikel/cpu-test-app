export default function handler(req, res) {
  const startTime = Date.now();
  let sum = 0;  

  let compute = req.query.compute;
  if (compute === 'true') {
    for (let i = 0; i < 20000000; i++) {
      sum += Math.sqrt(i);
    }
  }

  const endTime = Date.now();
  const elapsedTime = (endTime - startTime) / 1000;

  res.status(200).json({ message: `CPU-intensive task completed in ${elapsedTime.toFixed(3)} seconds with compute set to ${compute}.` });
}
