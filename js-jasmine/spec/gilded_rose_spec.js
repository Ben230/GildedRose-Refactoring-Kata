var {Shop, Item} = require('../src/gilded_rose.js');

describe("Gilded Rose", function() {

  // beforeEach(function(){
  //
  // })

  it("has correct name", function() {
    const gildedRose = new Shop([ new Item("frog", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("frog");
  });

  it("degrades by 1 quality in normal conditions", function () {
    const gildedRose = new Shop([ new Item("frog", 1, 1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0);
  });

  it("degrades twice as fast after sellIn time has pasted", function () {
    const gildedRose = new Shop([ new Item("frog", 1, 5)]);
    let items;
    for (let i = 0; i<2; i++) {
      items = gildedRose.updateQuality();
    }
    expect(items[0].quality).toEqual(2);
  });

  it('can never deplete the quality below 0', function() {
    const gildedRose = new Shop([ new Item("frog", 1, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0);
  });

  it('Ages Brie increases its quality by 1 if not past sellIn day', function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 1, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(1);
  });

  it('Ages Brie increases its quality by 2 if past sellIn day', function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(2);
  });

  it('quality is never over 50', function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 1, 50) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(50);
  });

});
