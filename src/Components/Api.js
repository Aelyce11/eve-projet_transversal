export default {
  getUsers: () => {
    return new Promise(resolve => {
      fetch('http://localhost:4000/users')
      .then(res => res.json().then(json => {console.log(json); resolve(json)}))
    })
  },

  register: (lastname, firstname, email, password) => {
    const data = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
    }

    fetch('http://localhost:4000/register', {
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify(data)
    })

  }






}