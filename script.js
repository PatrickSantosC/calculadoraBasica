const viewfinder = document.querySelector('.viewfinder');
const btns = document.querySelectorAll('.buttons-grid button');

let number1 = 0;
let operation = '';

btns.forEach(btn => {
  btn.addEventListener('click', handleClick)
})

function handleClick(event){
  const valueBtn = event.target.innerHTML
  const isClassOp = event.target.classList.contains('operation');
  const isClassResult = event.target.classList.contains('result');
  const isClassClear = event.target.classList.contains('clear');
  if(isClassOp){
    if(valueBtn == '=' && number1 !== 0){
      viewfinder.value = viewfinder.value !== '' ? result(number1, operation) : viewfinder.value
      number1 = 0
    }else if(isClassClear){
      clearInput()
    }else{
      getOperation(valueBtn)
    }
  }else{
    if(isNaN(viewfinder.value)){
      viewfinder.value = 'Número inválido'
      setTimeout(clearInput(), 500)
    }
    addNumberViewfinder(valueBtn)
  }
}

function addNumberViewfinder(value){
  viewfinder.value += value
}

function getOperation(signal){
  operation = signal
  number1 = viewfinder.value
  clearInput()
}

function result(num1, oper){
  switch(oper){
    case '+':
      return Number(num1) + Number(viewfinder.value)
      break
    case '-':
      return +num1 - +viewfinder.value
      break
    case '*':
      return +num1 * +viewfinder.value
      break
    case '/':
      return +num1 / +viewfinder.value
      break
  } 
}

function clearInput() {
  viewfinder.value = ''
}