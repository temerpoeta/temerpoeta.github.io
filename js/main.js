/* Your code starts here */

var app = app || {};

app.main = (function(){

	var tabelaPoema = [
['De vermelho', 'De preto', 'De verde', 'De amarelo', 'De rosa', 'De turquesa', 'De azul', 'De roxo', 'De lilás', 'De azul marinho', 'De cor de burro quando foge', 'De rosa bebê', 'De azul maravilha', 'De off-white'],
['Flamejante', 'Escaldante', 'Militante', 'Fumegante', 'Chamejante', 'Colorante', 'Exuberante', 'Deslumbrante', 'Estafante', 'Enfartante', 'Coadjuvante', 'Aconchegante', 'Gotejante', 'Rastejante'],
['Labaredas de fogo', 'Calabresas de molho', 'Milanesas ao forno', 'Cabeleiras de molho', 'Carambolas em jogo', 'Sabonete Sococo', 'Vai Botafogo', 'Eu to de fogo', 'Rodas de pogo', 'Vermelho agogô', 'Sdds do Togo', 'Ta ardendo o flogo', 'Recalcadas adogo ', 'Vestida de Gorpo'],
['Olhos brilhantes', 'Boca irritante', 'Feios Mirantes', 'Cocôs de feirante', 'Testa de diamante', 'Suvacos de desodorante', 'Ombreiras exubeirantes', 'Fraldas e estimulantes', 'Umbigo retumbante', 'Orelhas de elefante', 'Costas escaldantes', 'Pés verossimilhantes', 'Perucas e corantes', 'Ganhos escoriantes'],
['Que sorriem', 'Que riem', 'Carpe diem', 'Que auxiliem', 'Que inebriem', 'Que devaneiem', 'Que miem', 'Que piem', 'Que angariem', 'Que prestigiem', 'Que presidiem', 'Que estropiem', 'Que vaiem', 'Que odeiem'],
['Com lábios rubros', 'Com braços brutus', 'Com cílios burros', 'Com seios ombros', 'Com dentes sujos', 'Com tíbios xucros', 'Com pífios mucos', 'Com sábios lustrus', 'Com joelhos dúbios', 'Com prévios jorros', 'Com crio logros', 'Popeye e Brutus', 'Com bigodes lusos', 'Com caros juros'],
['Incêndios', 'Homicidios', 'Genocidios', 'Subsidios', 'Seios', 'Interludios', 'Latifundios', 'Dispêndios', 'Selênios', 'Triênios', 'Betos e Ênios', 'Compêndios', 'Compêndio', 'Assédios'],
['Tomam conta de mim', 'Que possuem a mim', 'Introduzem em mim', 'Afogam em mim', 'Flor de jasmim', 'Amor e carmim', 'Que saem de mim', 'Fazem afronta a mim', 'Que colam em mim', 'Que choram em mim', 'Tomam a tonta de mim', 'Não fazem assim', 'Pingam nimim', 'Me deixa mirim'],
['Minha mente', 'Meu coração', 'Minha vida', 'Minha cabeça', 'Minha gente', 'Minha demente', 'Mina desmente', 'Minha ardente', 'Minha serpente', 'Minha servente', 'Minha tenente', 'No batente', 'Minha lente', 'Minha agente'],
['Minha alma', 'Meu espirito', 'Minha teimosia', 'Minha calma', 'Minha palma', 'Minha salma', 'Viva alma', 'Minha desalma', 'Me acalma', 'Corpo e alma', 'Minha palma', 'Minha fauna', 'Brian de palma', 'Viva alma'],
['Tudo meu', 'Tu comeu', 'Tudo deus', 'Grifo meu', 'Pig meu', 'Orra meu', 'Temeu', 'Tremeu', 'O pau comeu', 'Bartolomeu', 'Tu é meu', 'Entendeu', 'Odeio museu', 'Cedo leu'],
['Em brasas', 'Caralho de asas', 'Tem asas', 'Em casas', 'Em massas', 'Nas brasas', 'Casca grossas', 'Asquerosas', 'Voluptuosas', 'Desastrosas', 'Sem passas', 'De argamassa', 'Em casas', 'Em tuas casas'],
['Meu corpo', 'Teu corpo ', 'Diabo no corpo', 'Meu olho', 'Meu porco', 'Meu torso', 'Meu ovo', 'Meu caroço', 'Meu tremoço', 'Meu Porco Rosso', 'Meu pau grosso', 'Sou bom moço', 'Fedido e insoso', 'Meu fosso'],
['Incendiado', 'Pegando fogo', 'Fervendo', 'Chamuscado', 'Lascado', 'Ensebado', 'Arrasado', 'Desgraçado', 'Maquiado', 'Emcabaçado', 'Chatiado', 'Enviesado', 'Emparelhado', 'Enfiado'],
['Consumido', 'Feito', 'Devorado', 'Misturado', 'Engolido', 'Dividido', 'Resumido', 'Enxerido', 'Fedido', 'Tolhido', 'Fudido', 'Medido', 'Sofrido', 'Ressentido'],
['Dissolvido', 'Evaporado', 'Desfeito', 'Desligado', 'Dido-dido', 'Diluido', 'Traído', 'Vivido', 'Sabido', 'Polido', 'Resolvido', 'Bebido', 'Instruído', 'Cozido'],
['Finalmente', 'Incondicionalmente', 'Gradativamente', 'Ultimamente', 'Afe-mente', 'Dualisticamente', 'Eternamente', 'Temente', 'Esporadicamente', 'Infelizmente', 'Inconstitucionalissimamente', 'Redondamente', 'Enfadonhamente', 'Bovinamente'],
['Restam cinzas', 'Gastam as pingas', 'Com ojerizas', 'Restam lindas', 'E as ranzinzas', 'Restam balizas', 'Restam dindas', 'Difundidas', 'Sobram milhas', 'Somos ranzinzas', 'Bebi em Minas', 'Bazingas', 'Somos Maisas', 'Restam lendas'],
['Que espalho na cama', 'Que jogo na lama', 'Que boto em cana', 'Que vejo a trama', 'Dividindo a cama', 'Molhando a cama', 'Que solta a escama', 'Embaixo da cama', 'Rolando na cama', 'Pulando na cama', 'Deserto atacama', 'Chama o Ibama', 'Montado na lhama', 'Que minto minha fama'],
['Para dormir', 'Para redimir', 'Para eximir', 'Para possuir', 'Para mimir', 'Para cuspir', 'Para coibir', 'Para exprimir', 'Para reprimir', 'Para trair', 'Para Mi-Mir', 'para resumir', 'Para oprimir', 'Para o Walmir'],
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
			var nOpcoes = tabelaPoema[i].length;
			var opcao = Math.floor(Math.random() * nOpcoes);
			gerado.push(opcao);
			$('#poesia').append('<p>'+ tabelaPoema[i][opcao] +'</p>');
		}
		// console.log(gerado);
		var geradoString = gerado.join('-');
		// console.log(geradoString);
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