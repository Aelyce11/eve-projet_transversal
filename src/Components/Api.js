export default {
  getUsers: () => {
    return new Promise(resolve => {
      fetch('http://localhost:4000/users')
      .then(res => res.json().then(json => {console.log(json); resolve(json)}))
    })
  }






}