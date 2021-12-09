import write from "./assets/images/Write.png";
import search from "./assets/images/Search_.png";
import says from "./assets/images/Simon_says.png";
import imgFresh1 from "./assets/images/BBlok1.png";
import imgFresh2 from "./assets/images/BBlok2.png";
import imgFresh3 from "./assets/images/BBlok3.png";

export default class FakeData  {
   static pagesData = [
        {
            id: 0,
            image: write,
            name: 'Feature one',
            explanation: 'Aenean lacinia bibendum nulla sed consectetur' +
                'Vivamus sagittis lacus vel augue laoreet rutrum faucibus',
        },
        {
            id: 1,
            image: write,
            name: 'Feature two',
            explanation: 'Aenean lacinia bibendum nulla sed consectetur' +
                'Vivamus sagittis lacus vel augue laoreet rutrum faucibus',
        },
        {
            id: 2,
            image: search,
            name: 'Feature three',
            explanation: 'Aenean lacinia bibendum nulla sed consectetur' +
                'Vivamus sagittis lacus vel augue laoreet rutrum faucibus',
        },
        {
            id: 3,
            image: says,
            name: 'Feature four',
            explanation: 'Aenean lacinia bibendum nulla sed consectetur' +
                'Vivamus sagittis lacus vel augue laoreet rutrum faucibus',
        },
    ];

   static extensionsData = [
       {
           id: 0,
           image: imgFresh1,
           name: 'Fresh Summer Campaign',
           explanation: 'Cum sociis natoque penatibus et magnis dis' +
               'parturient montes, nascetur ridiculus mus. Lorem ' +
               'ipsum dolor sit amet, consectetur' +
               'adipiscing elit.Donec sed odio dui.' +
               'Vivamus sagittis lacus vel augue',
       },
       {
           id: 1,
           image: imgFresh2,
           name: 'Fresh Summer Campaign',
           explanation: 'Cum sociis natoque penatibus et magnis dis' +
               'parturient montes, nascetur ridiculus mus. Lorem ' +
               'ipsum dolor sit amet, consectetur' +
               'adipiscing elit.Donec sed odio dui.' +
               'Vivamus sagittis lacus vel augue',
       },
       {
           id: 2,
           image: imgFresh3,
           name: 'Fresh Summer Campaign',
           explanation: 'Cum sociis natoque penatibus et magnis dis' +
               'parturient montes, nascetur ridiculus mus. Lorem ' +
               'ipsum dolor sit amet, consectetur' +
               'adipiscing elit.Donec sed odio dui.' +
               'Vivamus sagittis lacus vel augue',
       },
       {
           id: 3,
           image: imgFresh1,
           name: 'Fresh Summer Campaign',
           explanation: 'Cum sociis natoque penatibus et magnis dis' +
               'parturient montes, nascetur ridiculus mus. Lorem ' +
               'ipsum dolor sit amet, consectetur' +
               'adipiscing elit.Donec sed odio dui.' +
               'Vivamus sagittis lacus vel augue',
       },
   ]
}

