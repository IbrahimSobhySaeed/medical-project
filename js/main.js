$(document).ready(function(){

    let nums=document.querySelectorAll('.work-box p');
    let nav=document.getElementById('navbar');


    window.onscroll=function(){
        if(window.scrollY<600){
           nav.classList.add("fixed-top");
         
          
        }
        else{
            nav.classList.remove("fixed-top");
           
        }
    }

    console.log(nav);

    nums.forEach((num)=>{
        startCount(num);
    });

    function startCount(el){
        let goal=el.dataset.counter;
        let count=setInterval(()=>{
            el.textContent++;
            if(el.textContent == goal){
                clearInterval(count);
            }
        },2000/goal)

    };


   

})


$('.Kind').click(function() {




    let value = $(this).attr('data-filter');
    console.log(value)

    if (value == 'All') {
        $('.box-image').show("1000")
    } else {
        $('.box-image').not('.' + value).hide("1000");
        $('.box-image').filter('.' + value).show("1000");
        // $('.btn').addClass("text-light");

        // $(this).addClass("menuActive").siblings().removeClass("menuActive");


    }
})
