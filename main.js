const pokemons = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
  "49",
  "50",
  "51",
  "52",
  "53",
  "54",
  "55",
  "56",
  "57",
  "58",
  "59",
  "60",
  "61",
  "62",
  "63",
  "64",
  "65",
  "66",
  "67",
  "68",
  "69",
  "70",
  "71",
  "72",
  "73",
  "74",
  "75",
  "76",
  "77",
  "78",
  "79",
  "80",
  "81",
  "82",
  "83",
  "84",
  "85",
  "86",
  "87",
  "90",
  "91",
  "92",
  "93",
  "94",
  "95",
  "96",
  "97",
  "98",
  "99",
  "102",
  "103",
  "104",
  "105",
  "108",
  "109",
  "110",
  "111",
  "112",
  "113",
  "115",
  "116",
  "117",
  "118",
  "119",
  "123",
  "125",
  "128",
  "129",
  "130",
  "131",
  "133",
  "134",
  "135",
  "136",
  "138",
  "139",
  "140",
  "141",
  "142",
  "143",
  "144",
  "145",
  "146",
  "147",
  "148",
  "149",
  "150",
  "151",
  "152",
  "153",
  "154",
  "155",
  "156",
  "157",
  "158",
  "159",
  "160",
  "161",
  "162",
  "163",
  "164",
  "165",
  "166",
  "167",
  "168",
  "169",
  "172",
  "175",
  "176",
  "179",
  "180",
  "181",
  "182",
  "185",
  "186",
  "187",
  "188",
  "189",
  "196",
  "197",
  "199",
  "200",
  "203",
  "204",
  "205",
  "206",
  "208",
  "212",
  "214",
  "225",
  "230",
  "234",
  "239",
  "241",
  "242",
  "243",
  "244",
  "245",
  "246",
  "247",
  "248",
  "251",
  "252",
  "253",
  "254",
  "255",
  "256",
  "257",
  "258",
  "259",
  "260",
  "261",
  "262",
  "263",
  "264",
  "265",
  "266",
  "267",
  "268",
  "269",
  "270",
  "271",
  "272",
  "273",
  "274",
  "275",
  "276",
  "277",
  "280",
  "281",
  "282",
  "285",
  "286",
  "302",
  "309",
  "310",
  "328",
  "329",
  "330",
  "349",
  "350",
  "353",
  "354",
  "371",
  "372",
  "373",
  "374",
  "375",
  "376",
  "382",
  "383",
  "384",
  "385",
  "386",
  "387",
  "388",
  "389",
  "390",
  "391",
  "392",
  "393",
  "394",
  "395",
  "396",
  "397",
  "398",
  "399",
  "400",
  "417",
  "429",
  "431",
  "432",
  "443",
  "444",
  "445",
  "447",
  "448",
  "462",
  "466",
  "468",
  "470",
  "471",
  "475",
  "501",
  "502",
  "612",
  "656",
  "657",
  "658",
  "700",
  "701",
  "720",
  "722",
  "723",
  "724",
  "744",
  "745",
  "778",
  "802",
  "807",
  "813",
  "884",
  "885",
  "886",
  "887",
  "909",
  "910"
]

let select = 1
let dataStar = JSON.parse(localStorage.getItem("dataStar")) ?? {}
let dataPoke = JSON.parse(localStorage.getItem("dataPoke")) ?? {
  1: [],
  2: [],
  3: [],
  4: [],
  5: []
}

const pokeName = document.getElementById("pokeName")
const pokeImage = document.getElementById("img")

async function pokeLoad(imput) {
  const req = await fetch(`https://pokeapi.co/api/v2/pokemon/${imput}`)
  const pokedata = await req.json()
  
  pokeName.innerHTML = `${pokedata.name} | ID: ${imput}<br> ${select}/${pokemons.length}`
  pokeImage.setAttribute("src", `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${imput}.png`)
  dataLoad()
}

function last() {
  if (select === 1) return
  pokeName.textContent = "Carregando..."
  select--
  pokeLoad(select)
}

function next() {
  if (select === pokemons.length) return
  pokeName.textContent = "Carregando..."
  select++
  pokeLoad(select)
}

function starRate(starP) {
  document.getElementById("remove").style.visibility = "visible"
  if (dataStar[select]) {
    if (dataStar[select].star === starP) return
    const current = dataStar[select].star
    const index = dataPoke[current].findIndex(f => f === `${select}`)
    
    dataPoke[current].splice(index, 1)
  }
  dataStar[select] = { star: starP }
  dataPoke[starP].push(`${select}`)
  console.log(JSON.stringify(dataPoke, null, 2))
  localStorage.setItem("dataStar", JSON.stringify(dataStar))
  localStorage.setItem("dataPoke", JSON.stringify(dataPoke))
  for (let i = 1; i <= 5; i++) {
    const star = document.getElementById(`star${i}`)
    if (i <= starP) {
      star.style.background = "#FFE900"
    } else {
      star.style.background = "black"
    }
  }
}

function dataLoad() {
  if (!dataStar[select]) {
    document.getElementById("remove").style.visibility = "hidden"
    for (let i = 1; i <= 5; i++) {
      const star = document.getElementById(`star${i}`)
      star.style.background = "black"
    }
  } else {
    for (let i = 1; i <= 5; i++) {
      document.getElementById("remove").style.visibility = "visible"
      const star = document.getElementById(`star${i}`)
      if (i <= dataStar[select].star) {
        star.style.background = "#FFE900"
      } else {
        star.style.background = "black"
      }
    }
  }
}

function remove() {
  const star = dataStar[select].star
  const index = dataPoke[star].findIndex(f => f === `${select}`)
  
  delete dataStar[select]
  dataPoke[star].splice(index, 1)
  
  localStorage.setItem("dataStar", JSON.stringify(dataStar))
  localStorage.setItem("dataPoke", JSON.stringify(dataPoke))
  dataLoad()
}

function sendList() {
  const dataStr = JSON.stringify(dataPoke, null, 2)
  fetch("https://rankpulantes-default-rtdb.firebaseio.com/.json?auth=dE729tOCl7nXyz1k5zY0se6P3MpMYdEYgQ9VbhFH", {
    method: "PUT",
    body: dataStr
  })
  const button = document.getElementById("send")
  button.textContent = "Enviado ✅"
  setInterval(() => button.textContent = "Enviar lista", 5000)
}

pokeLoad(1)