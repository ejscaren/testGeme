

export const thing = {
    name: null,
    score: null
}

if(localStorage.getItem('name')===null){
        
    }
else {thing.name = localStorage.getItem('name');}

thing.score = parseInt(localStorage.getItem('score')) || 0;
