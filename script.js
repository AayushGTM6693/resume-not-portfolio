// turn pages when click next or previous button

const pageTurnBtn= document.querySelectorAll('.nextprev-btn')


pageTurnBtn.forEach((e,idx)=>{
    e.addEventListener('click',()=>{

        

        const pageTurnId = e.getAttribute('data-page')
        const pageTurn = document.getElementById(pageTurnId)
         
      if(pageTurn.classList.contains('turn')){

        pageTurn.classList.remove('turn')
        setTimeout(()=>{
            pageTurn.style.zIndex = 20 - idx;

        },1)
      }
      else {
        pageTurn.classList.add('turn')
        setTimeout(()=>{
            pageTurn.style.zIndex = 20 + idx;

        },1)
        
      }
    })
})

//contact me button when clicked

const pages = document.querySelectorAll('.book-page.page-right')
const firstPage = document.querySelector('.book-page.page-right.first')
const secondPage = document.querySelector('.book-page.page-right.second')


const contactMeBtn = document.querySelector('.btn.contact-me')

contactMeBtn.addEventListener('click',()=>{

    pages.forEach((_,index)=>{
        setTimeout(()=>{
            
           firstPage.classList.add('turn')
           secondPage.classList.add('turn')
         


            setTimeout(()=>{
                pages.style.zIndex = 20 + index
            },500)
        },(index+1)* 200 + 100)
    })
})

//create reverse index function
let totalPages = pages.length
let pageNumber = 0;

function reverseIndex(){
    pageNumber--;
    if(pageNumber < 0){
        pageNumber = totalPages - 1;
    }
}

//back profile button when click
const backProfileBtn = document.querySelector('.back-profile')

backProfileBtn.addEventListener('click',()=>{
    pages.forEach((_,index)=>{
        setTimeout(()=>{
            reverseIndex()
            pages[pageNumber].classList.remove('turn')

            setTimeout(()=>{
                reverseIndex();
                pages[pageNumber].style.zIndex = 10 + index;
            },500)
        },(index + 1)* 200 + 100)
    })

})

//opening animation
const coverRight = document.querySelector('.cover.cover-right')
const pageLeft = document.querySelector('.book-page.page-left')

//opening animation (cover right animation)

setTimeout(()=>{
    coverRight.classList.add('turn')
},2500)

setTimeout(()=>{
    coverRight.style.zIndex = -1;
},3000)
//opening animation for profile page 
 




//opening animation (all page right animation)

pages.forEach((_,index)=>{
    setTimeout(()=>{
        reverseIndex()
        pages[pageNumber].classList.remove('turn')

        setTimeout(()=>{
            reverseIndex();
            pages[pageNumber].style.zIndex = 10 + index;
        },500)
    },(index + 1)* 200 + 2500)
})
