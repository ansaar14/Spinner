process.stdout.write('hello from spinner1.js... \rheyyy\n');

let incr = 100;
let spinner = ["\r|   ", "\r/   ", "\r-   ", "\r\\   "];

for (let r of spinner) {
  setTimeout(() => {
    process.stdout.write(r);
  }, incr);
  incr += 200;

}
