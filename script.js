function lengthArray(){
    const countries = [
    "Albania",
    "Bolivia",
    "Canada",
    "Denmark",
    "Ethiopia",
    "Finland",
    "Germany",
    "Hungary",
    "Ireland",
    "Japan",
    "Kenya"
  ]
  let lengthArray=document.getElementById('lengthArray');
  lengthArray.innerHTML=countries.length;
  let sort=document.getElementById('sort');
  sort.innerHTML=countries.sort();
}
function reverse(){
    const webTechs = [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node",
            "MongoDB"
                ];
        let reverse=document.getElementById('reverse');
        reverse.innerHTML=webTechs.reverse()
    

}

function toStr(){

    const webIt=["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle" , "Amazon" ];
    let toString=document.getElementById('toString');
    toString.innerHTML=webIt.toString();

}

function shif(){

    const webIt=["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle" , "Amazon" ];
    let shift=document.getElementById('shift');
    webIt.shift()
    shift.innerHTML=webIt
}
function pops(){

    const webIts=["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle" , "Amazon" ];
    let pop=document.getElementById('pop');
    webIts.pop()
    pop.innerHTML=webIts
    }




