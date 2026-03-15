let input = prompt("What would you like to do??").toLowerCase();

const list = [];
while (input !== 'quit') {

    if (input == 'new') {
        let item = prompt('Enter the item to add in todo list!');
        console.log(`${item} is added in the list`)
        list.push(item);
    } else if (input == 'list') {
        console.log('*************')
        for (let i = 0; i < list.length; i++) {
            console.log(`${i}: ${list[i]}`)
        }
        console.log('*************')
    } else if (input == 'remove') {
        const index = parseInt(prompt('Okay, can you enter the index of item you want to delete??'));
        if (!Number.isNaN(index) && index <= list.length) {
            const deleteTodo = list.splice(index, 1);
            console.log(`OKay, ${deleteTodo} is deleted!`)
        }
        else {
            console.log('Unknown Index');
        }
    }
    input = prompt("What would you like to do??").toLowerCase();
}
console.log("OKAY, You Quit the App!")