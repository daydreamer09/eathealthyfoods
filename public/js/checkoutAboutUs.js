let name  = document.getElementById('name').innerHTML
let nextButton = document.getElementById('next')

nextButton.onclick = () => {
    localStorage.setItem('name')
    
}