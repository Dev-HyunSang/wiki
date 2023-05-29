# 20230525-What is DFS(Depth-First Search)?
DFS(깊이 우선 탐색, Depth-First Search)은 그래프의 모든 노드를 탐색하는 알고리즘 중 하나입니다. DFS는 그래프의 한 노드에서 시작하여 해당 노드와 인접한 노드를 우선적으로 탐색하고, 더 이상 탐색할 수 없을 때까지 깊이 들어가며 탐색을 진행합니다. 이후에는 탐색할 수 없는 상태가 되면 이전 단계로 돌아와 다른 경로로 탐색을 진행합니다.

DFS는 스택(Stack) 자료구조를 사용하여 구현할 수 있습니다. 혹은 재귀적인 방식으로도 구현할 수 있습니다.  
**알고리즘의 핵심 아이디어는 아래와 같습니다:**

1. 시작 노드를 방문하고, 해당 노드를 방문한 것으로 표시합니다.
2. 시작 노드와 인접한 노드들 중에서 방문하지 않은 노드를 임의로 선택합니다.
3. 선택한 노드를 시작 노드로 하여 재귀적으로 DFS를 진행합니다.
4. 더 이상 방문할 수 없는 상태가 되면 이전 단계로 돌아가서 다른 경로로 탐색을 진행합니다.
5. 모든 노드를 방문할 때까지 위 과정을 반복합니다.

DFS는 그래프 탐색, 미로 찾기, 연결 요소 확인, 위상 정렬 등 다양한 문제에서 활용될 수 있습니다. 그래프의 구조를 파악하고 깊이 우선으로 탐색하여 해결해야 하는 문제에 유용한 알고리즘입니다.

## DFS in Golang
다음은 DFS(Depth-First Search) 알고리즘을 Go 언어로 구현한 예시입니다:
```go
package main

import "fmt"

type Graph struct {
	vertices map[int][]int
}

func NewGraph() *Graph {
	return &Graph{
		vertices: make(map[int][]int),
	}
}

func (g *Graph) AddEdge(u, v int) {
	g.vertices[u] = append(g.vertices[u], v)
}

func DFS(g *Graph, start int) {
	visited := make(map[int]bool)
	stack := []int{start}

	for len(stack) > 0 {
		// Pop the top vertex from the stack
		v := stack[len(stack)-1]
		stack = stack[:len(stack)-1]

		if !visited[v] {
			fmt.Printf("%d ", v)
			visited[v] = true

			// Push the adjacent vertices of the current vertex onto the stack
			for _, adjacent := range g.vertices[v] {
				stack = append(stack, adjacent)
			}
		}
	}
}

func main() {
	graph := NewGraph()

	// Add edges to the graph
	graph.AddEdge(1, 2)
	graph.AddEdge(1, 3)
	graph.AddEdge(2, 4)
	graph.AddEdge(2, 5)
	graph.AddEdge(3, 6)
	graph.AddEdge(3, 7)

	startVertex := 1
	fmt.Printf("DFS traversal starting from vertex %d: ", startVertex)
	DFS(graph, startVertex)
	fmt.Println()
}
```
이 예제는 `Graph` 구조체를 사용하여 그래프를 표현하고, `AddEdge` 메서드를 통해 간선을 추가합니다. DFS 함수는 주어진 그래프에서 `DFS` 탐색을 수행하고, 방문한 정점을 출력합니다.

위 예제를 실행하면 `DFS` 탐색이 시작 정점(여기서는 1)부터 시작되어 방문한 정점들을 출력합니다.

참고: 이 예제는 간단한 방향성 그래프를 기반으로 작성되었습니다. 더 복잡한 그래프 구조에 대해 알고리즘을 수정하거나 확장해야 할 수 있습니다.