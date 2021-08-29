const canvas = d3.select(".canvas")

//add svg element
const svg = canvas.append("svg")
            .attr("width", 100)
            .attr("height", 100)

const circle = svg.append("circle")
                .attr("cx", 50)
                .attr("cy", 50)
                .attr("r", 50)
                .attr("fill", "red")

const rect = svg.append("rect")
                .attr("width", 25)
                .attr("height", 25)
                .attr("x", (100/2) - 12.5)
                .attr("y", (100/2) - 12.5)
                .style('transform', "rotate(45deg)" )
                .style('transform-origin', "center" )

