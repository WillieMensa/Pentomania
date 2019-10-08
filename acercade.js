/*	=============================================================================
	Pentomino Puzzle
	archivo: acercade.js
	21/9/2019

*/

//-------------------------------------------------------------------
function AcercaDeLayer(){
	//	if (DEBUG){console.log(' en HaceConfigLayer() ');}

	var titleText = new Kinetic.Text({
		x: (gStage.getWidth() * 0.5),
		y: (gStage.getHeight() * 0.2),
		text: dict.txtAcercaTit,
		fontSize: 1.0 * BLOCK_CELL_SIZE,			//	130,
		fontFamily: FONT_NIVEL1,	//	'Calibri',
		fill: TITLE_COLOR,
		shadowColor: 'black',
		shadowBlur: 5,
		shadowOffset: [6,6],			//	2, 2],
		shadowOpacity:0.7
	});
	titleText.setOffset({
		x: titleText.getWidth() / 2
	});



	var simpleText = new Kinetic.Text({
		x: (gStage.getWidth() * 0.5),
		y: (gStage.getHeight() * 0.28),
		text: 'version ' + versionString + '\n\n' + dict.txtDescAcerca,		
		//		Es un conjunto de rompecabezas de encaje \n' +
		//		'desarrollados por Willie Verger Clever Games\n' +
		//		'con rutinas propias y de Simon Hung\n\n' +
		//		'Soporte: info@ingverger.com.ar\n' +
		//		'Web: ingverger.com.ar\n',
		fontSize: 0.5 * BLOCK_CELL_SIZE,			//	130,
		fontFamily: FONT_NIVEL3,	//	'Calibri',
		align: 'center',
		fill: TITLE_COLOR
	});
	simpleText.setOffset({
		x: simpleText.getWidth() / 2
	});


	gAboutLayer.add(titleText);
	gAboutLayer.add(simpleText);
	//	gConfigLayer.add(labelBtn);

	gStage.add(gAboutLayer);

};



function AcercaDe() {
//-----------------------------------------------------
//menu de status
//-----------------------------------------------------

	//	console.clear();
	console.log('--------- AcercaDe ------------');

	hiddenAllButton();	//	oculta todos los botones
	delLangButt();				//	esconde botones de idiomas


	//	gStage
	gBoardLayer.destroy();
	gBackgroundLayer.destroy();
	gMessageLayer.destroy();
	gInitLayer.destroy();
	gHelpLayer.destroy();
	gAboutLayer.destroy();
	//	gStatusLayer.destroy();

	AcercaDeLayer();

	menuBtn.style.visibility='visible';			//	menu ppal

}


