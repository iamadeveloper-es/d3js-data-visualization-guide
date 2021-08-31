const canvas = d3.select('.canvas')

//add svg element
const svg = canvas.append('svg')
            //.attr('width', '100%')
            //.attr('height', 600)
            .attr("viewBox", '0 0 600 600')
            .attr('preserveAspectRatio', 'xMaxYMax meet')

//Margins and Groups
const margin = {top: 20, right: 20, bottom: 70, left: 70}

const graphWidth = 600 - (margin.right - margin.left)
const graphHeight = 600 - (margin.top - margin.bottom)

//Creating a group
const graph = svg.append('g')

/* graph.attr('width', graphWidth)
    .attr('height', graphHeight)
    .attr('transform', `translate(${margin.left}, 0)`) */

const rect = graph.selectAll('rect')

d3.json('text.json')
    .then(res => {
        drawRect(res)
    })

const drawRect = (data) => {
    /* const y = d3.scaleLinear()
                .domain([0, 900])
                .range([0, 250]) */
    
    //Control y axis
    const y = d3.scaleLinear()
                .domain([0, d3.max(data, d => d.height)])
                .range([0, 300])
    
    //Control x axis 
    const x = d3.scaleBand()
                .domain(data.map(item => item.fill))
                .range([0, 600])
                .paddingInner(0.1)
                .paddingOuter(0.3)

    rect.data(data)
        .enter().append('rect')
        .attr('width', x.bandwidth)
        .attr('height', (d, i) => y(d.height))
        .attr('fill', (d, i) => d.fill)
        .attr('x', (d, i) => x(d.fill))
        .attr('y', (d, i) => 600 - y(d.height))
}

