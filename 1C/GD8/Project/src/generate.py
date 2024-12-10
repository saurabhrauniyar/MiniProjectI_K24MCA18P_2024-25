import random
from typing import Any, Callable
import pygame

from .animations import AnimatingNode, Animator
from .constants import CELL_SIZE, DARK, MIN_SIZE


GenerationCallback = Callable[[], None]


class MazeGenerator:

    def __init__(self, animator: Animator) -> None:
        from .maze import Maze

        self.animator = animator
        self.maze: Maze = animator.maze


    def basic_random_maze(self) -> None:
        """Generate a basic random maze
        """
        nodes = []
        for rowIdx in range(self.maze.width):
            for colIdx in range(self.maze.height):
                if random.randint(1, 10) < 8:
                    continue

                x, y = self.maze.coords[colIdx][rowIdx]
                nodes.append(
                    AnimatingNode(
                        rect=pygame.Rect(0, 0, MIN_SIZE, MIN_SIZE),
                        center=(x + CELL_SIZE // 2, y + CELL_SIZE // 2),
                        ticks=pygame.time.get_ticks(),
                        value="#",
                        color=DARK
                    )
                )

        self.maze.animator.add_nodes_to_animate(nodes, gap=2)