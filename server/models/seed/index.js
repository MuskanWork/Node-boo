const { Profile } = require('../index');

const profiles = [
  {
    "id": 1,
    "name": "A Martinez",
    "description": "Adolph Larrue Martinez III.",
    "mbti": "ISFJ",
    "enneagram": "9w3",
    "variant": "sp/so",
    "tritype": 725,
    "socionics": "SEE",
    "sloan": "RCOEN",
    "psyche": "FEVL",
    "image": "https://soulverse.boo.world/images/1.png",
  }
];

async function initSeed() {
  let user = await Profile.getByQuery({ id: { $in: profiles.map(p => p.id) } }, { findOne: true });
  if (!user) {
    await Profile.create(profiles);
  } 
}

module.exports.initSeed = initSeed;
