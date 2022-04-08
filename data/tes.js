const json = JSON.stringify(new Date().toISOString());

console.log(json); // 👉️ "2022-01-23T09:04:45.904Z"

const date = new Date(JSON.parse(json));

console.log(date.getHours());
