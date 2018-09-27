app.factory('policeCharatureDetail', () => {
    var police = [
        {
            name: "黑羽 瞳",
            img: 'Img/head/polic02-black.png',
            bodyimg: 'Img/body/polic02-black.jpg',
            discrip: `
神警偵查部隊，高天原神話中的鴉天狗。
            `,
        }, {
            name: "孔 天賜",
            img: 'Img/head/polic-kon.png',
            discrip: `
神警武裝部隊，天庭神話中的魯籍仙，\n
武裝部隊中唯一的正派神話。\n
因為有仇災傾向，時常被藉由對練而痛毆，\n
曾讓緝示懷疑人事想殺死他。
            `,
        }, {
            name: `愛得萊德\n‧阿切爾`,
            img: 'Img/head/polic03-adlaida.png',
            bodyimg: 'Img/body/polic03-adlaida.jpg',
            discrip: `
神警醫療部隊，聖經神話大天使，\n
曾到蘭嶼島上找神約，跟東災禍主照過面，\n
目前常駐於中央山脈。
            `,
        }
    ];
    return police;
});