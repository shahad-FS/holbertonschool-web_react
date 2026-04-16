interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    console.log("Working from home");
    return "Working from home";
  }

  getCoffeeBreak(): string {
    console.log("Getting a coffee break");
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    console.log("Getting to director tasks");
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }
  workTeacherTasks(): string {
    return "Getting to work";
  }
}

function createEmployee(salary: number | string): Teacher | Director {
  if (typeof salary === "number" && salary < 500) return new Teacher();

  return new Director();
}


function isDirector(employee: TeacherInterface | DirectorInterface): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork(employee: DirectorInterface | TeacherInterface): string {
  let msg;

  if (isDirector(employee)) {
    msg = employee.workDirectorTasks();
  } else {
    msg = employee.workTeacherTasks();
  }

  console.log(msg);
  return msg;
}
