(function () {
    let app, canvas;
    const matMenu = document.querySelector('.materialMenu');
    matMenu.addEventListener('click', clickMenu);

    function initialize() {
        canvas = document.getElementById("canvas");

        //Create new NunuApp intance
        app = new NunuApp(canvas);
        //Load and run nsp file
        app.loadRunProgram("blockbuilder-6.nsp");
    }

    //Resize window
    function resize() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        app.resize();
    }

    document.addEventListener("DOMContentLoaded", () => {
        initialize();
        resize();
    });
    window.addEventListener("resize", () => {
        resize();
    });

    function clickMenu(e){
        e.preventDefault();
        if(e.target.classList.contains('btn')){
            let data = e.target.id; //'data' is the ID of the .btn element
            app.sendData(data); //sendData method visible here
        }
    }
}())

