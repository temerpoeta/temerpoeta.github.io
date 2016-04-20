/* Your code starts here */

var app = app || {};

app.main = (function(){

	var poema = [
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

	function poesia(){
		console.log('Called poesia');
		for(var i = 0; i < poema.length; i++){
			var option = Math.round(Math.random()*poema[0].length);
			$('body').append('<p>'+ poema[i][option] +'</p>');
		}
	}

	var init = function(){
		console.log('Initializing app.');
		poesia();
	};

	return {
		init: init
	};
		
})();

window.addEventListener('DOMContentLoaded', app.main.init);