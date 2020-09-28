import React from 'react';
import GoBackBtn from '../../components/GoBackBtn';

import './work-styles.css';

const githubAPI = "https://api.github.com/users/brunagerrard/repos";

function Work() {
  fetch(githubAPI)
  .then((response) => response.text())
  .then((result) => {

    const data = JSON.parse(result);
    
    data.forEach((each: { name: string; html_url: string; language: string; description: string; }) => {
      const {
        name,
        html_url,
        language,
        description
      } = each;

      const grid = document.getElementById("work-grid");

        const eachRepo = document.createElement("div");        

          const repoLink = document.createElement("a");
              repoLink.href = html_url;
              repoLink.setAttribute('target','_blank');
              repoLink.setAttribute('rel','noopener noreferrer');
              repoLink.className = "repoLink";
              repoLink.style.background = `url(/images/${name}.png) no-repeat center`;
              repoLink.style.backgroundSize = "cover";

          const repoName = document.createElement("h1");
              repoName.innerHTML = name;
            
          const repoLang = document.createElement("small");
              repoLang.innerHTML = language;

          const repoDesc = document.createElement("p");
              repoDesc.innerHTML = description;

       grid?.appendChild(repoLink);
       repoLink?.appendChild(eachRepo);
       eachRepo?.appendChild(repoName);
       eachRepo?.appendChild(repoLang);
       eachRepo?.appendChild(repoDesc);

       if (name === 'brunagerrard' || name === 'portfolio' || name === 'front-end-jr') {
        repoLink.style.display = 'none'
      }
    })
  });

  return (
    <>
      <GoBackBtn />
      <h1 className="each-section-title">PROJETOS</h1>
      <section className="work" id="work-grid">
      
      </section>
    </>
  )
}

export default Work;