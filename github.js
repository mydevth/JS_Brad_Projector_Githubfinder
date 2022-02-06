class Github {
  constructor() {
    this.client_id = '6cd6045bac12816c2407';
    this.client_secret = 'bbbe3e70663a7ef3a608f7ab45e40f67831b5a82';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}