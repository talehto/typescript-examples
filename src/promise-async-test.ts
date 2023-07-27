function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log("1 " + result);
  // Expected output: "resolved"
}

function syncCall() {
  console.log('calling');
  const result = resolveAfter2Seconds();
  console.log("before resolve")
  result.then((value) => console.log("2 " + value))
  // Expected output: "resolved"
}

asyncCall();
syncCall();
