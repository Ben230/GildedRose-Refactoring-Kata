class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {

  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {

    // for (var i = 0; i < this.items.length; i++) {
    //   if (this.isQualityPositive(this.items[i].quality) {
    //
    //     this.changeQuality(this.items[i], -1);
    //   }
    // }


    for (var i = 0; i < this.items.length; i++) {
      // refactor to jsut include backstage pass
      if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.isQualityPositive(this.items[i].quality)) {
          if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
            this.changeQuality(this.items[i], -1);
          }
        }
      } else { // if aged bri *or* baxckstage passes
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1;
          if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
          }
        }
      }
      // refactor to just include Sulfuras
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != 'Aged Brie') {
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                this.items[i].quality = this.items[i].quality - 1;
              }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
      }
    }

    return this.items;
  }

  isQualityPositive(quality) {
    if (quality > 0) {
      return true;
    }
    return false;
  }

  changeQuality(item, amount) {
    item.quality += amount;
  }

}

module.exports = {
  Item,
  Shop
}

// updateQuality() {
//   for (var i = 0; i < this.items.length; i++) {
//     // refactor to jsut include backstage pass
//     if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
//       if (this.items[i].quality > 0) {
//         if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
//           this.items[i].quality = this.items[i].quality - 1;
//         }
//       }
//     } else { // if aged bri *or* baxckstage passes
//       if (this.items[i].quality < 50) {
//         this.items[i].quality = this.items[i].quality + 1;
//         if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
//           if (this.items[i].sellIn < 11) {
//             if (this.items[i].quality < 50) {
//               this.items[i].quality = this.items[i].quality + 1;
//             }
//           }
//           if (this.items[i].sellIn < 6) {
//             if (this.items[i].quality < 50) {
//               this.items[i].quality = this.items[i].quality + 1;
//             }
//           }
//         }
//       }
//     }
//     // refactor to just include Sulfuras
//     if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
//       this.items[i].sellIn = this.items[i].sellIn - 1;
//     }
//     if (this.items[i].sellIn < 0) {
//       if (this.items[i].name != 'Aged Brie') {
//         if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
//           if (this.items[i].quality > 0) {
//             if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
//               this.items[i].quality = this.items[i].quality - 1;
//             }
//           }
//         } else {
//           this.items[i].quality = this.items[i].quality - this.items[i].quality;
//         }
//       } else {
//         if (this.items[i].quality < 50) {
//           this.items[i].quality = this.items[i].quality + 1;
//         }
//       }
//     }
//   }
//
//   return this.items;
// }
