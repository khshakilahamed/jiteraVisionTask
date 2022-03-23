const ourVision = ["B$u$i$ld", "$t$$h$e", "N$e$x$t", "E$$ra", "$$o$f$", "S$$of$t$wa$r$e", "De$$ve$l$op$me$n$t"] 

let visionString = '';
ourVision.map(vision => {
    for(let i = 0; i<vision.length; i++){
        if(vision[i] !== '$'){
            visionString += vision[i].toLocaleUpperCase();
        }
        else{
            continue
        }
    }
    visionString += " ";
})

console.log(visionString);