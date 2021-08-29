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