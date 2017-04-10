# Graph defined as array adjacent
graph = {'A': set(['B', 'E', 'C']),
         'B': set(['A', 'D', 'E']),
         'C': set(['A', 'F', 'G']),
         'D': set(['B', 'E', 'F']),
         'E': set(['A', 'B', 'D']),
         'F': set(['C', 'D']),
         'G': set(['C'])}

# Return all graphs from start to goal
def dfs_paths(graph, start, goal):
    # Define stack variable
    stack = [[start]]
    # Do the process while there are paths to follow
    while stack:
        path = stack.pop()
        node = path[-1]
        for next in graph[node] - set(path):
            # If a correct path is founded, then return the path with the generator
            # else write a new path and follow iterating.
            if next == goal:
                yield path + [next]
            else:
                stack.append(path + [next])

# Print paths
print list(dfs_paths(graph, 'A', 'F'))