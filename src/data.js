module.exports = {

  cityScales: [
    {
      id: 1,
      type: "metropolis",
      maxPopulation: 20,
    },
    {
      id: 2,
      type: "city",
      maxPopulation: 10,
    },
    {
      id: 3,
      type: "town",
      maxPopulation: 5,
    },
  ],

  terrains: [
    {
      id: 1,
      type: "wonders",
      effects: {
        faith: 6,
        wealth: 0,
      },
    },
    {
      id: 2,
      type: "bySea",
      effects: {
        faith: 0,
        wealth: 6,
      },
    },
    {
      id: 3,
      type: "byRiver",
      effects: {
        faith: 0,
        wealth: 3,
      },
    },
    {
      id: 4,
      type: "alpine",
      effects: {
        faith: 3,
        wealth: 0,
      },
    },
  ],

  cities: [
    {
      id: 1,
      name: 'Samarkand',
      cityScale: {
        type: 'metropolis',
        maxPopulation: 20,
      },
      terrains: ['bySea', 'wonders'],
      effects: {
        faith: 6,
        wealth: 6,
      },
      holyReligion: 'Manichaeism',
      mainReligion: 'Manichaeism',
      religiousNum: {
        Buddhist: 0,
        Taoist: 0,
        Christian: 0,
        Islam: 0,
        Manichaeism: 11,
        folkBelievers: 1,
      },
      specialRole: [],
    },
    {
      id: 2,
      name: 'Quanzhou',
      cityScale: {
        type: 'metropolis',
        maxPopulation: 20,
      },
      terrains: ['bySea'],
      effects: {
        faith: 0,
        wealth: 6,
      },
      holyReligion: null,
      mainReligion: null,
      religiousNum: {
        Buddhist: 0,
        Taoist: 0,
        Christian: 0,
        Islam: 0,
        Manichaeism: 0,
        folkBelievers: 1,
      },
      specialRole: [],
    },
    {
      id: 3,
      name: 'Lhasa',
      cityScale: {
        type: 'metropolis',
        maxPopulation: 20,
      },
      terrains: ['alpine', 'byRiver'],
      effects: {
        faith: 6,
        wealth: 3,
      },
      holyReligion: 'Islam',
      mainReligion: 'Islam',
      religiousNum: {
        Buddhist: 0,
        Taoist: 0,
        Christian: 0,
        Islam: 11,
        Manichaeism: 0,
        folkBelievers: 0,
      },
      specialRole: [],
    },
    {
      id: 4,
      name: 'Aksum',
      cityScale: {
        type: 'metropolis',
        maxPopulation: 20,
      },
      terrains: ['bySea'],
      effects: {
        faith: 0,
        wealth: 6,
      },
      holyReligion: null,
      mainReligion: null,
      religiousNum: {
        Buddhist: 0,
        Taoist: 0,
        Christian: 0,
        Islam: 0,
        Manichaeism: 0,
        folkBelievers: 0,
      },
      specialRole: [],
    },
    {
      id: 5,
      name: 'OrduBaliq',
      cityScale: {
        type: 'city',
        maxPopulation: 10,
      },
      terrains: ['bySea'],
      effects: {
        faith: 0,
        wealth: 6,
      },
      holyReligion: null,
      mainReligion: null,
      religiousNum: {
        Buddhist: 0,
        Taoist: 0,
        Christian: 0,
        Islam: 0,
        Manichaeism: 2,
        folkBelievers: 0,
      },
      specialRole: [
        {
          role: "doctor",
          religion: "Manichaeism",
        }
      ],
    },
    {
      id: 6,
      name: 'Gaochang',
      cityScale: {
        type: 'city',
        maxPopulation: 10,
      },
      terrains: ['byRiver', 'alpine'],
      effects: {
        faith: 3,
        wealth: 3,
      },
      holyReligion: null,
      mainReligion: null,
      religiousNum: {
        Buddhist: 0,
        Taoist: 0,
        Christian: 0,
        Islam: 2,
        Manichaeism: 0,
        folkBelievers: 0,
      },
      specialRole: [],
    },
    {
      id: 7,
      name: 'Guangzhou',
      cityScale: {
        type: 'city',
        maxPopulation: 10,
      },
      terrains: ['bySea', 'wonders'],
      effects: {
        faith: 6,
        wealth: 6,
      },
      holyReligion: 'Christian',
      mainReligion: 'Christian',
      religiousNum: {
        Buddhist: 0,
        Taoist: 0,
        Christian: 9,
        Islam: 0,
        Manichaeism: 0,
        folkBelievers: 0,
      },
      specialRole: [],
    },
    {
      id: 8,
      name: 'Yuwen',
      cityScale: {
        type: 'city',
        maxPopulation: 10,
      },
      terrains: ['byRiver'],
      effects: {
        faith: 0,
        wealth: 3,
      },
      holyReligion: null,
      mainReligion: null,
      religiousNum: {
        Buddhist: 0,
        Taoist: 0,
        Christian: 0,
        Islam: 0,
        Manichaeism: 0,
        folkBelievers: 0,
      },
      specialRole: [],
    },
    {
      id: 9,
      name: 'Hangzhou',
      cityScale: {
        type: 'city',
        maxPopulation: 10,
      },
      terrains: ['byRiver'],
      effects: {
        faith: 0,
        wealth: 3,
      },
      holyReligion: null,
      mainReligion: null,
      religiousNum: {
        Buddhist: 0,
        Taoist: 0,
        Christian: 4,
        Islam: 0,
        Manichaeism: 0,
        folkBelievers: 0,
      },
      specialRole: [],
    },
    {
      id: 10,
      name: 'Changan',
      cityScale: {
        type: 'city',
        maxPopulation: 10,
      },
      terrains: ['byRiver', 'alpine'],
      effects: {
        faith: 3,
        wealth: 3,
      },
      holyReligion: null,
      mainReligion: null,
      religiousNum: {
        Buddhist: 0,
        Taoist: 0,
        Christian: 3,
        Islam: 0,
        Manichaeism: 0,
        folkBelievers: 0,
      },
      specialRole: [],
    },
    {
      id: 11,
      name: 'Kabuer',
      cityScale: {
        type: 'town',
        maxPopulation: 5,
      },
      terrains: ['bySea'],
      effects: {
        faith: 0,
        wealth: 6,
      },
      holyReligion: null,
      mainReligion: 'Christian',
      religiousNum: {
        Buddhist: 0,
        Taoist: 0,
        Christian: 3,
        Islam: 0,
        Manichaeism: 0,
        folkBelievers: 0,
      },
      specialRole: [],
    },
    {
      id: 12,
      name: 'Taiyuan',
      cityScale: {
        type: 'town',
        maxPopulation: 5,
      },
      terrains: ['byRiver'],
      effects: {
        faith: 0,
        wealth: 3,
      },
      holyReligion: null,
      mainReligion: null,
      religiousNum: {
        Buddhist: 0,
        Taoist: 0,
        Christian: 0,
        Islam: 0,
        Manichaeism: 0,
        folkBelievers: 0,
      },
      specialRole: [],
    },
    {
      id: 13,
      name: 'Wuwei',
      cityScale: {
        type: 'town',
        maxPopulation: 5,
      },
      terrains: ['alpine'],
      effects: {
        faith: 3,
        wealth: 0,
      },
      holyReligion: null,
      mainReligion: 'folkBelievers',
      religiousNum: {
        Buddhist: 0,
        Taoist: 0,
        Christian: 0,
        Islam: 0,
        Manichaeism: 0,
        folkBelievers: 3,
      },
      specialRole: [],
    },
    {
      id: 14,
      name: 'Dunhuang',
      cityScale: {
        type: 'town',
        maxPopulation: 5,
      },
      terrains: ['bySea'],
      effects: {
        faith: 0,
        wealth: 6,
      },
      holyReligion: null,
      mainReligion: null,
      religiousNum: {
        Buddhist: 0,
        Taoist: 0,
        Christian: 0,
        Islam: 0,
        Manichaeism: 0,
        folkBelievers: 1,
      },
      specialRole: [],
    },
    {
      id: 15,
      name: 'Songcheng',
      cityScale: {
        type: 'town',
        maxPopulation: 5,
      },
      terrains: ['byRiver', 'wonders'],
      effects: {
        faith: 6,
        wealth: 3,
      },
      holyReligion: null,
      mainReligion: null,
      religiousNum: {
        Buddhist: 0,
        Taoist: 0,
        Christian: 0,
        Islam: 0,
        Manichaeism: 0,
        folkBelievers: 0,
      },
      specialRole: [],
    },
    {
      id: 16,
      name: 'Qingdao',
      cityScale: {
        type: 'town',
        maxPopulation: 5,
      },
      terrains: ['bySea'],
      effects: {
        faith: 0,
        wealth: 6,
      },
      holyReligion: null,
      mainReligion: 'folkBelievers',
      religiousNum: {
        Buddhist: 0,
        Taoist: 0,
        Christian: 0,
        Islam: 0,
        Manichaeism: 0,
        folkBelievers: 3,
      },
      specialRole: [],
    },
    {
      id: 17,
      name: 'Suiye',
      cityScale: {
        type: 'town',
        maxPopulation: 5,
      },
      terrains: ['byRiver'],
      effects: {
        faith: 0,
        wealth: 3,
      },
      holyReligion: null,
      mainReligion: 'folkBelievers',
      religiousNum: {
        Buddhist: 0,
        Taoist: 0,
        Christian: 0,
        Islam: 0,
        Manichaeism: 0,
        folkBelievers: 3,
      },
      specialRole: [],
    },
    {
      id: 18,
      name: 'Jiashimiluo',
      cityScale: {
        type: 'town',
        maxPopulation: 5,
      },
      terrains: ['wonders'],
      effects: {
        faith: 6,
        wealth: 0,
      },
      holyReligion: null,
      mainReligion: null,
      religiousNum: {
        Buddhist: 0,
        Taoist: 0,
        Christian: 0,
        Islam: 0,
        Manichaeism: 0,
        folkBelievers: 0,
      },
      specialRole: [],
    },
    {
      id: 19,
      name: 'Bieshibali',
      cityScale: {
        type: 'town',
        maxPopulation: 5,
      },
      terrains: ['byRiver', 'alpine'],
      effects: {
        faith: 3,
        wealth: 3,
      },
      holyReligion: null,
      mainReligion: null,
      religiousNum: {
        Buddhist: 0,
        Taoist: 0,
        Christian: 0,
        Islam: 0,
        Manichaeism: 0,
        folkBelievers: 0,
      },
      specialRole: [],
    },
    {
      id: 20,
      name: 'Qiuci',
      cityScale: {
        type: 'town',
        maxPopulation: 5,
      },
      terrains: ['wonders'],
      effects: {
        faith: 6,
        wealth: 0,
      },
      holyReligion: 'folkBelievers',
      mainReligion: 'folkBelievers',
      religiousNum: {
        Buddhist: 0,
        Taoist: 0,
        Christian: 0,
        Islam: 0,
        Manichaeism: 0,
        folkBelievers: 3,
      },
      specialRole: [],
    },
  ],
};



