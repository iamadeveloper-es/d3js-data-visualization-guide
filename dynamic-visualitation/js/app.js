const canvas = d3.select(".canvas")

let dataArray = [4, 15, 34, 64]

const svg = canvas.select("svg")

const rect = svg.selectAll("rect")

rect.data(dataArray)
    .attr("fill", "orange")
    .attr("width", 50)
    .attr("height", (d) => {
        console.log(d)
        return d*2
    })
    .attr("x", (d, i) => {
        return i*51
    })
    .attr("y", (d, i) => {
        return 150 - d*2
    })

console.log(rect)

//Enter function
const canvas2 = d3.select(".canvas2")

let dataArray2 = [4, 15, 34, 64, 5, 31, 1.5, 15]

let dataObjArr = [
    {
        height: 4,
        width: 50,
        color: "green"
    },
    {
        height: 50,
        width: 50,
        color: "purple"
    },
    {
        height: 64,
        width: 50,
        color: "red"
    },
    {
        height: 21,
        width: 50,
        color: "black"
    },
    {
        height: 31,
        width: 50,
        color: "blue"
    }
]

const svg2 = canvas2.append("svg")
                    .attr("width", 600)
                    .attr("height", 300)

const rect2 = svg2.selectAll("rect")

rect2.data(dataObjArr)
    .enter().append("rect")
    .attr("fill", (d) => d.color)
    .attr("width", (d) => d.width)
    .attr("height", (d) => {
        console.log(d)
        return d.height*2
    })
    .attr("x", (d, i) => {
        return i * (d.width + 1)
        
    })
    .attr("y", (d, i) => {
        return 300 - d.height*2
    })

console.log(rect)