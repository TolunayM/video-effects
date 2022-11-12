const mirrorButton = document.getElementById("mirror");
const blurButton = document.getElementById("blur");

const resetButton = document.getElementById("reset");
let video;
function setup(){
    //create canvas with webgl
    canvas = createCanvas(640,480, WEBGL);
    canvas.id('mycanvas');
    //create video capture

    video = createCapture(VIDEO);
    video.size(640,480);
    video.id('myvideo');


    // create seriouslyjs object, source and target
    let seriously = new Seriously();
    let src = seriously.source('#myvideo');
    let target = seriously.target("#mycanvas");

    //create effect and apply
    mirrorButton.addEventListener("click", () => {
        let mirror = seriously.effect('mirror');
    
        mirror.source = src;
        target.source = mirror;
    })

    blurButton.addEventListener("click", () => {
            //blur effect
    let blur = seriously.effect('blur');
    blur.source = src;
    target.source = blur;
    
    })

    resetButton.addEventListener("click",() => {
        
    })



    // initialize seriouslyjs
    seriously.go();

}