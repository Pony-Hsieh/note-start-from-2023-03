test();
async function test() {
  const moduleUrl = './testModule.js';
  const { bye } = await import(`${moduleUrl}`);
  bye();
}
