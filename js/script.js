gsap.registerPlugin(ScrollTrigger);
gsap.from(".animationInicialTxt", {
    //duração da animação
    duration: 1.7,
    //opacidade que vai comçear a animação
    opacity: 0.1,
    //posição do y que via começar os elementos na animação
    y: -175,
    //posiçao do X que vai começar os elementos na animação
    // x: -1000,
    //tempo entre a animação dos elementos com a mesma classe
    stagger: 0.4

})
gsap.from(".animationInicialImg", {
    //duração da animação
    duration: 1.7,
    //opacidade que vai comçear a animação
    opacity: 0.5,
    //posição do y que via começar os elementos na animação
    // y: -175,
    //posiçao do X que vai começar os elementos na animação
    x: 1000,
    //tempo entre a animação dos elementos com a mesma classe
    stagger: 0.4

})
gsap.from(".animateArticle", {
    duration: 1.7,
    opacity: 0,
    x: -100,
    stagger: 0.2,
    delay: 1
})
gsap.from(".animateFinal", {
        scrollTrigger: "animateFinal ",
        duration: 0.9,
        opacity: 0,
        // y: -200,
        // delay: 0.5,
        stagger: 0.4
    })
    .to("animateFinal", {
        y: -200,
        duration: 2,

    }, "animateArticle+=50%")