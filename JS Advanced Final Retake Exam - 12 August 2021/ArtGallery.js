"use strict";

class ArtGallery {
  constructor(creator) {
    this.creator = creator;
    this.possibleArticles = { picture: 200, phoot: 50, item: 250 };
    this.listOfArticles = [];
    this.guests = [];
  }

  addArticle(articleModel, articleName, quantity) {
    articleModel = artGallery.toLowerCase();
    if (this.possibleArticles.hasOwnProperty(articleModel) === false) {
      throw new Error(`This article model is not included in this gallery!`);
    }
    const foundArticle = this.possibleArticles.find(
      (article) => article.articleModel === articleModel
    );
    if (foundArticle !== undefined) {
      foundArticle.quantity += quantity;
    } else {
      this.listOfArticles.push({ articleModel, articleName, quantity });
    }
    return `Successfully added article ${articleName} with a new quantity-${quantity}`;
  }

  inviteGuest(guestName, personality) {
    const foundGuest = this.guests.find(
      (guest) => guest.guestName === guestName
    );
    if (foundGuest !== undefined) {
      throw new Error(`${guestName} has already been invited.`);
    }

    if (personality === "Vip") {
      this.guests.push({ guestName, points: 500, purchaseArticle: 0 });
    } else if (personality === "Middle") {
      this.guests.push({ guestName, points: 250, purchaseArticle: 0 });
    } else {
      this.guests.push({ guestName, points: 50, purchaseArticle: 0 });
    }
    return `You have successfully invited ${guestName}`;
  }
}

const artGallery = new ArtGallery("Curtis Mayfield");
console.log(artGallery.addArticle("picture", "Mona Liza", 3));
console.log(artGallery.addArticle("Item", "Ancient vase", 2));
console.log(artGallery.addArticle("PICTURE", "Mona Liza", 1));
