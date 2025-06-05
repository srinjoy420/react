import express from "express"
const app = express()
const port = 3000

app.get('/api', (req, res) => {
  res.json({ message: "Hello World!" });

})
// Example server-side code (not part of the React component)
app.get('/allchai', (req, res) => {
  res.json([
    {
      id: 1,  // Example ID
      name: "Masala Chai"  // Example data
    }
  ]); // Return an array of objects
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
