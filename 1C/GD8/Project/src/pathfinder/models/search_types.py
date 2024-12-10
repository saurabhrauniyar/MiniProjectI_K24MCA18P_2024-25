from enum import Enum


class Search(Enum):
    """Enum for search algorithms"""

    ASTAR_SEARCH = "A*"
    DIJKSTRAS_SEARCH = "DS"
    GREEDY_BEST_FIRST_SEARCH = "GBFS"
