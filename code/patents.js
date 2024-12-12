
export async function loadPatents() {
    const response = await fetch('yml/patents.yml');
    const yamlText = await response.text();
    const data = jsyaml.load(yamlText);

    const publicationsList = document.getElementById('patents-list');

    data.patents.forEach(pub => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
        <li>
            <div class="publication-item">
               <!-- <img src="${pub.image}" alt="Paper Image" class="paper-image"> --!>
                <div class="publication-content">
                    <p class="title">
                            <strong>${pub.title}</strong>
                        </a>
                    </p>
                    <p class="authors">${pub.authors}</p>
                    <p class="conference">${pub.conference}</p>
                </div>
            </div>
        </li>
        `;
        publicationsList.appendChild(listItem);
    });
}
