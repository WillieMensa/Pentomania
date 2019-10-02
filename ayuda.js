/*	=============================================================================
	Pentomino Puzzle
	archivo: ayuda.js
	21/9/2019

*/

//-------------------------------------------------------------------
function HelpLayer(){
	//	if (DEBUG){console.log(' en HaceConfigLayer() ');}

	var titleText = new Kinetic.Text({
		x: (gStage.getWidth() * 0.5),
		y: (gStage.getHeight() * 0.2),
		text: 'AYUDA DE PENTOMANIA',
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
		x: (gStage.getWidth() * 0.2),
		y: (gStage.getHeight() * 0.4),
		text: 
			'PENTOMANIA is a puzzle (rompecabezas) where you have to \n' + 
			'fit all twelve pentomino pieces in the given space.\n' +
			'There is a square 8 x 8 grid. That is 64 little squares.\n' +
			'You star with a piece that ocuppies 4 little squares already \n' +
			'placed. This piece is called tetromino.\n' +
			'Then you have 12 pieces that ocuppies 5 little square each. \n' +
			'These ones are called "pentominoes". Hence the name of the \n' +
			'game. You must cover the 60 uncovered little squares of the \n' +
			'grid with the 12 pentominoes.\n' +
			'Pieces may be rotated and flipped but not overlapped',
		fontSize: 0.5 * BLOCK_CELL_SIZE,			//	130,
		fontFamily: FONT_NIVEL3,	//	'Calibri',
		align: 'left',
		fill: TITLE_COLOR
	});
	//	simpleText.setOffset({
	//		x: simpleText.getWidth() / 2
	//	});


	gHelpLayer.add(titleText);
	gHelpLayer.add(simpleText);
	//	gHelpLayer.add(labelBtn);

	gStage.add(gHelpLayer);

};



function Help() {	

console.log('--------- Ayuda ------------');

hiddenAllButton();	//	oculta todos los botones

//	gStage
gBoardLayer.destroy();
gBackgroundLayer.destroy();
gMessageLayer.destroy();
gInitLayer.destroy();
//	gHelpLayer.destroy();
gAboutLayer.destroy();

HelpLayer();

menuBtn.style.visibility='visible';			//	menu ppal

}


