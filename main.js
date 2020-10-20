function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier=ml5.imageClassifier("MobileNet",modelLoaded);
}

function draw(){
  image(video,0,0,300,300);
  classifier.classify(video,getResults);
}

function modelLoaded(){
  console.log("Yay! It worked!");
}

function getResults(error,results){
  if (error){
     console.log(error);
   }
  else{
    console.log(results);
    document.getElementById("span1").innerHTML=results[0].label;
    x=100*results[0].confidence.toFixed(3);
    console.log(x);
    document.getElementById("span2").innerHTML=x+" %";
    
    
   }
}



