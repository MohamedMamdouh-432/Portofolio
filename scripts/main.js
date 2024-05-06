const projectsContainer = document.getElementById("projects");

for (let i = 0; i < projectsList.length; i++) {
    //! div
    const div = document.createElement("div");
    div.style = "display: inline-block; width: 280px; margin: 5px";

    //! h3
    const title = document.createElement("h2");
    title.textContent = projectsList[i].title
    
    //! img
    const img = document.createElement("img");
    img.src = projectsList[i].img_path;
    img.style = "width: 250px; height: 250px";
    
    //! a
    const a = document.createElement("a");
    a.href = projectsList[i].url
    a.target = "_blank"
    a.append(img)

    //! p
    const description = document.createElement("p");
    description.textContent = projectsList[i].description

    //! pushing elements into div
    div.append(title);
    div.append(a);
    div.append(description);

    //! push div into projects div
    projectsContainer.append(div);
}
