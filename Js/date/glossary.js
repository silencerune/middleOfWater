app.factory('glossaryDetail', () => {
    var glossary = [{
        name: "噬神種年",
        img: 'Img/head/north00-master.png',
        bodyimg: 'Img/body/glossary.jpg',
        discrip: `
以神為糧者為黃眸，\n
以人為糧則為赤眸，\n
按照雙方人數消長而改變主食者，\n
稱為擺盪種，\n
噬神種:白鱗、竹青\n
擺盪種:鴉青、藕荷
        `,
    }, {
        name: "神約災契",
        img: 'Img/head/glossary01.jpg',
        bodyimg: 'https://truth.bahamut.com.tw/s01/201603/daa9adef7c4c43f5e81fa2764b569cc8.PNG',
        discrip: `
同一神話分成兩個勢力，\n
神那方持有神約，災禍方持有災契\n

神話戰爭以此做為目標，\n
神那方搶奪神約，災禍搶奪災契，\n
一旦契約被搶，信仰會轉移，\n
勝者會更加茁壯，敗者則會沒落甚至消失，\n
好一點的則變為災禍繼續存在\n
        `,
    }, {
        name: "零期仙班",
        img: 'Img/head/glossary02.jpg',

        discrip: `
曾經因種種原因，\n
白鱗報復性的闖天宮獵食，\n
造成數年玉帝與高位仙官年年洗牌，\n
仙籍數量數百年來首次到達『該有的數量』，\n
然而繁華太久，即便補上所有仙班，\n
也無法支撐原本的錦衣玉食，\n
因此，無差別徵招有仙骨的人類入仙班，\n
人手不足讓該期仙班只看能力不看背景，\n
但因為未經篩選，被其他仙籍認為良莠不齊，\n
最不願承認的仙班，因此稱為『零期仙班』\n

        `,
    },


    ];
    return glossary;
});