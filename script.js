conv={val:0,tva:0, unit:"HT", rslt:""};
i=0;


bt=document.getElementById('bt')
bt.addEventListener('click', function(e){
    e.preventDefault();


      conv=mev(conv)
      if(isNaN(conv.tva)||isNaN(conv.val)||conv.tva>100||conv.tva<0||conv.valeur<0){
        alert("Verifiez votre saisie")
    }else{
      i++
      aff(conv,i)
            document.getElementById('tva').value=""
            document.getElementById('val').value=""
      }


})


function mev(){
  obj={}
 /* quoi faire si clique*/
obj.tva=parseFloat(document.getElementById('tva').value);
obj.val=parseFloat(document.getElementById('val').value);
obj.unit=document.getElementById('unit').value;
obj.reslt=calc(obj);

return obj
};

function calc(obj){
/*CALCULS*/
  if(obj.unit=="HT"){
    res = ((obj.val*obj.tva)/100) + obj.val
    reslt= res.toFixed(2) + " TTC"

  }else{
    res=(obj.val*100)/(100+obj.tva)
    reslt = res.toFixed(2) + " HT"
  }
  return reslt

};

function aff(conv,i){
resultats=document.getElementById('resultats');

maDiv = document.createElement("div");
maDiv.id = i;
maDiv.className = 'row rst1';
if(i==1){
resultats.appendChild(maDiv);
}else{

divim=document.getElementById(i-1);
console.log(divim)
divim.className = 'row rst';
 resultats.insertBefore(maDiv, divim);
}


cont(i,i,0,1," r")
cont(conv.tva,i,3,2,"")
cont(conv.val,i,3,3,"")
cont(conv.unit,i,3,3,"")
cont(conv.reslt,i,3,3,"")
}

function cont(txt,i,c1,c2,r){

divi=document.getElementById(i);
maDiv = document.createElement("div");
/*maDiv.id = i+"_"+n;*/
maDiv.className = "col-xs-"+c1+" col-sm-"+c2+r

maDiv.innerHTML = txt;
divi.appendChild(maDiv);
}

if ( window.addEventListener ) {
var kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65";
window.addEventListener("keydown", function(e){
kkeys.push( e.keyCode );
if ( kkeys.toString().indexOf( konami ) >= 0 ) {

alert("voici le numero de ma carte banquaire")

alert("naaannn j'deconne")
alert("salut!")
alert("c'est encore moi")
alert("la tu te demende si tu ne vas pas desactiver les poppups")
alert("mais ta curiosité est trop grande!!!")
alert("pour decouvrir au final")
alert("qu'il n'y a rien de spé à la fin :p")


kkeys=[]

}
}, true);
}





