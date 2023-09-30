let score=JSON.parse(localStorage.getItem('score')) || {
    wins:0,
    loses:0,
    ties:0
};
function3();   
function function1(peopleMove){
    const computerMove=function2();
    let result='';
    if(peopleMove==='Rock'){
        if(computerMove==='Rock'){
            result='Tie.';
        } else if(computerMove==='Paper'){
            result='You Loss.';
        } else if(computerMove==='Scissors'){
            result='You Win.';
        }
    } else if(peopleMove==='Paper'){
        if(computerMove==='Rock'){
            result='You Win.';
        } else if(computerMove==='Paper'){
            result='Tie.';
        } else if(computerMove==='Scissors'){
            result='You Loss.';
        }
    } else if(peopleMove==='Scissors'){
        if(computerMove==='Rock'){
            result='You Loss.';
        } else if(computerMove==='Paper'){
            result='You win.';
        } else if(computerMove==='Scissors'){
            result='Tie.';
        }
    }

    if(result==='You Win.'){
        score.wins+=1;
    } else if(result==='You Loss.'){
        score.loses+=1;
    } else if(result==='Tie.'){
        score.ties+=1;
    }
    localStorage.setItem('score',JSON.stringify(score));

    function3();

    document.querySelector('.result1').innerHTML=result;

    document.querySelector('.result2').innerHTML=`You <img src="./image/${peopleMove}-emoji.png" class="logo"> <img src="./image/${computerMove}-emoji.png" class="logo"> Computer`;
    
}
function function3(){
    document.querySelector('.result3').innerHTML=`wins:${score.wins},Loses:${score.loses},Ties:${score.ties}`;
} 
function function2(){
    let computerMove='';
    const randomMove=Math.random();
    if(randomMove>=0 && randomMove<1/3){
        computerMove='Rock';
    } else if(randomMove>=1/3 && randomMove<2/3){
        computerMove='Paper';
    } else if(randomMove>=2/3 && randomMove<1){
        computerMove='Scissors';
    }
    return computerMove;
}