window.addEventListener('load', () => {

    const params = (new URL(document.location)).searchParams;
    const name = params.get('demo');

    document.getElementById('formGroupExampleInput4').innerHTML = name;
})