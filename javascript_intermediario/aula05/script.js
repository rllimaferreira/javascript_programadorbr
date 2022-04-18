let p = document.getElementById("p1");

p.innerHTML = "Novo conteúdo";

p.innerText = "Conteúdo mais novo";

p.textContent = "Mais novo ainda";

p.innerContent = "<h2>tem um h2 dentro do p</h2>";

p.innerContent = "<h2>tem um h2 dentro do p</h2>";

p.innerText = "<h3>tem um h3 dentro do p</h3>";

p.innerHTML = "<h3>tem um h3 dentro do p</h3>"; // Coloca realmente um elemento h3 dentro do parágrafo

p.style = "color:blue";

// Para fazer o teste no console do navegador:

// let meuAtt = p.getAttribute("meuAtt");
// meuAtt;

// Como modificar o conteúdo de um elemento
p.setAttribute("meuAtt", "Outro nome");

p.style.backgroundColor = "red";