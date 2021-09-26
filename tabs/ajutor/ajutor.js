$(document).ready(function () {
  $(".submit").click(function (event) {
    let email = $(".email").val();
    let subject = $(".subject").val();
    let message = $(".message").val();
    let statusElm = $(".status");
    statusElm.empty();

    if (email.length < 5 || !email.includes("@") || !email.includes(".")) {
      event.preventDefault();
      statusElm.append("<div>Email is not valid</div>");
    }

    if (subject.length < 2) {
      event.preventDefault();
      statusElm.append("<div>Subject is not valid</div>");
    }

    if (message.length < 10) {
      event.preventDefault();
      statusElm.append("<div>Message is not valid</div>");
    }
  });
});
