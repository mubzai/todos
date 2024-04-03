import inquirer from "inquirer"


let todos = []
let condition = true;
while(condition)
{let todosquestions=await inquirer.prompt( 
[    
           {
             name:"todos",
             type:"input",
             message:"what would you like to add in your todos?"
           }, 

{
    name:"todosq2",
    type:"confirm",
    message:"would you like to add more in your todos?",
    default:"true "
}
]

)
todos.push(todosquestions.todos)
console.log(todos)
condition = todosquestions.todosq2
}

