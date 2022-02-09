const date = new Date();
const selectBoxYear = document.querySelector("#year")
const selectBoxMonth = document.querySelector("#month")
const selectBoxDate = document.querySelector("#date")

let selectedYear = date.getFullYear();
let selectedMonth = 1;

// selectBox에 년 추가
for(let i = 0; i < 3; i++){
  let option = document.createElement('option')
  option.textContent = date.getFullYear()-i;
  option.value = date.getFullYear()-i;
  selectBoxYear.append(option)
  createMonth()
}

// selectBox에 월 추가
function createMonth(){
  for(let i = 0; i < 12; i++){
    let option = document.createElement('option')
    option.textContent = 1 + i;
    option.value = 1 + i;
    selectBoxMonth.append(option)
  }
}

// 년도 설정
selectBoxYear.addEventListener("change", (e) => {
  selectedYear = e.target.value;
  createTotalDate(selectedYear, selectedMonth)
})

selectBoxMonth.addEventListener("change", (e) => {
  document.querySelector('#month2').innerText = e.target.value;
  selectedMonth = e.target.value;
  createTotalDate(selectedYear, selectedMonth)
})

// 요일 설정
function createTotalDate(year,month){
  const totalDate = new Date(year,month,0).getDate();
  for(let i = 1; i <= totalDate; i++){
    let option = document.createElement('option')
    option.textContent = i;
    option.value = i;
    selectBoxDate.append(option)
  }
}

// 날짜 선택
selectBoxMonth.addEventListener("change", (e) => { document.querySelector('#month2').innerText = e.target.value })


const totalIncome = document.querySelector("#totalIncome")
const totalExpenditure = document.querySelector("#totalExpenditure")
const totalBalance = document.querySelector("#totalBalance")

document.querySelectorAll('input[name=income]').forEach(
    income => addBlurEvent(income)
)

function addBlurEvent(cell){
  cell.addEventListener("blur",(e)=> calSum(e.target.name))
}

function calSum(names){
  const cellName = `input[name=${names}]`
  let total = 0;
  document.querySelectorAll(cellName).forEach((name)=> {
    if(!name.value) name.value = 0;
    total += parseInt(name.value)
  })

  const totalCellName = `#total${names[0].toUpperCase() + names.substring(1)}`
  document.querySelector(totalCellName).textContent = total;
}




function addRow(name) {
  const table = document.getElementById(name);

  //행 추가
  const newRow = table.insertRow();

  //Cell 추가
  const cell1 = newRow.insertCell();
  const cell2 = newRow.insertCell();
  const cell3 = newRow.insertCell();
  const cell4 = newRow.insertCell();

  //input 추가
  cell1.innerHTML = "<input type='text' class='tableCell' name='content'>";
  cell2.innerHTML = "<input type='number' class='tableCell' name='income'>";
  cell3.innerHTML = "<input type='number' class='tableCell' name='expenditure'>";
  cell4.innerHTML = "<input type='number' class='tableCell' name='balance'>";

  addBlurEvent(cell2.firstElementChild)
  addBlurEvent(cell3.firstElementChild)
  addBlurEvent(cell4.firstElementChild)

}

function addNotice(name) {
  const table = document.getElementById(name);

  //행 추가
  const newRow = table.insertRow();

  //Cell 추가
  const cell1 = newRow.insertCell();

  //input 추가
  cell1.innerHTML = "<input type='text' class='tableCell'>";
}

function deleteRow(name, rownum) {
  const table = document.getElementById(name);

  //삭제
  table.deleteRow(rownum);
}