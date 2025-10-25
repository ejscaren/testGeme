
const getStuff = async () => { 
    const x = await fetch('https://api.jsonbin.io/v3/b/68f9095143b1c97be978aed2/latest');
    const stuf = await x.json() || 'error Stuff';
    return stuf;
   }
const stuff = await getStuff();
console.log(stuff);
export default stuff;

export const sendStuff = async (stuff) => {
    const x = await fetch('https://api.jsonbin.io/v3/b/68f9095143b1c97be978aed2/latest');
    const stuf = await x.json() || 5;
    
   
    stuf.record.push(stuff);
    stuf.record.sort((a,b) => b.score - a.score);
    fetch('https://api.jsonbin.io/v3/b/68f9095143b1c97be978aed2/', {
        method: 'PUT', 
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(stuf.record)
      });
    }


     