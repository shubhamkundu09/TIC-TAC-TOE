let boxes = document.querySelectorAll(".box")
let resetbtn = document.querySelector("#reset")
let newgame = document.querySelector("#newgame")
let winnermsg = document.querySelector(".winner")

let turn0 = true;

let winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(turn0){
            box.innerText = "0"
            turn0 = false;
        }else{
            box.innerText = "X";
            turn0=true;
        }
        box.disabled = true;

        checkwinner();
    })
})

const disableboxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const showwinner = (winner)=>{
    winnermsg.innerText = `CONGRATULATIONS, WINNER IS ${winner}`
    disableboxes()
}

const checkwinner = ()=>{
    for (let pattern of winPatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;


        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("winner", pos1val)
                showwinner(pos1val)
            }
        }
    }
}

