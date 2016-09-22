export class MockMarkets {
  createDb() {
    let markets = [
        {
            id: '1',
            name: 'market1',
            marketValue: 100.009
        },
        {
            id: '2',
            name: null, //no name on purpose, to test using ng-if
            marketValue: 200.01
        }
    ];
    return {markets};
  }
}
