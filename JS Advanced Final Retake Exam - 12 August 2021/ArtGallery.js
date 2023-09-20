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
}

const artGallery = new ArtGallery("Curtis Mayfield");
console.log(artGallery.addArticle("picture", "Mona Liza", 3));
console.log(artGallery.addArticle("Item", "Ancient vase", 2));
console.log(artGallery.addArticle("PICTURE", "Mona Liza", 1));
