//const socket = io()
  for (let i = 0; i < 100050; i++) {
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.name = 'checkbox'
     document.body.appendChild(checkbox)
}


var checkboxes = document.querySelectorAll("input[type=checkbox]");
let enabledSettings = []
console.log(checkboxes.length)
checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    enabledSettings =
      Array.from(checkboxes)
      .filter(i => i.checked)
      .map(i => i.value)

    console.log(enabledSettings)
    socket.emit('update-states', enabledSettings);
  })
});
