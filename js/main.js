let sectionCard = document.querySelector(".card-inf__content--inf");
let btnMain = document.querySelectorAll(".main__nav--li-a");
let modal = document.querySelector("#modal");
let tittle = document.querySelector(".card-inf__bg--tittle");

let contentTech = document.createElement("div");
contentTech.classList.add("card-inf__content--tech");

// functions

function contentMainCards(
  numTittleHead,
  tittleHead_1,
  tittleHead_2,
  _arrData1,
  _arrData2,
  classdiff_1,
  classdiff_2,
  classdiff_3
) {
  modal.classList.add("bg__modal--on");
  modal.classList.remove("bg__modal--off");
  modal.classList.add("bg__modal");
  tittle.textContent = btnMain[numTittleHead].textContent;

  let tittle_content = document.createElement("h2");
  tittle_content.classList.add('card-inf__content--h2')
  tittle_content.innerHTML = tittleHead_1;
  sectionCard.append(tittle_content);

  let fragment = document.createDocumentFragment();
  _arrData1.forEach((item) => {
    // console.log(item)
    let article = document.createElement("article");
    let imgContent = document.createElement("img");
    let textLink = document.createElement("a");

    article.classList.add(classdiff_1);
    imgContent.classList.add(classdiff_2);
    textLink.classList.add(classdiff_3);

    imgContent.setAttribute("src", `${item.src}`);
    textLink.innerText = `${item.text_content}`;

    article.appendChild(imgContent);
    article.appendChild(textLink);

    fragment.appendChild(article);
  });

  sectionCard.appendChild(fragment);

  // Para otra seccion en la card del modal

  let tittle_content2 = document.createElement("h2");
  tittle_content2.classList.add('card-inf__content--h2')

  tittle_content2.innerText = tittleHead_2;
  sectionCard.append(tittle_content2);

  let fragment_2 = document.createDocumentFragment();

  _arrData2.forEach((item) => {
    let article = document.createElement("article");
    let imgContent = document.createElement("img");
    let textLink = document.createElement("a");

    article.classList.add(classdiff_1);
    imgContent.classList.add(classdiff_2);
    textLink.classList.add(classdiff_3)

    imgContent.setAttribute("src", `${item.src}`);
    textLink.innerText = `${item.text_content}`;

    article.appendChild(imgContent);
    article.appendChild(textLink);

    fragment_2.appendChild(article);
  });

  sectionCard.appendChild(fragment_2);

  return;
}

// handlers

document.addEventListener("click", (e) => {

  switch (e.target.id) {
    case "tech":

    fetch('https://raw.githubusercontent.com/Elien-Dev/Elien-Dev/main/assets/objectsTech.json')
      .then(resp => resp.json())
      .then(objTech => {
        contentMainCards(
          0,
          `My stack of Frontend technologies`,
          `Upcomig technologies to add to stack`,
          objTech[0],
          objTech[1],
          'card-inf__content--art',
          'card-inf__content--i',
          'card-inf__content--a'
      );
    })
      break;

    case "skills":
      fetch('https://raw.githubusercontent.com/Elien-Dev/Elien-Dev/main/assets/objectsSkills.json')
      .then(resp => resp.json())
      .then(objSkills => {
        contentMainCards(1, `Hard Skills`, `Soft Skills`, objSkills[0], objSkills[1], 'card-inf__content--artS', 'card-inf__content--i', 'card-inf__content--a');
    })
      break;

    case "about-me":
      modal.classList.add("bg__modal--on");
      modal.classList.remove("bg__modal--off");
      modal.classList.add("bg__modal");
      tittle.textContent = btnMain[2].textContent;

      let fragmentAboutMe = document.createDocumentFragment()

      let tittleAbout = document.createElement('h2')
      tittleAbout.classList.add('card-inf__content--h2')
      tittleAbout.innerText = 'About Me'

      let paragraphAboutMe = document.createElement('p')
      paragraphAboutMe.classList.add('card-inf__content--p')
      paragraphAboutMe.innerText = 'I am a student of the last semesters of systems engineering, I am very motivated to learn more and more about web development and this leads me to be a self-taught learning person. I work in an organized way and work in situations under pressure. Able to offer solutions at the time of presenting some inconvenience in any situation.!'

      fragmentAboutMe.append(tittleAbout)
      fragmentAboutMe.append(paragraphAboutMe)

      sectionCard.appendChild(fragmentAboutMe)
      break;

    case 'projects':

      modal.classList.add("bg__modal--on");
      modal.classList.remove("bg__modal--off");
      modal.classList.add("bg__modal");
      tittle.textContent = btnMain[3].textContent;

      const urlProjects = 'https://raw.githubusercontent.com/Elien-Dev/Elien-Dev/main/assets/objectsProjects.json'

      fetch(urlProjects)
      .then(resp => resp.json())
      .then(objProjects => {
            let fragment_projects = document.createDocumentFragment()

            console.log(objProjects)

            objProjects.forEach( item => {

              let cardPjcts = document.createElement('figure'),
              contentImg = document.createElement('div'),
              pjctsImg = document.createElement('img'),
              wrapperInf = document.createElement('div'),
              tittlePjcts = document.createElement('h2'),
              artTech1 = document.createElement('article'),
              artTech2 = document.createElement('article')

              cardPjcts.classList.add('wrapper-fig')
              contentImg.classList.add('wrapper-fig__contentImg')
              pjctsImg.classList.add('wrapper-fig__contentImg-img')
              wrapperInf.classList.add('wrapper-fig__contentInf')
              tittlePjcts.classList.add('wrapper-fig__tittle')
              artTech1.classList.add('wrapper-fig__art1')
              artTech2.classList.add('wrapper-fig__art2')

              // ruta para las img

              pjctsImg.setAttribute('src', `${item.src}`)
              tittlePjcts.innerText = item.text_content
              artTech1.innerHTML = item.tech
              artTech2.innerHTML = item.description

              contentImg.appendChild(pjctsImg)
              cardPjcts.appendChild(contentImg)

              wrapperInf.appendChild(tittlePjcts)
              wrapperInf.appendChild(artTech1)
              wrapperInf.appendChild(artTech2)
              cardPjcts.appendChild(wrapperInf)

              fragment_projects.appendChild(cardPjcts)

            })
            sectionCard.appendChild(fragment_projects)
          })

    break;

    case "btn-close":
      modal.classList.remove("bg__modal--on");
      modal.classList.add("bg__modal--off");

      if (sectionCard.hasChildNodes()) {
        while (sectionCard.childNodes.length >= 1) {
          sectionCard.removeChild(sectionCard.firstChild);
        }
      }
      break;
  }
});

const url = '../assets/objectsTech.json'
