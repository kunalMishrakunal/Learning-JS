//Let's descuse about the heap and stack memory

//stack === primitive data 
//heap === non primitive


let myyoutubename = "knla03"
let anothername = myyoutubename
anothername = "knla04"
console.log(anothername)
console.log(myyoutubename)

//in the above code we are storing the value of myyoutubename in anothername but when we change the value of anothername it does not change the value of myyoutubename because they are stored in different memory locations in the stack.

let user1 = {
    name: "radah",
    channel: "krishna"
}

let user2 = user1
user2.name = "ram"
console.log(user1.name)
console.log(user2.name)

//in the above code we are storing the reference of user1 in user2 but when we change the name property of user2 it also changes the name property of user1 because they are stored in the same memory location in the heap.