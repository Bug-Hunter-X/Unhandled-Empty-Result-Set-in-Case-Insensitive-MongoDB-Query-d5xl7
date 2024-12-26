```javascript
const query = { name: /John/i };

db.collection('users').find(query).toArray((err, result) => {
if (err) throw err;
if (result.length === 0) {
  console.log('No documents found');
  // Handle the case where no documents match the query
} else {
  console.log(result);
}
});
```
This improved code explicitly checks the length of the `result` array. If it's empty, a message is printed, and you can implement appropriate error handling or alternative logic. This prevents unexpected behavior when no documents match the search criteria.