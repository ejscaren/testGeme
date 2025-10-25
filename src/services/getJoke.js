export const getJoke = async () => {
  const x = await fetch('https://v2.jokeapi.dev/joke/Any?safe-mode');
  const stuf = await x.json();
  return stuf;
}
const joke = await getJoke();
console.log(joke);
let fullJoke = '';
if(joke.type == 'twopart'){
    fullJoke = joke.setup + "\n" + joke.delivery;
}
else{ fullJoke = joke.joke;}

export default fullJoke;