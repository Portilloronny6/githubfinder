const github = new Github();

const ui = new UI();

const searchUser = document.querySelector("#searchUser");

searchUser.addEventListener("keyup", (event) => {
  const userText = event.target.value;

  if (userText !== "") {
    github.getUser(userText).then((user) => {
      if (user.profile.message === "Not Found") {
        //   Show Alert
        ui.showAlert("User not found", "alert alert-danger");
      } else {
        //   Show profile
        ui.showProfile(user.profile);
        ui.showRepos(user.repos);
      }
    });
  } else {
    //   Clear profile
    ui.clearProfile();
  }
});
