function search(){
    var username= document.getElementById("username").value
    var result=document.getElementById("res")

    fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(data => {
      const { login ,html_url,public_repos,followers,following,twitter_username,company, location , name , blog , bio,avatar_url } = data;
          
      var output=`
      <div class="user-img">
      <img src="${avatar_url}">
      </div>
      <div class="user-name">
      <span>${login}</span>
      </div>
      <div class="user-login">
      <span>${name}</span>
      </div>
      <div class="user-bio">
      <label>Bio:</label>
      <br>
      <span>${bio}</span>
      </div>
      <div class="user-info">
      <div>
      <label>Repos</label>
      <br>
      <span>${public_repos}</span>
      </div>
      <div>
      <label>Followers</label>
      <br>
      <span>${followers}</span>
      </div>
      <div>
      <label>Following</label>
      <br>
      <span>${following}</span>
      </div>
      </div>
      
      <div class="user-blog">
      <a href="${blog}"><i class="bx bx-link"></i>${blog}</a>
      </div><div class="user-location">
      <span><i class='bx bx-location-plus' ></i>${location}</span>
      </div>
      <br>
      <div class="user-company">
      <span><i class='bx bx-building-house'></i>${company}</span>
      </div>
      <div class="user-twitter">
      <span><i class='bx bxl-twitter' ></i>${twitter_username}</span>
      </div>
    
      
      `
      result.innerHTML=output
      if(`${bio}` == null){
        result.innerHTML="<h1>Usuario não encontrado</h1>"
      }
    })

}