//const socket = io()
  for (let i = 0; i < 50025; i++) {
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    document.body.appendChild(checkbox)
}


var checkboxes = document.querySelectorAll("input[type=checkbox]");
let enabledSettings = []
console.log(checkboxes.length)
checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    enabledSettings =
      Array.from(checkboxes)
    //  .filter(i => i.checked)
      //.filter(i => i.unchecked)
      .map(i => i.checked)

    console.log(enabledSettings)
    socket.emit('update-states', enabledSettings);
  })
});

socket.on('broadcast-message', function(data){
  checkboxes.forEach(function(checkbox,i){
    checkbox.checked=data[i]
  })
})
