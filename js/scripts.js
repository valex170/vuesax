function myFunction() {
    const dropdown = document.getElementById("myDropdown");
    const apps = document.querySelector(".apps");
    
    dropdown.classList.toggle("show");
    
    if (dropdown.classList.contains("show")) {
        apps.style.marginTop = "100px";
    } else {
        apps.style.marginTop = "0px";
    }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }

        const apps = document.querySelector(".apps");
        apps.style.marginTop = "0px";
    }
}


// ползунок слайдера цены

document.addEventListener('DOMContentLoaded', (event) => {
    const priceSlider = document.getElementById('priceSlider');
    const priceRange = document.getElementById('priceRange');

    noUiSlider.create(priceSlider, {
        start: [1.99, 4098],
        connect: true,
        range: {
            'min': 1.99,
            'max': 5600
        },
    });

    priceSlider.noUiSlider.on('update', function(values, handle) {
        priceRange.textContent = `${values[0]} - ${values[1]}`;
    });
});


document.querySelector('.btn-them-link').addEventListener('click', function(){
    const currentTheme = document.body.className
    if(currentTheme === 'light__theme'){
        document.body.className = 'dark__theme'
    }else{
        document.body.className = 'light__theme'
    }
});


