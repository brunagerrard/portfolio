import React from 'react';

import './work-styles.css';

const githubAPI = "https://api.github.com/users/brunagerrard/repos";

function Work() {
  fetch(githubAPI)
  .then((response) => response.text())
  .then((result) => {

    const data = JSON.parse(result);
    
    data.map((each: { name: string; html_url: string; language: string; description: string; }) => {
      const {
        name,
        html_url,
        language,
        description
      } = each;

      var grid = document.getElementById("work-grid");

        var eachRepo = document.createElement("div");
            eachRepo.className = "eachRepo";

          var repoName = document.createElement("a");
              repoName.innerHTML = name;
              repoName.href = html_url;
            
          var repoLang = document.createElement("small");
              repoLang.innerHTML = language;

          var repoDesc = document.createElement("p");
              repoDesc.innerHTML = description;      

       grid?.appendChild(eachRepo);
       eachRepo?.appendChild(repoName);
       eachRepo?.appendChild(repoLang);
       eachRepo?.appendChild(repoDesc);

       if (name === 'brunagerrard') {
        eachRepo.style.display = 'none'
      }
    })
  });

  return (
    <section className="work" id="work-grid">

    </section>
  )
}

export default Work;