var matrix = []
var side = 5;
var xotArr = [];
var eatArr = [];
var gishArr = [];
var gevArr = [];
var patArr = [];
var erk = 50;
var bar = 100;
var xotCount = 300;
var eatCount = 30;


/*
var matrix = [
    [0, 1, 0, 0, 0, 0, 0, 0, 1, 5, 0, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 0, 0, 2, 0, 0, 1, 5, 0, 1, 1, 1, 1, 1, 1],
    [0, 1, 0, 0, 0, 1, 0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 3, 3, 0, 1, 0, 2, 1, 3, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1],
    [0, 1, 0, 3, 0, 1, 2, 0, 1, 0, 0, 1, 1, 3, 1, 1, 1],
    [2, 2, 2, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1],
    [0, 3, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 3, 1, 1, 1, 1, 1, 1],
    [0, 0, 4, 4, 0, 1, 2, 0, 1, 0, 0, 1, 1, 3, 1, 1, 1],
    [2, 0, 0, 0, 0, 1, 0, 0, 1, 4, 1, 4, 1, 1, 1, 1, 1],
    [2, 0, 0, 0, 0, 1, 0, 1, 4, 2, 2, 2, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 1, 0, 1, 2, 3, 2, 2, 1, 1, 1, 1, 1],
]
*/

function setup() {
    for (var i = 0; i < erk; i++)  {
        matrix.push([]);
        for (var j = 0; j < bar; j++) {
            matrix[i][j] = 0
        }
    }

var c = 0
while(c < xotCount) {
    var x = Math.floor(random(0,erk));
    var y = Math.floor(random(0,bar));
    if(matrix[x][y] == 0) {
        matrix[x][y] = 1;
        c++;
    }
 }

var c = 0
while (c < eatCount) {
    var x = Math.floor(random(0,erk));
    var y = Math.floor(random(0,bar));
    if(matrix[x][y] == 0) {
        matrix[x][y] = 2;
        c++;
    }
 }
 var c = 0
 while (c < eatCount) {
     var x = Math.floor(random(0,erk));
     var y = Math.floor(random(0,bar));
     if(matrix[x][y] == 0) {
         matrix[x][y] = 3;
         c++;
     }
  }

  var c = 0
  while (c < eatCount) {
      var x = Math.floor(random(0,erk));
      var y = Math.floor(random(0,bar));
      if(matrix[x][y] == 0) {
          matrix[x][y] = 4;
          c++;
      }
   }

   var c = 0
   while (c < eatCount) {
       var x = Math.floor(random(0,erk));
       var y = Math.floor(random(0,bar));
       if(matrix[x][y] == 0) {
           matrix[x][y] = 5;
           c++;
       }
    }

                      
    noStroke()
    //frameRate(3);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');


    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 2) {
                var eatgrass = new Eatgrass(j, i, 2);
                eatArr.push(eatgrass);
            } else if (matrix[i][j] == 1) {
                var grass = new Grass(j, i, 1);
                xotArr.push(grass);
            } else if (matrix[i][j] == 3) {
                var gishatich = new Gishatich(j, i, 3);
                gishArr.push(gishatich);
            } else if (matrix[i][j] == 4) {
                var gevorg = new Gevorg(j, i, 4);
                gevArr.push(gevorg);
                } else if (matrix[i][j] == 5) {
                var patnesh = new Patnesh(j, i, 4);
                patArr.push(patnesh);
            }
        }
    }

}

    function draw() {
        background('#acacac');
        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 1) {
                    fill("green");
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 2) {
                    fill("orange");
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 3) {
                    fill("red");
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 4) {
                    fill("black");
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 0) {
                    fill('#yelow');
                    rect(j * side, i * side, side, side);
                }
            }
        }



        for (var i in xotArr) {
            xotArr[i].mul();
            
        }

        for (var i in eatArr) {
            eatArr[i].eat();
            
        }

        for (var i in gishArr) {
            gishArr[i].eat();
            
        }

        for (var i in gevArr) {
            gevArr[i].eat();
            
        }

    }
