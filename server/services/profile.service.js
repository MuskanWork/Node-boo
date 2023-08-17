const { Profile } = require('../models');

class ProfileService {

  async getProfile({ id }) {
    const query = {};
    if (id) query._id = id;
    const profile = await Profile.getByQuery(query, { findOne: !!id });
    return profile;
  }

  async createProfile(profile) {
    profile = await Profile.create(profile);
    return profile;
  }

  async updateProfile(profile) {
    let id = profile.id;
    delete profile.id;
    await Profile.updateByQuery({ _id: id }, { $set: profile });
    profile = await this.getProfile({ id });
    return profile;
  }
}

module.exports = new ProfileService();
