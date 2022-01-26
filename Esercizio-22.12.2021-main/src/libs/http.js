const BASE_URL = "https://edgemony-backend.herokuapp.com";

const http = (resource) =>
  fetch(BASE_URL + resource).then((response) => response.json());

const httpPOST = (resource, data) =>
  fetch(BASE_URL + resource, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());

const httpDELETE = (resource) =>
  fetch(BASE_URL + resource, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  }).then((response) => response.json());




  /* const fillFriendList = ()=>{
        let value = 0;
        const friendList = []
        const name = ["Jacob","Michael","Ethan","Joshua","Daniel","Alexander","Anthony",
        "William","Christopher","Matthew","Jayden","Andrew","Joseph","David","Noah","Aiden",
        "James","Ryan","Logan","John","Nathan","Elijah","Christian","Gabriel","Benjamin","Jonathan",
        "Tyler","Samuel","Nicholas","Gavin","Dylan","Jackson","Brandon","Caleb","Mason","Angel","Isaac",
        "Evan","Jack","Kevin","Jose","Isaiah","Luke","Landon","Justin","Lucas","Zachary","Jordan","Robert",
        "Aaron","Brayden","Thomas","Cameron","Hunter","Austin","Adrian","Connor","Owen","Aidan","Jason","Julian",
        "Wyatt","Charles","Luis","Carter","Juan","Chase","Diego","Jeremiah","Brody","Xavier","Adam","Carlos"]
        for(value in[...name]) {
          console.log(value)
            friendList.push({
                name:name[value],
                photo:`https://randomuser.me/api/portraits/men/${value}.jpg`
            })
        };

        friendList.map((friend)=>httpPOST('/friends',friend))
        
    } */
    
    

export { http, httpPOST, httpDELETE, };
