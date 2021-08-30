const canvas = d3.select(".canvas")

//add svg element
const svg = canvas.append("svg")
            .attr("width", 100)
            .attr("height", 100)

//circle
const circle = svg.append("circle")
                .attr("cx", 50)
                .attr("cy", 50)
                .attr("r", 50)
                .attr("fill", "red")

//rect
const rect = svg.append("rect")
                .attr("width", 25)
                .attr("height", 25)
                .attr("x", (100/2) - 12.5)
                .attr("y", (100/2) - 12.5)
                //.style('transform', "rotate(45deg)"50
                //.style('transform-origin', "center" )

//line
const line = svg.append("line")
                .attr("x1", 0)
                .attr("y1", 0)
                .attr("x2", 100)
                .attr("y2", 100)
                .attr("stroke-width", 2)
                .attr("stroke", "black")

//text
const text = svg.append("text")
                .text("hello")
                .attr("fill", "white")
                .attr("font-size", "24px")
                .attr("font-family", "Arial")
                //.attr("text-anchor", "middle")
                .attr("x", (100/2))
                .attr("y", (100/2))
