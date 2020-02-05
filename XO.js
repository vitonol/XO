function XO(str) {
    str = str.toLowerCase();
        let howManyX =0;
        let howManyO =0;
            for(let i=0; i < str.length; i++) {
              if(str[i] ==="x") {
                howManyX++;
             } else if (str[i] === "o") {
                howManyO++;        
              }
           }
      if(howManyX === howManyO) {
        return true;
      } else {
        return false;
      }
    }
    
    console.log(XO("xOooXx"));
    
    
    