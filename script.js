(function(){ /*assuront nous que les variables ne sortent ps d'ici*/

var conv = {val:0 ,tva:0, unit:"HT", rslt:""};/*contiendra toutes les données*/
var i = 0;/*comptera le nombre de calcul*/

var G = function(param){/*pour selectionner des elements plus rapidement*/
   var premier_caractere, element;
   var premier_caractere = param.substring(0, 1);/*isole le premier caractere*/
    premier_caractere == "#" ? element=document.getElementById(param.substring(1,param.length)) :/*si# getelementbyid*/
    premier_caractere == "." ? element=document.getElementByClassName(param.substring(1,param.length)) :/*si. getelementsbyclassname ATTENTION TABLEAU*/
    element = document.getElementsByTagName(param);/*si "" getelementsbytagname ATTENTION TABLEAU*/
return element;
};


G("#bt").addEventListener('click', function(e){/*Lorsque l'on clique sur le bouton*/
    e.preventDefault();

      conv = mev(conv)/*Appelle la fonction mev =>pour mettre les données en variable objet parametre:objet hors de la fonction*/
      if(isNaN(conv.tva) || isNaN(conv.val) || conv.tva>100 || conv.tva<0 || conv.valeur<0){/*Si valeur erronnée=>verifiez saisie*/
        alert("Verifiez votre saisie");
    }else{
      i++
      aff(conv,i)/*appelle aff pour afficher les données + precise le nombre de calcul*/
            G('#tva').value = G('#val').value = "";/*vide les données saisies*/
      };
});

function mev(){/*met les données en variable et retourne un objet */
  var obj = {};

obj.tva   = parseFloat(G('#tva').value);/*donnée traduites en nb*/
obj.val   = parseFloat(G('#val').value);/*donnée traduites en nb*/
obj.unit  = G('#unit').value;
obj.reslt = calc(obj);/*lance le calcul et stoque le resultat*/

return obj;
};

function calc(obj){/*CALCULS en fonction de l'objet qui contien les données*/
  var res, reslt;
  if(obj.unit == "HT"){/*verifie l'unitée*/
    res = ((obj.val*obj.tva)/100) + obj.val;
    reslt = res.toFixed(2) + " TTC";/*arrondi en gerant le nombre de chiffre aprés la virgule+ajoute l'unitée*/
  }else{
    res=(obj.val*100)/(100+obj.tva);
    reslt = res.toFixed(2) + " HT"/*arrondi en gerant le nombre de chiffre aprés la virgule+ajoute l'unitée*/
  };
  return reslt;

};

function aff(conv,i){ /*sert à afficher le resultat + besoin du nombre de calcul et de l'objet contenant les données*/

var maDiv = document.createElement("div"); /*cree une nouvelle div qui contiendra 4 div du resultat*/
maDiv.id = i; /*donne le nombre de calcul à l'id de la nouvelle div*/
maDiv.className = 'row rst1';/*lui affecte une class pour qu'elle soit jolie*/
if( i== 1){
G('#resultats').appendChild(maDiv);/*insert le premier calcul dans la div prevue à cet effet*/
}else{

  G("#"+(i-1)).className = 'row rst'; /*change la classe de la div precedente pour qu'elle soit moin jolie que la premiere*/
  G('#resultats').insertBefore(maDiv, G("#"+(i-1)));/*insert la nouvelle div avant la div precedente*/
};

/*cree 4 div chacune contiendra un element de l'objet; la premiere le nombre de calcul*/
/*PARAMETRES
: texte a afficher|||nombre de calcul|||le nombre a mettre pour col-xs|||la classe qui permet de faire disparaitre la colonne la moins utile pour le coté responsive*/
cont(i,i,0," r")/*cree la div qui affiche le nombre de calcul*/
cont(conv.tva,i,4,"")/*cree la div qui affiche le taux de la tva*/
cont(conv.val+" "+conv.unit,i,4,"")/*cree la div qui affiche la valeur a convertir*/
cont(conv.reslt,i,4,"")/*cree la div qui affiche la valeur convertie*/
}
/*cree chaque une div a afficher dans une colonne bootstrap*/
/*PARAMETRES
: texte a afficher|||nombre de calcul|||le nombre a mettre pour col-xs|||la classe qui permet de faire disparaitre la colonne la moins utile pour le coté responsive*/
function cont(txt,i,c1,r){

var maDiv = document.createElement("div");/*cree une div*/
maDiv.className = "col-xs-"+c1+" col-sm-"+3+r /*affecte les class bootstrap*/
maDiv.innerHTML = txt;/*rempli la div avec le texte a afficher*/
G('#'+i).appendChild(maDiv);/*insert la nouvelle div dans la div row prevue à cet effet*/
}

/*_____________________________________________________________________________*/
/*Ajoute un petit konamikode pour la rigolade*/
if ( window.addEventListener ) {
var kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65";
window.addEventListener("keydown", function(e){
kkeys.push( e.keyCode );
if ( kkeys.toString().indexOf( konami ) >= 0 ) {
kkeys = []/*important de vider la liste d'evenements pour que le convertisseur soit toujours utilisable ;) */
alert("voici le numero de ma carte banquaire");
alert("naaannn j'deconne");
alert("salut!");
alert("c'est encore moi");
alert("la tu te demende si tu ne vas pas desactiver les poppups");
alert("mais ta curiosité est trop grande!!!");
alert("pour decouvrir au final");
alert("qu'il n'y a rien de spé à la fin :p");
};
}, true);
};

})()



