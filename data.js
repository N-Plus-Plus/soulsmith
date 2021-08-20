var workforce = {
    unassigned: 50
    , mine: {}
    , smelt: {}
    , smith: {}
}

var havable = {
    coin: 0
    , ore: {
        coal: 0
        , copper: 0
        , tin: 0
        , lead: 0
        , iron: 0
        , silver: 0
        , gold: 0
        , mithril: 0
        , adamantine: 0
    }
    , bars: {
        copper: 0
        , tin: 0
        , lead: 0
        , iron: 0
        , silver: 0
        , gold: 0
        , mithril: 0
        , adamantine: 0
    }
    , alloy: {
        bronze: 0
        , electrum:0
        , roseGold: 0
        , steel: 0
        , solder: 0
    }
    , gems: {
        amethyst: 0
        , diamond: 0
        , ruby: 0
    }
    , eldritch: {
        blood: 0
        , bone: 0
        , flesh: 0
        , soul: 0
    }
    , armor: {
        chest: 0
        , greaves: 0
        , boots: 0
        , helm: 0
        , sword: 0
        , axe: 0
        , dagger: 0
        , ring: 0
        , necklace: 0
        , bracelet: 0
    }
    , special: {
    }
}

var chance = {
    amethyst: 0.001
    , diamond: 0.0001
    , ruby: 0.00001
}

var rates = {
    ore: {
        coal: 1.25
        , copper: 2.37841423
        , tin: 3.948222039
        , lead: 5.656854249
        , iron: 7.476743906
        , silver: 9.39050748
        , gold: 11.38603593
        , mithril: 13.45434264
        , adamantine: 15.58845727
    }
    , bars: {
        copper: 2.37841423
        , tin: 3.948222039
        , lead: 5.656854249
        , iron: 7.476743906
        , silver: 9.39050748
        , gold: 11.38603593
        , mithril: 13.45434264
        , adamantine: 15.58845727
    }
}

var translate = {
    mine: 'ore'
    , smelt: 'bars'
    , smith: 'item'
}