function base64encode(str) {
  return Buffer.from(str, 'utf-8').toString('base64');
}

//N2RhNTE4YmItNzNkZC00ZjY3LWEzNmYtYjJiOGE5MGQwMzRi
//YjA4OThjNDgtOTI3Ny00ODkzLWI0ZDgtN2Q1NjUyMmQyODVm

const apiKey = '7da518bb-73dd-4f67-a36f-b2b8a90d034b';
const token = base64encode(apiKey);

console.log(token);
