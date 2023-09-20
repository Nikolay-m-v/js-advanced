"use strict";

class ArtGallery {
  constructor(creator) {
    this.creator = creator;
    this.possibleArticles = { picture: 200, photo: 50, item: 250 };
    this.listOfArticles = [];
    this.guests = [];
  }

  addArticle(articleModel, articleName, quantity) {
    articleModel = articleModel.toLowerCase();
    if (this.possibleArticles.hasOwnProperty(articleModel) === false) {
      throw new Error(`This article model is not included in this gallery!`);
    }
    const foundArticle = this.listOfArticles.find(
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

  buyArticle(articleModel, articleName, guestName) {
    const foundArticle = this.listOfArticles.find(
      (article) => article.articleName === articleName
    );
    if (
      foundArticle === undefined ||
      foundArticle.articleModel !== articleModel
    ) {
      throw new error(`This article is not found.`);
    }
    if (foundArticle.quantity === 0) {
      return `The ${articleName} is not available.`;
    }
    const foundGuest = this.guests.find(
      (guest) => guests.guestName === guestName
    );
    if (foundGuest === undefined) {
      return `This guest is not invited.`;
    }

    if (foundGuest.points < this.possibleArticles[articleModel]) {
      reutrn`You need more points to purchase the article.`;
    } else {
      foundGuest.points -= this.possibleArticles[articleModel];
      foundGuest.purchaseArticle++;
      foundArticle.quantity--;
      return `${guestName} successfully purchased the article worth ${foundArticle.points} points;`;
    }
  }

  showGalleryInfo(criteria) {
    if (criteria === "article") {
      let output = [`Articles information:`];
      this.listOfArticles.forEach((article) =>
        output.push(
          `${article.articleModel} - ${article.articleName} - ${article.quantity}`
        )
      );
      return output.join("\n");
    } else if (criteria === "guest") {
      let output = [`Guests information`];
      this.guests.push((guest) =>
        output.push(`${guests.guestName} - ${guests.purchaseArticle}`)
      );
      return output.join("\n");
    }
  }
}

const artGallery = new ArtGallery("Curtis Mayfield");
console.log(artGallery.addArticle("picture", "Mona Liza", 3));
console.log(artGallery.addArticle("Item", "Ancient vase", 2));
console.log(artGallery.addArticle("PICTURE", "Mona Liza", 1));
