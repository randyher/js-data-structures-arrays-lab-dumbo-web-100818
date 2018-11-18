const drivers = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendDriver(item){
  drivers.push(item)
}

function destructivelyPrependDriver(item){
  drivers.unshift(item)
}

function destructivelyRemoveLastDriver(){
  drivers.pop()
}

function destructivelyRemoveFirstDriver(){
  drivers.shift()
}

function appendDriver(item){
  let new_drivers = [...drivers, item]
  return new_drivers
}

function prependDriver(item){
  let new_drivers = [item, ...drivers]
  return new_drivers
}

function removeLastDriver(){
  let new_drivers = drivers.slice(0, drivers.length - 1)
  return new_drivers
}

function removeFirstDriver(){
  let new_drivers = drivers.slice(1)
  return new_drivers
}
