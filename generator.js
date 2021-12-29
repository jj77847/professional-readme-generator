const generateHTML = (answers) => {
  const {
    fullName,
    location,
    bio,
    profileImageUrl,
    email,
    githubUrl,
    linkedinUrl,
  } = answers;

  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <link rel="stylesheet" href="./assets/css/styles.css" />
      <title>Portfolio | ${fullName}</title>
    </head>
    <body>
      <header class="jumbotron">
        <h1>${fullName}</h1>
        <h2>${location}</h2>
      </header>
      <main class="container">
        <section class="border p-3 mb-4">
          <h2 class="text-center">Bio</h2>
          <hr />
          <div class="d-flex flex-row justify-content-between">
            <div>
              <img src="${profileImageUrl}" alt="profile image of ${fullName}" class="img-thumbnail" />
            </div>
            <div class="px-3">${bio}</div>
          </div>
        </section>
        <section class="border p-3 mb-4">
          <h2 class="text-center">Contact</h2>
          <hr />
          <div class="d-flex flex-row justify-content-evenly">
            <div>
              <a target="_blank" href="mailto:${email}" class="text-dark fs-2"
                ><i class="fas fa-envelope"></i
              ></a>
            </div>
            <div>
              <a target="_blank" href="${githubUrl}" class="text-dark fs-2"
                ><i class="fab fa-github"></i
              ></a>
            </div>
            <div>
              <a target="_blank" href="${linkedinUrl}" class="text-dark fs-2"
                ><i class="fab fa-linkedin"></i
              ></a>
            </div>
          </div>
        </section>
      </main>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"
      ></script>
    </body>
  </html>`;
};

module.exports = { generateHTML };
