function passval()
{
    var selecttext=document.getElementById('demo');
    localStorage.setItem('name', selecttext);
    return true;
}