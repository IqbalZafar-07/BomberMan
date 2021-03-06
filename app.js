const grid = document.querySelector('.grid');
    
    let random = [];
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

            square.setAttribute('id',"cell_"+(i+1));
            square.setAttribute('class',"box");
            grid.appendChild(square);
            square.addEventListener('click',clicked);

            function clicked(){
              if(random.indexOf(i+1) === -1 && flag ){
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
    }
    createBoard();

    function show (){
      for(let i=0; i<=9; i++){
        document.getElementById(`cell_${random[i]}`).className = 'bomb';
      }
    }

    function reset () {
        random = [];
        score.innerHTML = "0";
        flag = true;
        result.innerHTML = "";
        for(let i= 0;i<9*9; i++){
          grid.removeChild(grid.firstChild);
        }
        createBoard();
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
