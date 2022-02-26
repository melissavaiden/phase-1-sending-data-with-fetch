function submitData(userName, userEmail) {
    const configObj = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            "name": userName,
            "email": userEmail,
        })
    }
    return fetch('http://localhost:3000/users', configObj)
    .then (resp => resp.json())
    .then (body => newContent(body.id))
    .catch(response =>  document.body.append('Unauthorized Access'))
}

    function newContent(newID) {
    document.getElementsByTagName('body')[0].innerHTML = newID;
}