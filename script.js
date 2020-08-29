let impos;
let revenu;
let calcul = 0;
let apres_impos;
let part = parseInt(prompt('nombre de part :'));
  
  
  function mon_revenu() {
    revenu = parseInt(document.getElementById("revenu").value);

    if (revenu < 10064) {
        document.getElementById("impos").value = 0;
        document.getElementById("apres_impos").value = revenu - calcul;
    
    } else if(revenu >= 10064 && revenu < 27764) {
        calcul = (revenu * 0.14) - (1408.96 * part);
        document.getElementById("impos").value = calcul;
        document.getElementById("apres_impos").value = revenu - calcul;
        if (calcul < 0) {
            document.getElementById("impos").value = 0;
            document.getElementById("apres_impos").value = revenu;        
        }
    } else if(revenu >= 27794 && revenu < 74517) {
        calcul = (revenu * 0.30) - (5856 * part);
        document.getElementById("impos").value = calcul;
        document.getElementById("apres_impos").value = revenu - calcul;
        if (calcul < 0) {
            document.getElementById("impos").value = 0;
            document.getElementById("apres_impos").value = revenu;        
        }
    } else if(revenu >= 74517 && revenu < 157806) {
        calcul = (revenu * 0.41) - (14052.87 * part);
        document.getElementById("impos").value = calcul;
        document.getElementById("apres_impos").value = revenu - calcul;
        if (calcul < 0) {
            document.getElementById("impos").value = 0;
            document.getElementById("apres_impos").value = revenu;        
        }
    } else if(revenu >= 157806) {
        calcul = (revenu * 0.45) - (20365.11 * part);
        document.getElementById("impos").value = calcul;
        document.getElementById("apres_impos").value = revenu - calcul;
        if (calcul < 0) {
            document.getElementById("impos").value = 0;
            document.getElementById("apres_impos").value = revenu;        
        }
    }
}




