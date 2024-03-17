document.addEventListener('DOMContentLoaded', () => {
  // Functions to open and close a modal
  function openModal($el) {
    $el.classList.add('is-active');
  }

  function closeModal($el) {
    $el.classList.remove('is-active');
  }

  function closeAllModals() {
    (document.querySelectorAll('.modal') || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  // Add a click event on buttons to open a specific modal
  (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(calendarModal);

    $trigger.addEventListener('click', () => {
      openModal($target);
    });
  });

  // Add a click event on various child elements to close the parent modal
  (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
    const $target = $close.closest('.modal');

    $close.addEventListener('click', () => {
      closeModal($target);
    });
  });

  // Add a keyboard event to close all modals
  document.addEventListener('keydown', (event) => {
    if(event.key === "Escape") {
      closeAllModals();
    }
  });
});

// Landing page login button event listeners

const loginButton = document.getElementById('landing-showlogin');
const memberSignin = document.getElementById('member-signin');
const SignupButton = document.getElementById('signupBtn');

loginButton.addEventListener('click', function() {
  memberSignin.classList.toggle('visible-form');
  console.log('clicked-member-login');
}
);

document.getElementById('signupBtn').addEventListener('click', function() {
  // Redirect to the Handlebars view URL
  window.location.href = '';
});

//creates discussion list
const USERID = {
  message: null,
  date: null
}

const userComment = document.querySelector(".usercomment");
const replyComment = document.querySelector(".replyComment");
const publishBtn = document.querySelector("#publish");
const publishReply = document.querySelector("#publishReply");
const local = document.querySelector(".local");
const userName = document.querySelector(".user");
const userNameReply = document.querySelector(".userReply");
const notify = document.querySelector(".notifyinput");

document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('addBtn');
  const myDiv = document.getElementById('discussionInput');

  toggleButton.addEventListener('click', function() {
    if (myDiv.classList.contains('hidden')) {
      myDiv.classList.remove('hidden');
    } else {
      myDiv.classList.add('hidden');
    }
  });
});

    userComment.addEventListener("input", e => {
        if(!userComment.value) {
            publishBtn.setAttribute("disabled", "disabled");
            publishBtn.classList.remove("abled")
        }else {
            publishBtn.removeAttribute("disabled");
            publishBtn.classList.add("abled")
        }
    })

    function addDiscussion() {
        if(!userComment.value) return;

        USERID.message = userComment.value;
        USERID.date = new Date().toLocaleString();
        let published = 
        `<div id="parents">
            <div id="comment1">
                <a href="api.html">
                <p id="discussionName">${USERID.message}</p>
                </a>
                <button onclick="deleteDiv1()">Delete</button>
                <br>
                <span class="date">${USERID.date}</span>
            </div>    
        </div>`

        local.innerHTML += published;
        userComment.value = "";
        publishBtn.classList.remove("abled")

        let commentsNum = document.querySelectorAll(".date").length;
        document.getElementById("discussion").textContent = commentsNum;


    }

    function deleteDiv1() {
      var element = document.getElementById("parents");
      var commentsNum = document.querySelectorAll(".date").length;
      element.remove();        
      // Update the text content of the element with the ID "discussion" to reflect the new count
      if (element) {
        element.remove();
        commentsNum--; // Decrease the discussion count
        document.getElementById("discussion").textContent = commentsNum;
        }
    };
    //when publish button is clicked discussion is posted
    publishBtn.addEventListener("click", addDiscussion);