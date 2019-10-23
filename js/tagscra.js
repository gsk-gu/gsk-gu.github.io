function bubbleChart() {
    const width = 400;
    const height = 400;
    const centre = { x: width/2, y: height/2 };
    //该参数表示气泡出来时候的引力大小，也就是控制快慢的，可以根据宽高具体调整
    const forceStrength = 0.02;
  
    // these will be set in createNodes and chart functions
    let svg = null;
    let bubbles = null;
    let labels = null;
    let nodes = [];
    function charge(d) {
      return Math.pow(d.radius, 2.0) * 0.01
    }
    const simulation = d3.forceSimulation()
      .force('charge', d3.forceManyBody().strength(charge))
      // .force('center', d3.forceCenter(centre.x, centre.y))
      .force('x', d3.forceX().strength(forceStrength).x(centre.x))
      .force('y', d3.forceY().strength(forceStrength).y(centre.y))
      .force('collision', d3.forceCollide().radius(d => d.radius + 5));
  
    // force simulation starts up automatically, which we don't want as there aren't any nodes yet
    simulation.stop();
  
    // data manipulation function takes raw data from csv and converts it into an array of node objects
    // each node will store data and visualisation values to draw a bubble
    // rawData is expected to be an array of data objects, read in d3.csv
    // function returns the new node array, with a node for each element in the rawData input
    function createNodes(rawData) {
      const maxSize = d3.max(rawData, d => +d.size);
      const radiusScale = d3.scaleSqrt()
        .domain([0, maxSize])
        //此参数控制气泡的大小，表示气泡的半径范围
        .range([0, 50])
  
      const myNodes = rawData.map(d => ({
        ...d,
        radius: radiusScale(+d.size),
        size: +d.size,
        x: Math.random() * width,
        y: Math.random() * height
      }))
      return myNodes;
    }
  
    let chart = function chart(selector, rawData) {
      nodes = createNodes(rawData);
      svg = d3.select(selector)
        .append('svg')
        .attr('width', width)
        .attr('height', height)
      const elements = svg.selectAll('.bubble')
        .data(nodes, d => d.id)
        .enter()
        .append('g')
  
      //Container for the gradients
      var defs = svg.append("defs");
      var filter = defs.append("filter")
        .attr("id","glow");
  
      filter.append("feGaussianBlur")
        .attr("class", "blur")
        .attr("stdDeviation","4")
        .attr("filterUnits","userSpaceOnUse")
        .attr("result","coloredBlur");
  
      var feMerge = filter.append("feMerge");
      feMerge.append("feMergeNode")
        .attr("in","coloredBlur");
      feMerge.append("feMergeNode")
        .attr("in","SourceGraphic");
  
      bubbles = elements
        .append('circle')
        .classed('bubble', true)
        .attr('r', d => d.radius)
        .attr('fill', d => 'transparent')
        .attr('stroke', d => '#DD5246')
      labels = elements
        .append('text')
        .style('fill', '#DD5246')
      labels1 = labels  
        .append('tspan')
        .attr('dy', '-0.1em')
        .style('text-anchor', 'middle')
        .style('font-size', 14)
        .text(d => {
          //加此判断是避免字数太多而气泡的半径太小，盛不下
          if(d.size>100){
            return d.id
          }
        })
      labels2 = labels  
        .append('tspan')
        .attr('dy', '1.1em')
        .style('text-anchor', 'middle')
        .style('font-size', 12)
        .text(d => {
          //加此判断是避免字数太多而气泡的半径太小，盛不下，现在只能根据数值大小判断，这一点感觉不科学，应该根据半径判断
          if(d.size>100){
            return d.groupid
          }
        })
      simulation.nodes(nodes)
        .on('tick', ticked)
        .restart();
  
      d3.selectAll("circle")
          .style("filter","url(#glow)");
    }
    function ticked() {
      bubbles
        .attr('cx', d => d.x)
        .attr('cy', d => d.y)
      labels
        .attr('x', d => d.x)
        .attr('y', d => d.y)
      labels1
        .attr('x', d => d.x)
        .attr('y', d => d.y)  
      labels2
        .attr('x', d => d.x)
        .attr('y', d => d.y)  
    }
    return chart;
  }
  
  // new bubble chart instance
  let myBubbleChart = bubbleChart();
  const datadata=[
    // {id:'北京',groupid:'24.32%',size:900},
   
  ]
//   myBubbleChart('.inner-content',Tag.getJsonObj());
// function tagGo(rootName,jsonObj){
//     var myBubbleChart=bubbleChart();
//     myBubbleChart(rootName,jsonObj);
// }
