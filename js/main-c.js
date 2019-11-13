// Create function 'showImages' which
// loads images.json which has links to images as an array.

// create a loop which builds the following HTML from every image in the array: 
/*
<li>
    <figure>
        <a href="img/original/filename.jpg"><img src="img/thumbs/filename.jpg"></a>
        <figcaption>
            <h3>Title</h3>
        </figcaption>
    </figure>
</li>
*/
// Make the above HTML by using DOM methods.
// Create elements with createElement()
// Add attributes with setAttribute()
// Add elements with appendChild
// When the above HTML is ready append it to the <ul> element

'use strict'

const ul = document.querySelector('ul');

const showImages = async (code) =>{
    console.log(code);
    const picArray =  await code;

    for(let i = 0; i < picArray.length; i++){
        const imgObject = picArray[i];
      
        const fig = document.createElement('figure');

        const anchor = document.createElement('a');
        anchor.href = `img/original/` + imgObject.mediaUrl;

        
      
        const image = document.createElement('img');
        image.src = `img/thumbs/` + imgObject.mediaUrl;
        image.setAttribute('alt', 'some image');


        anchor.appendChild(image);
      
        const figCap = document.createElement('figcaption');
        //figCap.innerHTML = imgObject.mediaTitle;

        const imageHeading = document.createElement('h3');
        imageHeading.innerHTML = imgObject.mediaTitle;

        figCap.appendChild(imageHeading);
      
        fig.appendChild(anchor);
        fig.appendChild(figCap);
      
        ul.appendChild(fig);
      
      }

    //ul.innerHTML = await code;
};


const getFetchData = async (url) => {
    const response = await fetch(url);
    const result = await response.json();
    //console.log(result);
    //showImages(result);
    return result;
 };


 try{
     const code = getFetchData('./images.json');
     showImages(code);
 }catch (e){
    console.error(e);
 }
 
// getFetchData('images.html');
