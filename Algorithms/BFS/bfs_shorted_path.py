'''
    Explanation:
        
'''

import collections

graph = { 'A': ['1','5'],
          '1': ['A','2'],
          '2': ['1', '3', '6'],
          '3': ['2', '4'],
          '4': ['3', '7'],
          '5': ['A', '8'],
          '6': ['2'],
          '7': ['4', '11'],
          '8': ['5', '9', '12'],
          '9': ['8'],
          '10': ['11', '14'],
          '11': ['7', '10'],
          '12': ['8', '15'],
          '13': ['14', '17'],
          '14': ['10', '13', '18'],
          '15': ['12', '16'],
          '16': ['15', '17'],
          '17': ['13', '16', '18'],
          '18': ['14', '17', 'B']}

# Find shortest path between 2 nodes of a graph using BFS
def bfs_shortest_path(graph, start, goal):
    # Keep track of explored nodes
    explored = []
    # Keep track of all the paths to be checked
    queue = collections.deque([start])

    # Return path if start is goal
    if start == goal:
        return "That was easy! Start = goal"
    # Keep looping until all posible paths have been checked
    while queue:
        # Pop the first path from the queue
        path = queue.popleft()
        # Get the last node from the path
        node = path[-1]
        if node not in explored:
            neighbours = graph[node]
            # Go through all neighbour nodes, construct
            # a new path and push it into the queue
            for neighbour in neighbours:
                if neighbour not in explored:
                    new_path = list(path)
                    new_path.append(neighbour)
                    queue.append(new_path)
                    # Return path if neighbour is goal
                    if neighbour == goal:
                        return new_path
            explored.append(node)

    return "So sorry, but a connecting path doesn't exist"

print bfs_shortest_path(graph, 'A', 'B')