// scroll function 1
document.getElementById('goToParibahanSection').addEventListener('click',function(){
    let paribahanSection = document.getElementById('paribahan');
    paribahanSection.scrollIntoView({behavior: "smooth"})
})