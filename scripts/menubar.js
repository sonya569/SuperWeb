

var mOpen = document.getElementById("mOpen");
var mSave = document.getElementById("mSave");
var mExit = document.getElementById("mExit");
var mSimpleFigure = document.getElementById("mSimpleFigure");
var mTextFigure = document.getElementById("mTextFigure");
var mImageFigure = document.getElementById("mImageFigure");
var mAdd = document.getElementById("mAdd");
var mClose = document.getElementById("mDelete");
var mRename= document.getElementById("mRename");
var mDark = document.getElementById("mDark");
var mLight = document.getElementById("mLight");
var mSign = document.getElementById("mSign");
var mSynch = document.getElementById("mSynch");
var mEng = document.getElementById("mEng");
var mRus = document.getElementById("mRus");
var mAbout = document.getElementById("mAbout");
var mShowHelp = document.getElementById("mShowHelp");

setMenuActions(new xCommand());

function setMenuActions(command)
{
	mOpen.onclick = command.openFile;
	mSave.onclick = command.saveFile;
	mExit.onclick = command.exit;
	mSimpleFigure.onclick = command.addPlugin;
	mTextFigure.onclick = command.addPlugin;
	mImageFigure.onclick = command.addPlugin;
	mAdd.onclick = command.renameTab;
	mClose.onclick = command.renameTab;
	mRename.onclick = command.renameTab;
	mClose.onclick = command.closeTab;
	mDark.onclick = command.changeSkin;
	mLight.onclick = command.changeSkin;
	mSign.onclick = command.saveCloud;
	mSynch.onclick = command.loadCloud;
	mEng.onclick = command.changeLang;
	mRus.onclick = command.changeLang;
	mAbout.onclick = command.about;
	mShowHelp.onclick = command.showHelp;
}

