let chain = document.querySelectorAll('#demo');
for(let i=0; i < chain.length; i++) {
    chain[i].addEventListener('click', function() {
        console.log(chain[i].innerText);
    });
}