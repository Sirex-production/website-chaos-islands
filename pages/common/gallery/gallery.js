
function initGallery(){

    const observer = new IntersectionObserver((entities)=>{
        entities.forEach(e=>{
             
            if(e.isIntersecting){
                 e.target.play()
            }else{
                 e.target.pause()
            }
        })
    })

    const observableElements = document.querySelectorAll('.gallery-video');

    observableElements.forEach((e)=> observer.observe(e));

 
    observableElements.forEach(e=>{
        e.addEventListener('mouseenter', function() {
            e.pause();
        });
    });

    observableElements.forEach(e=>{
        e.addEventListener('mouseleave', function() {
            e.play();
        });
    });

    
}

