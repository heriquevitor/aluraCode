const estudanteReprovou =  (notafinal, faltas) => {
  if(notafinal < 7 && faltas > 4 ){
    return true;
  }else{
    return false;
  }
}