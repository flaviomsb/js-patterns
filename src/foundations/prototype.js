function User(data) {
  this.data = data;
}

export const userInfo = {
  show() {
    return Object.entries(this.data)
      .map(([key, val]) => `${key}: ${val}`)
      .join('\n');
  },
};

User.prototype = userInfo;
User.prototype.constructor = User;

export default User;
