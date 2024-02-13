/* voxesordenados */

function allVoxsDisplayComments(hover){
    let allVoxsDisplay = document.querySelectorAll('.vox')
    for (var i = 0; i < allVoxsDisplay.length; i++) {
        thisVoxComments = allVoxsDisplay[i].querySelector('.countComments')

        if (thisVoxComments){
            allVoxsDisplay[i].setAttribute("data-comments", thisVoxComments.innerHTML)
            if (hover){
                allVoxsDisplay[i].querySelectorAll('.voxComments')[0].style.display = "block"
            }
        }
    }
    return Array.from(allVoxsDisplay)
}
function allVoxsDisplayOrdered(hover){
    let allVoxsDisplayArray = allVoxsDisplayComments(hover)
    allVoxsDisplayArray.sort(function(a, b){return parseInt(b.dataset["comments"]||0.1) - parseInt(a.dataset["comments"]||0.1)})
    allVoxsDisplayArray.forEach(e => document.querySelector("#voxList").appendChild(e) ); 
}

function allVoxsDisplayScrolling(seconds, hover){
    let allVoxsDisplayScrolled = 0
    var allVoxsDisplayScroller = setInterval(function(){
        window.scrollTo(0, document.body.scrollHeight)
        allVoxsDisplayScrolled = allVoxsDisplayScrolled + 250
        if (allVoxsDisplayScrolled > parseInt(seconds||0.1)*1000){
            clearInterval(allVoxsDisplayScroller);
            allVoxsDisplayOrdered(hover)
            window.scrollTo(0, 0)
            return;
            
        }
    }, 250);
}

allVoxsDisplayScrolling(1, true)
