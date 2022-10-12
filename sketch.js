function setup() {
  createCanvas(windowWidth,windowHeight);
  // background(0)
}

function draw() {
    background(0) //背景黑色
    stroke(255)
    noFill()
    rectMode (CENTER) //以方框中心點為座標點

    
    for(var j=0;j<(height/50);j++){
      for(var i=0;i<(width/50);i++){
        // for(var p=0;p<(width/50);p++){
          triangle(50+(i*10),20,30,50,20,30)
          ellipse(25+(i*50),25+(j*50),50+mouseX/10)
          stroke("#f15bb5") //線條
          rect(25+(i*50),25+(j*50),50)
          stroke(255) //線條顏色
          ellipse(50+(i*50),50+(j*50),25+mouseY/5)
        }
      }  
  }