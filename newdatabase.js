const e = require('express');
const mongoose = require('mongoose');

let xbDB = mongoose.createConnection('mongodb://127.0.0.1/XstreamBattle');
exports.usersDB = mongoose.createConnection('mongodb://127.0.0.1/XB_users');

// let boutSchema = mongoose.Schema({
//     uid: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     staus: {
//         type: String,
//         required: true,
//         default: "upcoming"
//     },
//     regularId: {
//         date: {
//             type: String,
//             required: true,
//             default: new Date().getDate()
//         },
//         id: {
//             type: String,
//             require: true
//         }
//     },
//     gameMode: {
//         type: String,
//         required: true,
//         default: "Battle Royal"
//     },
//     map: {
//         type: String,
//         required: true,
//         default: "BERMUDA"
//     },
//     teamMode: {
//         type: String,
//         required: true,
//         default: "solo"
//     },
//     ammo: {
//         type: String,
//         required: true,
//         default: "limited"
//     },
//     thumbnail: {
//         type: String,
//         required: true
//     },
//     expiry: {
//         month: {
//             type: String,
//             required: true,
//         },
//         date: {
//             type: String,
//             required: true
//         },
//         year: {
//             type: String,
//             required: true
//         },
//         hour: {
//             type: String,
//             required: true
//         },
//         minutes: {
//             type: String,
//             required: true
//         },
//         id: {
//             type: String,
//             required: true,
//         }
//     },
//     entry: {
//         type: String,
//         required: true
//     },
//     _1: {
//         type: String,
//         required: true
//     },
//     _2: {
//         type: String,
//         required: true
//     },
//     _3: {
//         type: String,
//         required: true
//     },
//     createdAt: {
//         type: String,
//         required: true,
//         default: new Date().toString()
//     },
//     setting: {
//         gameMode: {
//             type: String,
//             required: true,
//             default: "Battle Royal"
//         },
//         map: {
//             type: String,
//             required: true,
//             default: "BERMUDA"
//         },
//         teamMode: {
//             type: String,
//             required: true,
//             default: "solo"
//         },
//         players: {
//             type: String,
//             required: true,
//             default: "48"
//         },
//         spectators: {
//             type: String,
//             required: true,
//             default: "30"
//         },
//         minimumLvl: {
//             type: String,
//             required: true,
//             default: "40"
//         },
//         presetMode: {
//             type: String,
//             required: true,
//             default: "classic"
//         },
//         revival: {
//             type: String,
//             required: true,
//             default: "yes"
//         },
//         hp: {
//             type: String,
//             required: true,
//             default: "200" 
//         },
//         ep: {
//             type: String,
//             required: true,
//             default: "0"
//         },
//         jumpHeight: {
//             type: String,
//             required: true,
//             default: "100"
//         },
//         movementSpeed: {
//             type: String,
//             required: true,
//             default: "100"
//         },
//         environment: {
//             type: String,
//             required: true,
//             default: "day"
//         },
//         limitedAmmo: {
//             type: String,
//             required: true,
//             default: "yes"
//         },
//         fallDamage: {
//             type: String,
//             required: true,
//             default: "yes"
//         },
//         autoRevival: {
//             type: String,
//             required: true,
//             default: "no"
//         },
//         airdrop: {
//             type: String,
//             required: true,
//             default: "yes"
//         },
//         zoneShrinkSpeed: {
//             type: String,
//             required: true,
//             default: "standard"
//         },
//         vehicles: {
//             type: String,
//             required: true,
//             default: "yes"
//         },
//         outOfZoneDamag: {
//             type: String,
//             required: true,
//             default: "standard"
//         },
//         uav: {
//             type: String,
//             required: true,
//             default: "yes"
//         },
//         airstrike: {
//             type: String,
//             required: true,
//             default: "yes"
//         },
//         airship: {
//             type: String,
//             required: true,
//             default: "yes"
//         },
//         genricEnemyOutfit: {
//             type: String,
//             required: true,
//             default: "no"
//         },
//         hideTeammateNickname: {
//             type: String,
//             required: true,
//             default: "no"
//         },
//         friendlyFire: {
//             type: String,
//             required: true,
//             default: "no"
//         },
//         preciseAim: {
//             type: String,
//             required: true,
//             default: "yes"
//         },
//         characterSkill: {
//             type: String,
//             required: true,
//             default: "yes"
//         },
//         loadout: {
//             type: String,
//             required: true,
//             default: "yes"
//         },
//         gunAttributes: {
//             type: String,
//             required: true,
//             default: "yes"
//         },
//         inGameMission: {
//             type: String,
//             required: true,
//             default: "yes"
//         },
//         inMatchQuest: {
//             type: String,
//             required: true,
//             default: "no"
//         },
//         observeSpectateUponElimination: {
//             type: String,
//             required: true,
//             default: "yes"
//         },
//         observeSwitchPosition: {
//             type: String,
//             required: true,
//             default: "yes"
//         },
//         observeEmulators: {
//             type: String,
//             required: true,
//             default: "off"
//         }
//     }
// });
let boutSchema = mongoose.Schema({
    uid: {
        type: String,
        required: true,
        unique: true
    },
    staus: {
        type: String,
        required: true,
        default: "upcoming"
    },
    regularId: {
        date: {
            type: String,
            required: true,
            default: new Date().getDate()
        },
        id: {
            type: String,
            require: true
        }
    },
    gameMode: {
        type: String,
        required: true,
        default: "Battle Royal"
    },
    map: {
        type: String,
        required: true,
        default: "BERMUDA"
    },
    teamMode: {
        type: String,
        required: true,
        default: "solo"
    },
    ammo: {
        type: String,
        required: true,
        default: "limited"
    },
    thumbnail: {
        type: String,
        required: true
    },
    expiry: {
        month: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true
        },
        year: {
            type: String,
            required: true
        },
        hour: {
            type: String,
            required: true
        },
        minutes: {
            type: String,
            required: true
        },
        id: {
            type: String,
            required: true,
        }
    },
    entry: {
        type: String,
        required: true
    },
    _1: {
        type: String,
        required: true
    },
    _2: {
        type: String,
        required: true
    },
    _3: {
        type: String,
        required: true
    },
    createdAt: {
        type: String,
        required: true,
        default: new Date().toString()
    },
    setting: {
        gameMode: {
            type: String,
            required: true,
            default: "Battle Royal"
        },
        map: {
            type: String,
            required: true,
            default: "BERMUDA"
        },
        teamMode: {
            type: String,
            required: true,
            default: "solo"
        },
        players: {
            type: String,
            required: true,
            default: "48"
        },
        spectators: {
            type: String,
            required: true,
            default: "30"
        },
        minimumLvl: {
            type: String,
            required: true,
            default: "40"
        },
        presetMode: {
            type: String,
            required: true,
            default: "classic"
        },
        revival: {
            type: String,
            required: true,
            default: "yes"
        },
        hp: {
            type: String,
            required: true,
            default: "200" 
        },
        ep: {
            type: String,
            required: true,
            default: "0"
        },
        jumpHeight: {
            type: String,
            required: true,
            default: "100"
        },
        movementSpeed: {
            type: String,
            required: true,
            default: "100"
        },
        environment: {
            type: String,
            required: true,
            default: "day"
        },
        limitedAmmo: {
            type: String,
            required: true,
            default: "yes"
        },
        fallDamage: {
            type: String,
            required: true,
            default: "yes"
        },
        autoRevival: {
            type: String,
            required: true,
            default: "no"
        },
        airdrop: {
            type: String,
            required: true,
            default: "yes"
        },
        zoneShrinkSpeed: {
            type: String,
            required: true,
            default: "standard"
        },
        vehicles: {
            type: String,
            required: true,
            default: "yes"
        },
        outOfZoneDamag: {
            type: String,
            required: true,
            default: "standard"
        },
        uav: {
            type: String,
            required: true,
            default: "yes"
        },
        airstrike: {
            type: String,
            required: true,
            default: "yes"
        },
        airship: {
            type: String,
            required: true,
            default: "yes"
        },
        genricEnemyOutfit: {
            type: String,
            required: true,
            default: "no"
        },
        hideTeammateNickname: {
            type: String,
            required: true,
            default: "no"
        },
        friendlyFire: {
            type: String,
            required: true,
            default: "no"
        },
        preciseAim: {
            type: String,
            required: true,
            default: "yes"
        },
        characterSkill: {
            type: String,
            required: true,
            default: "yes"
        },
        loadout: {
            type: String,
            required: true,
            default: "yes"
        },
        gunAttributes: {
            type: String,
            required: true,
            default: "yes"
        },
        inGameMission: {
            type: String,
            required: true,
            default: "yes"
        },
        inMatchQuest: {
            type: String,
            required: true,
            default: "no"
        },
        observeSpectateUponElimination: {
            type: String,
            required: true,
            default: "yes"
        },
        observeSwitchPosition: {
            type: String,
            required: true,
            default: "yes"
        },
        observeEmulators: {
            type: String,
            required: true,
            default: "off"
        }
    },
    teams: {
        type: Object,
    },
    winners: {
        type: Object
    },
    description: {
        type: String,
        default: "no description added."
    }
});
let userSchema = mongoose.Schema({
    uid: {
        type: String,
        required: true,
        unique: true
    },
    ffuid: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    mail: {
        type: String,
        required: true,
        unique: true
    },
    deposite: {
        type: String,
        required: true,
        default: "0"
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: String,
        required: true,
        default: new Date().toString()
    }
});
exports.userHistorySchema = mongoose.Schema({
    status: {
        type: String,
        required: true,
        default: "upcoming"
    },
    boutsId: {
        type: String,
        required: true,
        unique: true
    },
    registeredAt: {
        type: String,
        required: true,
        default: new Date().toString()
    },
    position: {
        type: String
    }
})

exports.boutsModel = xbDB.model('bouts', boutSchema);
exports.usersModel = xbDB.model('users', userSchema);

exports.activeBoutsModel = xbDB.model('activebouts', boutSchema);
exports.pendingBoutsModel = xbDB.model('pendingbouts', boutSchema);
exports.fullfieldBoutsModel = xbDB.model('fullfieldbouts', boutSchema);
exports.rejectedBoutsModel = xbDB.model('rejectedbouts', boutSchema);
exports.boutsDetailModel = xbDB.model('boutsdetail', boutSchema);
