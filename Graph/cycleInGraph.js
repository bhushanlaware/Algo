function cycleInGraph(edges) {
  // Write your code here.
	const queue=[0];
	const visited=new Array(edges.length).fill(0);
	while(queue.length){
		const current= queue.shift();
		if(visited[current]){
			return true;
		}
		else{
			visited[current]=true;
			edges[current].forEach(x=>{
				queue.push(x);
			});
			
		}
	}
  return false;
}

const out=cycleInGraph( [
  [1, 2],
  [2],
  []
]);

console.log(out)