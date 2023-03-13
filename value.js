let chain = document.querySelectorAll('#demo');
for(let i=0; i < chain.length; i++) {
    chain[i].addEventListener('click', function() {
        alert(chain[i].innerText);
    });
}