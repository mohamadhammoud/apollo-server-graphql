import tasks from "../database/tasks.data";

export default {
  Query: {
    tasks: () => {
      return tasks;
    },
    task: (_: any, { id }: { id: string }) => {
      const task = tasks.find((task) => task.id == id);
      return task;
    },
  },
  Task: {
    user: ({ userId }: { userId: string }) => {
      return tasks.find((task) => task.userId == userId);
    },
  },
};
