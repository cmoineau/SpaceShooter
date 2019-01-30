function addText() {
	monTexte=document.getElementById('monTexte');
	titre=document.createElement('h1');
	titre.textContent = "Hello World";
	monTexte.appendChild(titre);

	maFact=document.getElementById('fact');
	content=document.createElement('p');
	content.textContent = "Résultat de fact" + String(n) + "=" + String(fact(9));
	maFact.appendChild(content);
}

function fact(n) {
	var res=1;
	for (var i = 1; i =<n; i++) {
		res=res*i;
	}
	return res;
}