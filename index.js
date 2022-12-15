const galleryContainer = document.getElementById('gallery-container')
let isLiked = false
let isShared = false

// This listens to all the click on the document/page
document.addEventListener('click', function(e){
    if(e.target.dataset.heart){       //This will trigger only when the like or heart button is clicked
        isLiked = !isLiked
        render()
    }
    else if(e.target.dataset.share){  //This will trigger only when the share button is clicked
        isShared = !isShared
        render()
    }
})

function render(){ 
    
    let heartClass = ''
    let shareClass = ''
   
    // when the like button is clicked, 
    // the 'isLiked' will be set to true which triggers 
    // the 'if statement' in order to assign 
    // the CSS 'like' class to 'heartclass' variable
    // the same thing happens to the share button

    if(isLiked){  
        heartClass = 'liked'
    }
    
    if(isShared){
        shareClass = 'shared'
    }
       
// the 'hearClass' variable which holds the 
// CSS 'like' class is rendered to the page as shown
// and assigned to the 'imageHtml' variable
// together with the 'shareClass'

    let imageHtml = `
    		<div id="image-1" class="img-container">
			<img src="dino2.jpeg" alt="Man in front of dinosaur">
			<div class="social-icons-container">
				<i class="fa-solid fa-heart ${heartClass}" data-heart="image-1"></i>
				<i class="fa-solid fa-share ${shareClass}" data-share="image-1"></i>
			</div>
    `
    galleryContainer.innerHTML = imageHtml
}

render()