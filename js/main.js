/* Your code starts here */

var app = app || {};

app.main = (function(){

	var tabelaPoema = [
		['De vermelho', 'de preto', 'de verde', 'de amarelo', 'de rosa', 'de turquesa', 'de azul', 'de roxo', 'de lilás', 'de azul marinho', 'de cor de burro quando foge'],
		['Flamejante', 'escaldante', 'militante', 'fumegante', 'chamejante', 'colorante', 'exuberante', 'deslumbrante', 'estafante', 'enfartante', ''],
		['Labaredas de fogo.', 'Calabresas de molho', 'Milanesas ao forno', 'panelas de molho', 'Carambolas em jogo', 'Sabonete Sococo', '', '', '', '', ''],
		['Olhos brilhantes', 'Bocas ', 'Feios Mirantes', 'Cocôs de feirante', '', '', '', '', '', '', ''],
		['Que sorriem', 'que riem', 'carpe diem', 'que auxiliem', 'que inebriem', 'que devaneiem', '', '', '', '', ''],
		['Com lábios rubros.', 'com braços brutus', 'com cílios burros', 'com seios ombros', 'com dentes sujos', 'com tíbios xucros', 'com pífios mucos', 'com enleios lustrus', '', '', ''],
		['Incêndios', 'homicidios', 'genocidios', 'subsidios', 'seios', 'interludios', '', '', '', '', ''],
		['Tomam contam de mim.', 'me possuem', 'introduzem em mim', 'em afogam', '', '', '', '', '', '', ''],
		['Minha mente', 'meu coração', 'minha vida', 'minha cabeça', 'meu cerebelo', 'meu céu', '', '', '', '', ''],
		['Minha alma.', 'meu espirito', 'minha teimosia', 'minha sinusite', 'meu nariz', 'meu chafariz', '', '', '', '', ''],
		['Tudo meu', 'comeu', 'tudo deus', 'grifo meu', 'pig meu', 'orra meu', 'comeu', 'pigmeu', 'o pau comeu', 'temeu', ''],
		['Em brasas.', 'em águas', 'em ferro', 'em louças', 'em flores', '', '', '', '', '', ''],
		['Meu corpo', 'anti corpo ', 'diabo no corpo', 'meu olho', 'Meu porco', 'Meu torso', 'Meu ovo', 'Meu caroço', 'Meu tremoço', 'Meu insoso', 'Meu pau grosso'],
		['Incendiado', 'pegando fogo', 'fervendo', 'pulsando', 'Lascado', 'Ensebado', 'Arrasado', 'Desgraçado', 'Fatiado', 'Emcabaçado', 'Chatiado'],
		['Consumido', 'feito', 'devorado', 'misturado', 'engolido', 'Dividido', 'Resumido', 'Enxerido', 'Fedido', 'Tolhido', 'Fudido'],
		['Dissolvido.', 'evaporado', 'desfeito', 'desligado', 'fido-dido', 'Diluido', 'Traido', 'Vivido', 'Sabido', 'Polido', 'Resolvido'],
		['Finalmente', 'incondicionalmente', 'gradativamente', 'paulatinamente', 'afe-mente', 'dualisticamente', 'eternamente', 'temente', '', '', ''],
		['Restam cinzas', 'evaporando', 'derretendo', 'deteriorando', '', '', '', '', '', '', ''],
		['Que espalho na cama', 'Que jogo na pia', 'Que boto em cana', 'Que vejo ', '', '', '', '', '', '', ''],
		['Para dormir. ', 'para redimir', 'para eximir', 'para possuir', 'para mimir', '', '', '', '', '', '']
	];

	var gerado = [];

	function poemaOriginal(){
		for(var i = 0; i < tabelaPoema.length; i++){
			$('#poesia').append('<p>'+ tabelaPoema[i][0] +'</p>');
		}		
	}

	function gerarPoema(){
		console.log('Called gerarPoema');
		$('#poesia').empty();		
		for(var i = 0; i < tabelaPoema.length; i++){
			var opcao = Math.round(Math.random()*tabelaPoema[0].length);
			gerado.push(opcao);
			$('#poesia').append('<p>'+ tabelaPoema[i][opcao] +'</p>');
		}
		console.log(gerado);
		var geradoString = gerado.join('-');
		console.log(geradoString);
	}

	function attachEvents(){
		console.log('Called attachEvents')
		$('#gerar-bt').off().on('click', function(){
			gerarPoema();
		});
	}

	var init = function(){
		console.log('Initializing app.');
		// poemaOriginal();
		attachEvents();
	};

	return {
		init: init
	};
		
})();

window.addEventListener('DOMContentLoaded', app.main.init);