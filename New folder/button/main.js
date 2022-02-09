const headerVideo = document.querySelector('.header-video');

document.onreadystatechange = function(){
    if (document.readyState !== 'complete'){
        console.log('readyState is not complete');
        return;
    } else{
        console.log('readyState is complete');
        document.querySelector('.header-video').pause();
    }
};