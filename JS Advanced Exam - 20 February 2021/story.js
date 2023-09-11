"use strict";

class Story {
  constructor(title, creator) {
    this.title = title;
    this.creator = creator;
    this._comments = [];
    this._likes = [];
  }

  get likes() {
    if (this._likes.length === 0) {
      return `${this.title} has 0 likes`;
    } else if (this._likes.length === 1) {
      return `${this_likes[0]} has liked this story!`;
    } else {
      return `${this._likes[0]} and ${
        _likes.length - 1
      } other like this story!`;
    }
  }

  like(username) {
    if (this._likes.includes(username)) {
      throw new Error(`You can't like the same story twice!`);
    } else if (username === this.creator) {
      throw new Error("You can't like your own story!");
    } else {
      return `${username} liked ${this.title}`;
    }
  }

  dislike(username) {
    if (!this._likes.includes(username)) {
      throw new Error("You can't dislike this story!");
    } else {
      return `${username} disliked ${this.title}`;
    }
  }

  comment(username, content, id) {
    let findId = this._comments.find((comment) => comment.id === id);
    if (findId === undefined) {
      this._comments.push({
        id: this.comments.length + 1,
        username,
        content,
        replies: [],
      });
      return `${username} commented on ${this.title}`;
    }
  }
}

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log();
console.log(art.toString("username"));
console.log();
art.like("Zane");
console.log(art.toString("desc"));
