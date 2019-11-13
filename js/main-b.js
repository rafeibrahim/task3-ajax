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
// After the loop print the HTML into <ul> element using innerHTML.
'use strict'

const ul = document.querySelector('ul');

const showImages = async (code) =>{
    console.log(code);
    const picArray =  await code;

     picArray.forEach(imageObject => {
        ul.innerHTML += `
        <li>
            <figure>
                <a href="img/original/${imageObject.mediaUrl}" ><img src="img/thumbs/${imageObject.mediaThumb}"></a>
                <figcaption>
                    <h3>${imageObject.mediaTitle}</h3>
                </figcaption>
            </figure>
        </li>
        `;
    });

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