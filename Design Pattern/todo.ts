import { UUID } from "@UI/utils/common";

class Todo {
  public completed: boolean;
  public id: string;

  constructor(public text) {
    this.id = UUID();
    this.completed = false;
  }

  complete() {
    this.completed = true;
  }
}

export class TodoCard {
  id: string;
  todos: Todo[];
  constructor(public title: string) {
    this.id = UUID();
    this.todos = [];
  }
  //? add todo
  addTodo(text: string | number): void {
    this.todos.push(new Todo(text));
  }
  //? Mark todo complete
  completeTodo(id: string): void {
    const foundTodo: Todo = this.todos.find((x: Todo) => x.id === id);
    if (foundTodo) {
      foundTodo.complete();
    }
  }

  deleteTodo(id: string): void {
    this.todos.filter((x: Todo) => x.id === id);
  }
}


export class TodoCardBoard {
  static todoCards: TodoCard[];
  static addTodoCard(title: string) {
    this.todoCards.push(new TodoCard(title));
  }
  static getAllTodoCards(): TodoCard[] {
    return this.todoCards;
  }
}
