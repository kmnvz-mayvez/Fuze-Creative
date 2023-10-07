function play(idx) {
  var audio = document.getElementById("audio" + idx);
  audio.muted = false;
  audio.play();
}

function pause(idx) {
  var audio = document.getElementById("audio" + idx);
  audio.muted = true;
  audio.pause();
}

function onSubmit(e) {
  e.preventDefault();

  var formData = new FormData(document.getElementById("myForm"));

  var name = formData.get("name");
  var email = formData.get("email");
  var username = formData.get("username");
  var address = formData.get("address");
  var gender = formData.get("gender");
  var region = formData.get("region");
  var category = formData.get("category");
  var file = formData.get("file");

  if (name === "") alert("Name must be filled");
  else if (name.length < 5 || name.length > 20)
    alert("Name must be at least 5 - 20 character long");
  else if (!checkAlpha(name)) alert("Name must be alphabet only");
  else if (email === "") alert("Email must be filled");
  else if (!email.includes("@")) alert("Email must contain sign (@)");
  else if (!email.endsWith(".com")) alert("Email must ends with (.com)");
  else if (username === "") alert("Username must be filled");
  else if (address === "") alert("Address must be filled");
  else if (!address.includes("street")) alert("Address must contain street");
  else if (gender === "") alert("Gender must be selected");
  else if (region === "") alert("Region must be selected");
  else if (category === "") alert("Music Category must be selected");
  else if (file === "") alert("Display Picture must be filled");
  else alert("Success Register");
}

function checkAlpha(str) {
  for (let i = 0; i < str.length; i++) {
    if (!((str[i] >= "A" && str[i] <= "Z") || (str[i] >= "a" && str[i] <= "z")))
      return false;
  }
  return true;
}

function checkAlphaNum(str) {
  for (let i = 0; i < str.length; i++) {
    if (
      !(
        (str[i] >= "A" && str[i] <= "Z") ||
        (str[i] >= "a" && str[i] <= "z") ||
        (str[i] >= "0" && str[i] <= "9")
      )
    )
      return false;
  }
  return true;
}
