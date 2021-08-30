const canvas = d3.select('.canvas')

let width = '100%';
let height = '100vh';

const endPoint = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson'
//const endPoint = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_day.geojson'

function timeStampToDate(mTime){
    let mDate = new Date(mTime)

    return mDate.toLocaleDateString('es-ES')
}

function getLastWord(words) {
    let n = words.split(" ");
    return n[n.length - 1];

}


const svg = canvas.append('svg')

svg.attr('width', width)
    .attr('height', height)

//Define div for ToolTip
const div = d3.select('body')
                .append('div')
                .attr('class', 'tooltip')
                .style('opacity', 0)

//Parse JSON
const getData = async () => {
    const response = await d3.json(endPoint)
    .then(res => {
        console.log(res)
        return res
    })
    return circleDraw(response)
}

getData()


const circleDraw = (data) => {
    const circle = svg.selectAll('circle')
                    .data(data.features)

    //Append enter selection to add new circles
    circle.enter().append('circle')
            .attr('cx', (d, i) => Math.floor(Math.random() * 200 + d.properties.mag * i))
            .attr('cy', (d, i) => Math.floor(Math.random() * 100) + d.properties.mag)
            .attr('r', (d, i, n) => {
                console.log(n[i])
                return d.properties.mag * 2
            })
            /* .style('top', 156) */
            .on("mouseover", (event, d, i, n) => {
                d3.select(event.currentTarget)
                    .transition()
                    .duration(100)//miliseconds
                    .style('opacity', 0.7)
                    
                div.transition()
                    .duration(200)
                    .style('opacity', 0.9)

                div.html(`
                    <p>Magnitude: ${d.properties.mag}</p>
                    <p>Time: ${timeStampToDate(d.properties.time)}</p>
                    <p>Where: ${getLastWord(d.properties.place)}</p>
                    <p>Tsunami: ${d.properties.tsunami === 1 ? 'Yes' : 'No'}</p>
                    `)
                    .style( 'left', (event.pageX + 28) + 'px')
                    .style( 'top', (event.pageY - 28) + 'px')
            })
            .on("mouseout", (event, d, i, n) => {
                d3.select(event.currentTarget)
                    .transition()
                    .duration(100)//miliseconds
                    .style('opacity', 1)

                div.transition()
                    .duration(200)
                    .style('opacity', 0)

                
            })
            .attr('fill', (d, i) => {
                if(d.properties.alert === null){
                    return 'blue'
                }else{
                    return d.properties.alert
                }
            })
            
    
}
