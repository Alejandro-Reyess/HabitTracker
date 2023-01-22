const form = document.querySelector("form")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já incluso!!")
    return
  }

  alert("Adicionado com sucesso")
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("MyHabits@Alejandro", JSON.stringify(nlwSetup.data))
}

/* const data = {
  run: [
    "01-01",
    "01-02",
    "01-03",
    "01-04",
    "01-05",
    "01-06",
    "01-07",
    "01-08",
    "01-09",
    "01-10",
    "01-11",
    "01-12",
  ],
} */

const data = JSON.parse(localStorage.getItem("MyHabits@Alejandro")) || {}

nlwSetup.setData(data)
nlwSetup.load()
