class Github{
  constructor(){
    this.client_id = 'aadcc8af4fe066d90307';
    this.client_secret = '7ff87dcbe362882eaf209954774b9f96b57289e3';
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?cliend_id${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return{
      profile
    }
  }
}