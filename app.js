const grid = document.querySelector('.grid');
    
    let suffledArray= [];
    let bombs = [];
    const random = [];
    let score = document.getElementById("gameScore");
    let flag = true;
    let result = document.getElementById("resultDisplay");

    function createBoard() {
    
        while(random.length <= 9) {
            var uniqueNo = Math.floor(Math.random()*81);
            if(random.indexOf(uniqueNo+1) === -1){
                random.push(uniqueNo+1);
              }
        }

        
        for(let i= 0;i<9*9; i++) {
            
            const square = document.createElement('div');

            if(random.indexOf(i+1) === -1){
              suffledArray.push('safe');
            }else{
              suffledArray.push(i+1);
            }

            square.setAttribute('id',"cell_"+(i+1));

            if(suffledArray[i] != 'safe'){bombs.push(square);}

            square.setAttribute('class',"box");
            grid.appendChild(square);
            square.addEventListener('click',clicked);

            function clicked(){
              if(suffledArray[i] === 'safe' && flag ){
    
                square.className = 'clic';
                
                score.innerText = (Number)(score.innerText) + 1;
                if(Number(score.innerText) === 71){result.innerText = "Win"; flag = false;}
                square.removeEventListener('click',clicked);
              }else{
                if(flag){
                  result.innerText = "game over";
                  flag = false;
                  show();
                }
              }
            }
        }
        console.log(score.innerText);
    }

    createBoard();
    function show (){
      for(let i=0; i<=9; i++){
        bombs[i].className = 'bomb';
      }
    }
    // function debug(){
    //   for(let i=0; i<81; i++){
    //     if(random.indexOf(i+1) === -1){
    //       document.getElementById("cell_"+(i+1)).click();
    //     }
    //   }
    //   console.log(document.getElementById("resultDisplay").innerText);
    // }
    // debug();