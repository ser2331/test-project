export default class Types {
    static routing = [
        { id: 0, key: 'home', path: '/' },
        { id: 1, key: 'pages', path: '/pages' },
        { id: 2, key: 'features', path: '/features' },
        { id: 3, key: 'extensions', path: '/extensions' },
        { id: 3, key: 'tutorials', path: '/tutorials' },
        { id: 4, key: 'plug', path: '/plug' },
    ];

    static routingMap = Types.routing.reduce((acc, item) => acc.set(item.key, { ...item }), new Map());

    static appSizes = [
        { id: 0, key: 'mobile', size: 360 },
        { id: 1, key: 'tablet', size: 768 },
        { id: 2, key: 'desktop', size: 1152 },
        { id: 3, key: 'large', size: 1440 },
    ];

    static appSizesMap = Types.appSizes.reduce((acc, item) => acc.set(item.key, { ...item }), new Map());

}
