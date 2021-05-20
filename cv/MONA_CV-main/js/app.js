$(document).ready(function(){
    $('#profile_ripple').ripples({
        resolution: 512,
        dropRadius: 10,
    });



const bars = document.querySelectorAll('.progress_bar');


bars.forEach(function(bar){
    let percentage = bar.dataset.percent;
    let tooltip = bar.children[0];
    tooltip.innerText = percentage + '%';
    bar.style.width = percentage + '%';
})





const counters = document.querySelectorAll('.counter');



function runCounter () {
    counters.forEach(counter => {
        counter.innerText = 0;
        let target = +counter.dataset.count;
        let step = target / 10;

        

        let countIt = function() {
            let displayedCount = +counter.innerText;
            if(displayedCount < target) {
                counter.innerText = Math.ceil(displayedCount + step);
                setTimeout(countIt, 500);
            } else {
                counter.innerText = target;
            }
        }
        countIt();
    })

}
     

let counterSection = document.querySelector('.counter_section')

let options = {
    rootMargin : '0px 0px -200px 0px'
}
let done = 0;

const sectionObserver = new IntersectionObserver(function(entries){

if(entries[0].isIntersecting && done !== 1) {
    done = 1;
    runCounter();


    }
}, options)
sectionObserver.observe(counterSection);
        


         //image filter

         var $wrapper = $('portfolio_wrapper');

         //initializeisolation

        
         $wrapper.isotope({
             filter : '*',
             layoutMode : 'masonry',
             animationOptions : {
                 Duration: 750,
                 easing: 'linear'
             }
         });

         let links = document.querySelectorAll('.tabs a');
         
         links.forEach(link => {

            let selector = link.dataset.filter;
            console.log(selector)

             link.addEventListener('click', function(e) {
                 e.preventDefault();
                 
                 $wrapper.isotope({
                    filter : selector,
                    layoutMode : 'masonry',
                    animationOptions : {
                        Duration: 750,
                        easing: 'linear'
                    }
                 
                });
             })
         })
        
    });
 