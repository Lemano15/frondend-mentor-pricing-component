let slider = document.querySelector('.slider');
let output = document.getElementById('priceValue');
let discountToggle = document.getElementById('discountToggle')
let discount = document.getElementById('discount')
let list = document.querySelector('#optionsContainer');
let viewOutput = document.getElementById('pageViewNumber')
let regularPrices = [8.00, 12.00, 16.00, 24.00, 36.00];
let discountPrices = [6, 9, 12, 18, 27]
let pageViewValues = ['10k ', '50k ', '100k ', '500k ', '1m ']
let priceIndex = 2;
let range = 50;

slider.oninput = function() {
    output.value = regularPrices[this.value]
    priceIndex = regularPrices.indexOf(regularPrices[this.value])
    output.innerHTML = output.value
    viewOutput.innerHTML = pageViewValues[this.value]
}

function discountAction(checkbox) {
    if (checkbox.checked) {
        discount.style.display = 'block'
        output.innerHTML = output.innerHTML - (output.innerHTML * .25)
        slider.oninput = function() {
            output.value = discountPrices[this.value]
            output.innerHTML = discountPrices[this.value]
            viewOutput.innerHTML = pageViewValues[this.value]
            priceIndex = regularPrices.indexOf(regularPrices[this.value])
        }
    } else {
        discount.style.display = 'none'
        output.innerHTML = regularPrices[priceIndex];
        slider.oninput = function() {
            output.value = regularPrices[this.value]
            priceIndex = regularPrices.indexOf(regularPrices[this.value])
            output.innerHTML = output.value
            viewOutput.innerHTML = pageViewValues[this.value]
        }
    }
}

slider.addEventListener('mousemove', function() {
    if ((!discountToggle.checked && regularPrices.indexOf(output.value) == 0) || discountPrices.indexOf(output.value) == 0) {
        range = 0
    }
    else if ((!discountToggle.checked && regularPrices.indexOf(output.value) == 1) || discountPrices.indexOf(output.value) == 1) {
        range = 25
    }
    else if ((!discountToggle.checked && regularPrices.indexOf(output.value) == 2) || discountPrices.indexOf(output.value) == 2) {
        range = 50
    }
    else if ((!discountToggle.checked && regularPrices.indexOf(output.value) == 3) || discountPrices.indexOf(output.value) == 3) {
        range = 75
    }
    else if ((!discountToggle.checked && regularPrices.indexOf(output.value) == 4) || discountPrices.indexOf(output.value) == 4) {
        range = 100
    }
    let color = "linear-gradient(90deg, hsl(174, 77%, 80%)" + range + "%, hsl(223, 50%, 87%)" + range +  "%)"
    slider.style.background = color;
})