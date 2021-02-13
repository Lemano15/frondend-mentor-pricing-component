let slider = document.getElementById('priceSlider');
let output = document.getElementById('priceValue');
let discountToggle = document.getElementById('discountToggle')
let discount = document.getElementById('discount')
let list = document.querySelector('#optionsContainer');
let viewOutput = document.getElementById('pageViewNumber')
let regularPrices = [8.00, 12.00, 16.00, 24.00, 36.00];
let pageViewValues = ['10k ', '50k ', '100k ', '500k ', '1m ']
let priceIndex = 2;

slider.oninput = function() {
    output.value = regularPrices[this.value]
    priceIndex = regularPrices.indexOf(regularPrices[this.value])
    output.innerHTML = output.value
    viewOutput.innerHTML = pageViewValues[this.value]
}

function discountPrices(prices) {
    let discountPrices = []
    for(let i = 0; i < prices.length; i++) {
        discountPrices.push(prices[i] - (prices[i]*.25))
    }
    return discountPrices
}

function discountAction(checkbox) {
    if (checkbox.checked) {
        discount.style.display = 'block'
        output.innerHTML = output.innerHTML - (output.innerHTML * .25)
        slider.oninput = function() {
            output.value = discountPrices(regularPrices)[this.value]
            output.innerHTML = discountPrices(regularPrices)[this.value]
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
    let range = slider.value
    let color = "linear-gradient(90deg, hsl(174, 77%, 80%)" + range + "%, hsl(223, 50%, 87%)" + range +  "%)"
    slider.style.background = color;
})