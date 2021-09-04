class Github {
  constructor() {
    this.apiKey = "d9308aacf8b204d361fd";
    this.secretKey = "84969aeef73956f4ec9e8716d1840532802bb81b";
    this.reposCount = 5;
    this.reposSort = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.apiKey}&client_secret=${this.secretKey}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.reposCount}&sort=${this.reposSort}&client_id=${this.apiKey}&client_secret=${this.secretKey}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos,
    };
  }
}
