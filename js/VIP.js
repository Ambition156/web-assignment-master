const items = document.querySelectorAll('.vip-select')

const VIPPrice = document.querySelector('.player-price')


function clearActive() {
  Array.prototype.forEach.call(items, function (item) {
   item.classList.remove('active')
  })
}

Array.prototype.forEach.call(items, function(item) {
  item.addEventListener('click', function() {
    clearActive()
    item.classList.add('active')
    const value = item.querySelector('.price').innerHTML
    VIPPrice.innerHTML = value
  })
})


