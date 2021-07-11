const clock = () => {
  const pad = (num) => num.toString().padStart(2, 0)

  const date = new Date()
  const hrs = date.getHours()
  const mins = date.getMinutes()
  const secs = date.getSeconds()

  const time = `${pad(hrs)}:${pad(mins)}`

  document.getElementById("hour").innerHTML = time
  setTimeout(clock, 1000)
}

clock()
