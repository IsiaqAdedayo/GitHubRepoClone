document.querySelector('.custom-select-wrapper').addEventListener('click', function() {
    this.querySelector('.custom-select').classList.toggle('open');
})

for (const option of document.querySelectorAll(".custom-option")) {
    option.addEventListener('click', function() {
        if (!this.classList.contains('selected')) {
            this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
            this.classList.add('selected');
            this.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = this.textContent;
        }
    })
}

window.addEventListener('click', function(e) {
    const select = document.querySelector('.custom-select')
    if (!select.contains(e.target)) {
        select.classList.remove('open');
    }
});



document.querySelector('.custom-select-wrapper').addEventListener('click', function() {
    this.querySelector('.language-select').classList.toggle('open');
})

for (const option of document.querySelectorAll(".language-option")) {
    option.addEventListener('click', function() {
        if (!this.classList.contains('selected')) {
            this.parentNode.querySelector('.language-option.selected').classList.remove('selected');
            this.classList.add('selected');
            this.closest('.language-select').querySelector('.language-select__trigger span').textContent = this.textContent;
        }
    })
}

window.addEventListener('click', function(e) {
    const select = document.querySelector('.language-select')
    if (!select.contains(e.target)) {
        select.classList.remove('open');
    }
});

let showMenu = document.querySelector(".navMobile");
let target = document.querySelector(".mobile-nav");

showMenu.addEventListener('click', () => {
    if (target.style.display === "block") {
        target.style.display  = "none";
  } else  {
        target.style.display = "block";
        height.style.minHeight = curHeight + "57.5vh"
  }
})


window.onscroll = function() {myFunction()};

let navbar = document.querySelector(".subNavDesktop");
let sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}












import {graphql} from 'https://cdn.pika.dev/@octokit/graphql'

const query = `
query { 
    user(login: "IsiaqAdedayo"){
      following(first: 20) {
          totalCount
          edges {
            node {
              id
            }
          }
        }
        followers(first: 20) {
          totalCount
          edges {
            node {
              id
            }
          }
        }
        avatarUrl
        bio
        email
        twitterUsername
        name
        login
        repositories(first: 20) {
          totalCount
          edges {
            node {
              name
              description
              createdAt
              languages(first: 20) {
                edges {
                  node {
                    name
                  }
                }
              }
            }
          }
        }
    }
  }
`



const token = '972be5856bcf95bc62545e9a093fdc4028ac76fd'


const auth = {
    headers: {
        authorization: 'token ' + token,
    }
}


const niceRequest = async (q, a) => await graphql(q, a)

niceRequest(query, auth).then((user) => {
    let data = (user.user)

   
    let bio = document.querySelector(".frontEnd");
    let picture = document.querySelector(".profile-details");
    let pictureDropdown = document.querySelector(".pictureDropdown");
    let profileName = document.querySelector(".profile-name");
    let email = document.querySelector(".profile-contact");
    let followCount = document.querySelector(".profile-contact");
    let repoTotal = document.querySelector(".repoPtag")
    let projects = document.querySelector(".repositories")


    bio.insertAdjacentHTML("afterbegin", `<p style="color: #636464"> ${data.bio} </p>`)
    picture.insertAdjacentHTML("afterbegin", `<img src=${data.avatarUrl} alt="profile_picture" width="150" height="150"/>` )
    pictureDropdown.insertAdjacentHTML("afterbegin", `<img src=${data.avatarUrl} alt="profile_picture" width="20" height="20"/>` )
    profileName.insertAdjacentHTML("afterbegin", `<h3>${data.name}</h3><p>${data.login}</p>`)
    email.insertAdjacentHTML("afterbegin", `<p><i class="fab fa-twitter"></i></i> ${data.twitterUsername}</p>`)
    email.insertAdjacentHTML("afterbegin", `<p><i class="far fa-envelope"></i> ${data.email}</p>`)
    followCount.insertAdjacentHTML("afterend", `<div class="followCount"><span><i class="fas fa-user-friends"></i> ${data.followers.totalCount} followers</span>.<span>${data.following.totalCount} following</span>.<span><i class="far fa-star"></i> 2</span></div>`)
    repoTotal.insertAdjacentHTML("afterend", `<div class="repositoriesSpan">${data.repositories.totalCount}</div>`)
    



    data.repositories.edges.map((repo) => {
        projects.insertAdjacentHTML("afterbegin", `<div class="repository">
        <div class="repo">
            <h3>${repo.node.name}</h3>
            <p>${repo.node.description}</p>
            <div class="repo-details">
                <h6><i class="fas fa-circle" style="color: yellow"></i>&nbsp;JavaScript</h6>
                <h6><i class="fas fa-balance-scale"></i>&nbsp; Apache License 2.0</h6>
                <h6>Updated on ${(repo.node.createdAt)}</h6>
            </div>
        </div>
        <div class="starDiv">
            <div class="star">
                <p><i class="far fa-star"></i>&nbsp;Star</p>
            </div>
        </div>
    </div>`)

    })


})



















