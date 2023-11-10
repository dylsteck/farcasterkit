"use strict";
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = function(target, all) {
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = function(to, from, except, desc) {
    if (from && typeof from === "object" || typeof from === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                    get: function() {
                        return from[key];
                    },
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
            };
            for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return to;
};
var __toESM = function(mod, isNodeMode, target) {
    return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod);
};
var __toCommonJS = function(mod) {
    return __copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
};
// index.ts
var farcasterkit_exports = {};
__export(farcasterkit_exports, {
    FarcasterKitProvider: function() {
        return FarcasterKitProvider;
    },
    channels: function() {
        return channels;
    },
    useCast: function() {
        return useCast;
    },
    useLatestCasts: function() {
        return useLatestCasts;
    },
    useReplies: function() {
        return useReplies;
    },
    useSearch: function() {
        return useSearch;
    },
    useUser: function() {
        return useUser;
    }
});
module.exports = __toCommonJS(farcasterkit_exports);
// FarcasterKitProvider.tsx
var import_react = __toESM(require("react"));
var import_react2 = require("react");
var import_axios = __toESM(require("axios"));
var FarcasterKitContext = (0, import_react2.createContext)(void 0);
var FarcasterKitProvider = function(param) {
    var _param_baseURL = param.baseURL, baseURL = _param_baseURL === void 0 ? "https://api.farcasterkit.com" : _param_baseURL, children = param.children;
    return /* @__PURE__ */ import_react.default.createElement(FarcasterKitContext.Provider, {
        value: {
            baseURL: baseURL
        }
    }, children);
};
var useLatestCasts = function(queryParams) {
    var context = (0, import_react2.useContext)(FarcasterKitContext);
    if (context === void 0) {
        throw new Error("useLatestCasts must be used within a FarcasterKitProvider");
    }
    var baseURL = context.baseURL;
    var _ref = _sliced_to_array((0, import_react2.useState)(null), 2), data = _ref[0], setData = _ref[1];
    var _ref1 = _sliced_to_array((0, import_react2.useState)(true), 2), loading = _ref1[0], setLoading = _ref1[1];
    (0, import_react2.useEffect)(function() {
        var getLatestCasts = function() {
            var _ref = _async_to_generator(function() {
                var response, responseData, error;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            _state.trys.push([
                                0,
                                2,
                                ,
                                3
                            ]);
                            return [
                                4,
                                import_axios.default.get("".concat(baseURL, "/casts/latest"), {
                                    params: queryParams
                                })
                            ];
                        case 1:
                            response = _state.sent();
                            responseData = response.data;
                            if (responseData && responseData.casts) {
                                setData(responseData.casts);
                                setLoading(false);
                            }
                            return [
                                3,
                                3
                            ];
                        case 2:
                            error = _state.sent();
                            console.error("Error fetching latest casts:", error);
                            setLoading(false);
                            return [
                                3,
                                3
                            ];
                        case 3:
                            return [
                                2
                            ];
                    }
                });
            });
            return function getLatestCasts() {
                return _ref.apply(this, arguments);
            };
        }();
        getLatestCasts();
    }, [
        baseURL
    ]);
    return {
        data: data,
        loading: loading
    };
};
var useCast = function(queryParams) {
    var context = (0, import_react2.useContext)(FarcasterKitContext);
    var params = {
        cursor: (queryParams === null || queryParams === void 0 ? void 0 : queryParams.cursor) || 0,
        limit: (queryParams === null || queryParams === void 0 ? void 0 : queryParams.limit) || 100
    };
    if (context === void 0) {
        throw new Error("useCast must be used within a FarcasterKitProvider");
    }
    var baseURL = context.baseURL;
    var _ref = _sliced_to_array((0, import_react2.useState)(null), 2), data = _ref[0], setData = _ref[1];
    var _ref1 = _sliced_to_array((0, import_react2.useState)(true), 2), loading = _ref1[0], setLoading = _ref1[1];
    (0, import_react2.useEffect)(function() {
        var getCast = function() {
            var _ref = _async_to_generator(function() {
                var response, responseData, error;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            _state.trys.push([
                                0,
                                2,
                                ,
                                3
                            ]);
                            return [
                                4,
                                import_axios.default.get("".concat(baseURL, "/casts/").concat(queryParams === null || queryParams === void 0 ? void 0 : queryParams.hash), {
                                    params: params
                                })
                            ];
                        case 1:
                            response = _state.sent();
                            responseData = response.data;
                            if (responseData && responseData.cast) {
                                setData(responseData.cast);
                                setLoading(false);
                            }
                            return [
                                3,
                                3
                            ];
                        case 2:
                            error = _state.sent();
                            console.error("Error fetching cast:", error);
                            setLoading(false);
                            return [
                                3,
                                3
                            ];
                        case 3:
                            return [
                                2
                            ];
                    }
                });
            });
            return function getCast() {
                return _ref.apply(this, arguments);
            };
        }();
        getCast();
    }, [
        baseURL,
        queryParams === null || queryParams === void 0 ? void 0 : queryParams.hash
    ]);
    return {
        data: data,
        loading: loading
    };
};
var useReplies = function(queryParams) {
    var context = (0, import_react2.useContext)(FarcasterKitContext);
    var params = {
        cursor: (queryParams === null || queryParams === void 0 ? void 0 : queryParams.cursor) || 0,
        limit: (queryParams === null || queryParams === void 0 ? void 0 : queryParams.limit) || 100
    };
    if (context === void 0) {
        throw new Error("useReplies must be used within a FarcasterKitProvider");
    }
    var baseURL = context.baseURL;
    var _ref = _sliced_to_array((0, import_react2.useState)(null), 2), data = _ref[0], setData = _ref[1];
    var _ref1 = _sliced_to_array((0, import_react2.useState)(true), 2), loading = _ref1[0], setLoading = _ref1[1];
    (0, import_react2.useEffect)(function() {
        var getReplies = function() {
            var _ref = _async_to_generator(function() {
                var _queryParams_hash, response, responseData, error;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            _state.trys.push([
                                0,
                                2,
                                ,
                                3
                            ]);
                            return [
                                4,
                                import_axios.default.get("".concat(baseURL, "/casts/replies?parent_hash=").concat((_queryParams_hash = queryParams === null || queryParams === void 0 ? void 0 : queryParams.hash) !== null && _queryParams_hash !== void 0 ? _queryParams_hash : ""), {
                                    params: params
                                })
                            ];
                        case 1:
                            response = _state.sent();
                            responseData = response.data;
                            if (responseData && responseData.cast) {
                                setData(responseData.cast);
                                setLoading(false);
                            }
                            return [
                                3,
                                3
                            ];
                        case 2:
                            error = _state.sent();
                            console.error("Error fetching replies:", error);
                            setLoading(false);
                            return [
                                3,
                                3
                            ];
                        case 3:
                            return [
                                2
                            ];
                    }
                });
            });
            return function getReplies() {
                return _ref.apply(this, arguments);
            };
        }();
        getReplies();
    }, [
        baseURL,
        queryParams === null || queryParams === void 0 ? void 0 : queryParams.hash
    ]);
    return {
        data: data,
        loading: loading
    };
};
var useSearch = function(queryParams) {
    var context = (0, import_react2.useContext)(FarcasterKitContext);
    var params = {
        cursor: (queryParams === null || queryParams === void 0 ? void 0 : queryParams.cursor) || 0,
        limit: (queryParams === null || queryParams === void 0 ? void 0 : queryParams.limit) || 100
    };
    if (context === void 0) {
        throw new Error("useSearch must be used within a FarcasterKitProvider");
    }
    var baseURL = context.baseURL;
    var _ref = _sliced_to_array((0, import_react2.useState)(null), 2), data = _ref[0], setData = _ref[1];
    var _ref1 = _sliced_to_array((0, import_react2.useState)(true), 2), loading = _ref1[0], setLoading = _ref1[1];
    (0, import_react2.useEffect)(function() {
        var getSearch = function() {
            var _ref = _async_to_generator(function() {
                var response, responseData, error;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            _state.trys.push([
                                0,
                                2,
                                ,
                                3
                            ]);
                            return [
                                4,
                                import_axios.default.get("".concat(baseURL, "/casts/search?query=").concat(queryParams === null || queryParams === void 0 ? void 0 : queryParams.query), {
                                    params: params
                                })
                            ];
                        case 1:
                            response = _state.sent();
                            responseData = response.data;
                            if (responseData && responseData.cast) {
                                setData(responseData.cast);
                                setLoading(false);
                            }
                            return [
                                3,
                                3
                            ];
                        case 2:
                            error = _state.sent();
                            console.error("Error fetching search results:", error);
                            setLoading(false);
                            return [
                                3,
                                3
                            ];
                        case 3:
                            return [
                                2
                            ];
                    }
                });
            });
            return function getSearch() {
                return _ref.apply(this, arguments);
            };
        }();
        getSearch();
    }, [
        baseURL,
        queryParams === null || queryParams === void 0 ? void 0 : queryParams.query
    ]);
    return {
        data: data,
        loading: loading
    };
};
var useUser = function(queryParams) {
    var context = (0, import_react2.useContext)(FarcasterKitContext);
    var params = {
        cursor: (queryParams === null || queryParams === void 0 ? void 0 : queryParams.cursor) || 0,
        limit: (queryParams === null || queryParams === void 0 ? void 0 : queryParams.limit) || 100
    };
    var fidOrFname = (queryParams === null || queryParams === void 0 ? void 0 : queryParams.fid) ? "fid=".concat(queryParams === null || queryParams === void 0 ? void 0 : queryParams.fid) : "fname=".concat(queryParams === null || queryParams === void 0 ? void 0 : queryParams.fname);
    if (context === void 0) {
        throw new Error("useSearch must be used within a FarcasterKitProvider");
    }
    var baseURL = context.baseURL;
    var _ref = _sliced_to_array((0, import_react2.useState)(null), 2), data = _ref[0], setData = _ref[1];
    var _ref1 = _sliced_to_array((0, import_react2.useState)(true), 2), loading = _ref1[0], setLoading = _ref1[1];
    (0, import_react2.useEffect)(function() {
        var getUser = function() {
            var _ref = _async_to_generator(function() {
                var response, responseData, error;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            _state.trys.push([
                                0,
                                2,
                                ,
                                3
                            ]);
                            return [
                                4,
                                import_axios.default.get("".concat(baseURL, "/users/user?").concat(fidOrFname), {
                                    params: params
                                })
                            ];
                        case 1:
                            response = _state.sent();
                            responseData = response.data;
                            if (responseData && responseData.user) {
                                setData(responseData.user);
                                setLoading(false);
                            }
                            return [
                                3,
                                3
                            ];
                        case 2:
                            error = _state.sent();
                            console.error("Error fetching user:", error);
                            setLoading(false);
                            return [
                                3,
                                3
                            ];
                        case 3:
                            return [
                                2
                            ];
                    }
                });
            });
            return function getUser() {
                return _ref.apply(this, arguments);
            };
        }();
        getUser();
    }, [
        baseURL,
        queryParams === null || queryParams === void 0 ? void 0 : queryParams.fid,
        queryParams === null || queryParams === void 0 ? void 0 : queryParams.fname
    ]);
    return {
        data: data,
        loading: loading
    };
};
// channels.ts
var channels = {
    Neynar: {
        "name": "Neynar",
        "parent_url": "chain://eip155:1/erc721:0xd4498134211baad5846ce70ce04e7c4da78931cc",
        "image": "https://ipfs.decentralized-content.com/ipfs/bafybeidupusfn5udq2sclotztyavhtopmwttymh4fzapnjwfwx5b3jh42u",
        "channel_id": "neynar"
    },
    FWB_Fest: {
        "name": "FWB Fest",
        "parent_url": "https://fest.fwb.help",
        "image": "https://warpcast.com/~/channel-images/fwb-fest.png",
        "channel_id": "fwb-fest"
    },
    Welcome: {
        "name": "Welcome",
        "parent_url": "chain://eip155:7777777/erc721:0x8f0055447ffae257e9025b781643127ca604baaa",
        "image": "https://ipfs.decentralized-content.com/ipfs/bafkreieraqfkny7bttxd7h7kmnz6zy76vutst3qbjgjxsjnvrw7z3i2n7i",
        "channel_id": "welcome"
    },
    GM: {
        "name": "GM",
        "parent_url": "chain://eip155:7777777/erc721:0x5556efe18d87f132054fbd4ba9afc13ebb1b0594",
        "image": "https://ipfs.decentralized-content.com/ipfs/bafkreic5vdt7fm3wgrpmravsuvd3grpot6vztcrmwobb67suieszpl7qay",
        "channel_id": "gm"
    },
    Farcaster: {
        "name": "Farcaster",
        "parent_url": "chain://eip155:7777777/erc721:0x4f86113fc3e9783cf3ec9a552cbb566716a57628",
        "image": "https://ipfs.decentralized-content.com/ipfs/bafkreialf5usxssf2eu3e5ct37zzdd553d7lg7oywvdszmrg5p2zpkta7u",
        "channel_id": "farcaster"
    },
    Warpcast: {
        "name": "Warpcast",
        "parent_url": "chain://eip155:7777777/erc721:0x10a77f29a6bbeae936f3f27cd60546072dae4e41",
        "image": "https://ipfs.decentralized-content.com/ipfs/bafkreifezhnp5wzgabkdbkb6d65oix4r5axibupv45r7ifxphl4d6qqnry",
        "channel_id": "warpcast"
    },
    EVM: {
        "name": "EVM",
        "parent_url": "chain://eip155:1/erc721:0x37fb80ef28008704288087831464058a4a3940ae",
        "image": "https://warpcast.com/~/channel-images/evm.png",
        "channel_id": "evm"
    },
    zk: {
        "name": "zk",
        "parent_url": "chain://eip155:7777777/erc721:0xec30bb189781bbd87478f625d19d9deeeb771964",
        "image": "https://ipfs.decentralized-content.com/ipfs/bafkreibw7zsrdhxe3xl454jrfqytx72cjjibwp3t6scjzhirqehu2jloga",
        "channel_id": "zk"
    },
    OP_Stack: {
        "name": "OP Stack",
        "parent_url": "https://www.optimism.io",
        "image": "https://warpcast.com/~/channel-images/op-stack.png",
        "channel_id": "op-stack"
    },
    Memes: {
        "name": "Memes",
        "parent_url": "chain://eip155:1/erc721:0xfd8427165df67df6d7fd689ae67c8ebf56d9ca61",
        "image": "https://i.seadn.io/gcs/files/1f4acfc1e6831eb38e9453ce34ac79f8.png?auto=format&dpr=1&w=512",
        "channel_id": "memes"
    },
    News: {
        "name": "News",
        "parent_url": "chain://eip155:7777777/erc721:0x3cf3d6a6bcac3c60f3bb59fdd641b042102bb488",
        "image": "https://ipfs.decentralized-content.com/ipfs/bafybeidpy6o32lbye6253lk67pdao4vbfazojqclkrlctukykppii2rs4e",
        "channel_id": "news"
    },
    Ethereum: {
        "name": "Ethereum",
        "parent_url": "https://ethereum.org",
        "image": "https://warpcast.com/~/channel-images/ethereum.png",
        "channel_id": "ethereum"
    },
    Bitcoin: {
        "name": "Bitcoin",
        "parent_url": "https://bitcoin.org",
        "image": "https://warpcast.com/~/channel-images/bitcoin.png",
        "channel_id": "bitcoin"
    },
    Solana: {
        "name": "Solana",
        "parent_url": "https://solana.com",
        "image": "https://warpcast.com/~/channel-images/solana.png",
        "channel_id": "solana"
    },
    Tezos: {
        "name": "Tezos",
        "parent_url": "https://tezos.com",
        "image": "https://warpcast.com/~/channel-images/tezos.png",
        "channel_id": "tezos"
    },
    Quilibrium: {
        "name": "Quilibrium",
        "parent_url": "https://www.quilibrium.com",
        "image": "https://warpcast.com/~/channel-images/quilibrium.png",
        "channel_id": "quilibrium"
    },
    AI: {
        "name": "AI",
        "parent_url": "chain://eip155:7777777/erc721:0x5747eef366fd36684e8893bf4fe628efc2ac2d10",
        "image": "https://ipfs.decentralized-content.com/ipfs/bafybeidaofd6olol55alhr2npgfiocv6oxdbjcyvpssh6hgr5v6pqwhxrm",
        "channel_id": "ai"
    },
    Design: {
        "name": "Design",
        "parent_url": "chain://eip155:7777777/erc721:0x22be981fb87effbe6780b34a6fe1dfc14a00ec8e",
        "image": "https://ipfs.decentralized-content.com/ipfs/bafybeiclumzieza3g5qljprmixrvh4reqvmle6o3cpp5murltndpjjl2hu",
        "channel_id": "design"
    },
    Podcasts: {
        "name": "Podcasts",
        "parent_url": "chain://eip155:1/erc721:0xdf3abf79aedcc085e9a41a569964e9fb53f33728",
        "image": "https://i.seadn.io/gcs/files/2c3368e27d86aac05da2ff57b5dd80b8.png?auto=format&dpr=1&w=512",
        "channel_id": "podcasts"
    },
    Food: {
        "name": "Food",
        "parent_url": "chain://eip155:1/erc721:0xec0ba367a6edf483a252c3b093f012b9b1da8b3f",
        "image": "https://i.seadn.io/gcs/files/0d84654921fd65e3c1723bc74d976a07.png?auto=format&dpr=1&w=512",
        "channel_id": "food"
    },
    Books: {
        "name": "Books",
        "parent_url": "chain://eip155:1/erc721:0xc18f6a34019f5ba0fc5bc8cb6fe52e898d6bbbee",
        "image": "https://i.seadn.io/gcs/files/1b3612720761923ac32e276a29a0a234.png?auto=format&dpr=1&w=512",
        "channel_id": "books"
    },
    Screens: {
        "name": "Screens",
        "parent_url": "chain://eip155:1/erc721:0xc4934dbb7a71f76e4068cd04fade20ad6c0023dd",
        "image": "https://i.seadn.io/gcs/files/6a1b1587b246576cc87309031f781bea.png?auto=format&dpr=1&w=512",
        "channel_id": "screens"
    },
    Fitness: {
        "name": "Fitness",
        "parent_url": "chain://eip155:1/erc721:0xee442da02f2cdcbc0140162490a068c1da94b929",
        "image": "https://i.seadn.io/gcs/files/f89aa7f1b59bea83d838680cf567a0b1.png?auto=format&dpr=1&w=512",
        "channel_id": "fitness"
    },
    Soccer: {
        "name": "Soccer",
        "parent_url": "chain://eip155:1/erc721:0x7abfe142031532e1ad0e46f971cc0ef7cf4b98b0",
        "image": "https://i.seadn.io/gcs/files/d1a1532c0b6e27f674dcaaba1e7a0d58.png?auto=format&dpr=1&w=512",
        "channel_id": "soccer"
    },
    NFL: {
        "name": "NFL",
        "parent_url": "https://www.nfl.com",
        "image": "https://warpcast.com/~/channel-images/nfl.png",
        "channel_id": "nfl"
    },
    NBA: {
        "name": "NBA",
        "parent_url": "https://www.nba.com",
        "image": "https://warpcast.com/~/channel-images/nba.png",
        "channel_id": "nba"
    },
    F1: {
        "name": "F1",
        "parent_url": "chain://eip155:7777777/erc721:0x47163feb5c3b97f90671b1e1a1359b8240edbdbe",
        "image": "https://ipfs.decentralized-content.com/ipfs/bafybeigabvfjslrhm3odwhp2o6ws2nm65groagcy6y2jldwx6gbxierhre",
        "channel_id": "f1"
    },
    Music: {
        "name": "Music",
        "parent_url": "chain://eip155:7777777/erc721:0xe96c21b136a477a6a97332694f0caae9fbb05634",
        "image": "https://ipfs.decentralized-content.com/ipfs/bafybeibdk7mvrhmud76ye6wm623sjgtiashik2imee7dkeliiq4wfissqq",
        "channel_id": "music"
    },
    eM: {
        "name": "e/m",
        "parent_url": "chain://eip155:1/erc721:0x05acde54e82e7e38ec12c5b5b4b1fd1c8d32658d",
        "image": "https://i.seadn.io/gcs/files/92b324400baa286b6b4791b0371ad83e.png?auto=format&dpr=1&w=256",
        "channel_id": "electronic"
    },
    Gaming: {
        "name": "Gaming",
        "parent_url": "chain://eip155:7777777/erc721:0xa390bc5b492f4d378ca2ef513a45a89d54538f02",
        "image": "https://ipfs.decentralized-content.com/ipfs/bafybeicej2ef7467g642ccwj3d56ctdyn33qda2zkuorbejftaed3wfube",
        "channel_id": "gaming"
    },
    Photography: {
        "name": "Photography",
        "parent_url": "chain://eip155:7777777/erc721:0x36ef4ed7a949ee87d5d2983f634ae87e304a9ea2",
        "image": "https://ipfs.decentralized-content.com/ipfs/bafybeifezoeekksio4ojy6xcm6x4b3ety2dbkly5d5d4a7kwsc5skixgye",
        "channel_id": "photography"
    },
    Dogs: {
        "name": "Dogs",
        "parent_url": "chain://eip155:7777777/erc721:0x8cb43a65b27461b61d6c8989e6f9d88e5426833d",
        "image": "https://ipfs.decentralized-content.com/ipfs/bafybeidvhfu3thunzfd3wj3ar6e6vlztnoljvqh2yauxwyfbh2vt65nypq",
        "channel_id": "dogs"
    },
    Cats: {
        "name": "Cats",
        "parent_url": "chain://eip155:7777777/erc721:0x038adac316a87c29c3acc8641e1d8320bb0144c2",
        "image": "https://ipfs.decentralized-content.com/ipfs/bafybeiex4iylhyfsihrqxs6hpvy6ik5i5m2pbihdhtcj2eov6uqdncoezy",
        "channel_id": "cats"
    },
    Fashion: {
        "name": "Fashion",
        "parent_url": "chain://eip155:7777777/erc721:0x73a2bba481d2b4ec00ecbce45f580aabad14ae26",
        "image": "https://ipfs.decentralized-content.com/ipfs/bafybeic65zgff3gsnh2vrtaxwimxvxa2u35h3rupxdns7u5rajq4suyhba",
        "channel_id": "fashion"
    },
    Art: {
        "name": "Art",
        "parent_url": "chain://eip155:1/erc721:0x1538c5ddbb073638b7cd1ae41ec2d9f9a4c24a7e",
        "image": "https://ipfs.decentralized-content.com/ipfs/bafkreibrpwjcp2tykkzanqgrzaofxfsf2or7xvhb37wpzg6miazloph6fi",
        "channel_id": "art"
    },
    MangAnime: {
        "name": "MangAnime",
        "parent_url": "chain://eip155:7777777/erc721:0x5a5ddb8a2d1ee3d8e9fd59785da88d573d1a84fe",
        "image": "https://ipfs.decentralized-content.com/ipfs/bafybeifkqmk7up6ho5zl5cpzws2fug7af2ninrhlomhw6ntcfhmy6nksvi",
        "channel_id": "manga-anime"
    },
    MJ: {
        "name": "MJ",
        "parent_url": "https://midjourney.com",
        "image": "https://warpcast.com/~/channel-images/midjourney.png",
        "channel_id": "midjourney"
    },
    Space: {
        "name": "Space",
        "parent_url": "chain://eip155:7777777/erc721:0x31fa484c7df6e0f04f520c97a7552d72123c1bc1",
        "image": "https://ipfs.decentralized-content.com/ipfs/bafybeigvmchkzxtw23d5isyhcn3oj4sojnlp7hpl6rspce7chb3gfdnswm",
        "channel_id": "space"
    },
    Backend: {
        "name": "Backend",
        "parent_url": "chain://eip155:7777777/erc721:0x9d9f2365dc761dbcdc9af8120472c5e88c90833c",
        "image": "https://ipfs.decentralized-content.com/ipfs/bafkreifpkt3bpfyzuyolm5msnm7kee4ftbb6ixymu2rfoddd24tgxkfvpu",
        "channel_id": "backend"
    },
    Frontend: {
        "name": "Frontend",
        "parent_url": "chain://eip155:7777777/erc721:0x3d037b11c5359fac54c3928dfad0b9512695d392",
        "image": "https://ipfs.decentralized-content.com/ipfs/bafkreibv27igqil44vdeohccdmjdnrpoj6e4xsq6zlmp2is3vscoyau6yq",
        "channel_id": "frontend"
    },
    Degen: {
        "name": "Degen",
        "parent_url": "chain://eip155:7777777/erc721:0x5d6a07d07354f8793d1ca06280c4adf04767ad7e",
        "image": "https://ipfs.decentralized-content.com/ipfs/bafkreieudzvadtjy36j7x2i73isqw2jmgbwtum3p3eaahn4mnztuzl7y7e",
        "channel_id": "degen"
    },
    Chess: {
        "name": "Chess",
        "parent_url": "chain://eip155:7777777/erc721:0xca3e25b5c41b02ffa6f3b053426e96b59b64a9ae",
        "image": "https://ipfs.decentralized-content.com/ipfs/bafybeih5vyspqun36vv7ai3yxc54yuhfa6p577okwwhhvd2gcsy53pksym",
        "channel_id": "chess"
    },
    Tabletop: {
        "name": "Tabletop",
        "parent_url": "chain://eip155:7777777/erc721:0xf7ebaea271e84a0c40e90bc6f5889dbfa0a12366",
        "image": "https://ipfs.decentralized-content.com/ipfs/bafybeideqszuilofnqj6xyphlbiy75i32uunfwuj3bzedv7wfst25fh46a",
        "channel_id": "tabletop"
    },
    History: {
        "name": "History",
        "parent_url": "chain://eip155:7777777/erc721:0x177aa0bf214af03499c1fe239de20f3c4c373250",
        "image": "https://ipfs.decentralized-content.com/ipfs/bafybeig7ib3vxqwjhmr5po54tdcpxuzbqkzrs3bmuam5bsyhsxxj4w2xxe",
        "channel_id": "history"
    },
    Philosophy: {
        "name": "Philosophy",
        "parent_url": "chain://eip155:7777777/erc721:0xc48c325f794f9105000aa27d427fbed363fa7112",
        "image": "https://ipfs.decentralized-content.com/ipfs/bafybeicrwbexnu5eaanubd7sw4vslzvsev6yqls6flbncfakqi3cawjet4",
        "channel_id": "philosophy"
    },
    eACC: {
        "name": "e/acc",
        "parent_url": "chain://eip155:7777777/erc721:0xc2a1570703480b72091283decb80292c273db559",
        "image": "https://ipfs.decentralized-content.com/ipfs/bafybeifo72qxybndxv26rebjkojcx37pgkcwvvoz5h4liyx4appdxmyto4",
        "channel_id": "eff-acc"
    },
    Travel: {
        "name": "Travel",
        "parent_url": "chain://eip155:7777777/erc721:0x917ef0a90d63030e6aa37d51d7e6ece440ace537",
        "image": "https://ipfs.decentralized-content.com/ipfs/bafybeibqktr73eetw3qy4uwtnn4kcn6ziepg4g5koexpi2hjo6okbwb4em",
        "channel_id": "travel"
    },
    LA: {
        "name": "LA",
        "parent_url": "chain://eip155:1/erc721:0x750262ee8b4261e061026fc24bb640a4aa88154a",
        "image": "https://i.seadn.io/gcs/files/fba3bf4bd772c2fa7e4210978dbd07e8.png?auto=format&dpr=1&w=512",
        "channel_id": "los-angeles"
    },
    NY: {
        "name": "NY",
        "parent_url": "chain://eip155:1/erc721:0xfdd5e7949bd72c95907c46a630d2c791f0e842c6",
        "image": "https://i.seadn.io/gcs/files/48399e13b30e401d90c3c61a0065e02a.png?auto=format&dpr=1&w=512",
        "channel_id": "new-york"
    },
    SF: {
        "name": "SF",
        "parent_url": "chain://eip155:7777777/erc721:0x2df74b933d530c66679e6fcc4c9396ebb230ccb2",
        "image": "https://ipfs.decentralized-content.com/ipfs/bafybeieh736ikqpzha4nd6st6zbztsuyn4owskcdyxyt7xjerf6vdvqssm",
        "channel_id": "sf"
    },
    Purple: {
        "name": "Purple",
        "parent_url": "chain://eip155:1/erc721:0xa45662638e9f3bbb7a6fecb4b17853b7ba0f3a60",
        "image": "https://i.seadn.io/gae/2R29pIWneHAMHH0e2Lcqsilv7vRBpnYngrKOZXBkhpyrlBVgcJzgPxPq_pWujLggzy-EW1Jt9QJIOQW7t95ufdgvwCAITd4fw0DvQJM?w=500&auto=format",
        "channel_id": "purple"
    },
    Purpler: {
        "name": "Purpler",
        "parent_url": "chain://eip155:1/erc721:0x8edceb20795ac2b93ab8635af77e96cae123d045",
        "image": "https://i.seadn.io/gcs/files/ee90b81a2aef63af2e763bd5718f07a1.png?w=500&auto=format",
        "channel_id": "purpler"
    },
    Builder: {
        "name": "Builder",
        "parent_url": "chain://eip155:1/erc721:0xdf9b7d26c8fc806b1ae6273684556761ff02d422",
        "image": "https://i.seadn.io/gae/emh3ta_T35Zqa9taIH4FW-xoIjLOVz_HfJfCyXWlwc2714nRn0UfJxaV9lQBVpSXj-rOnba_arbMYufP0tT8triR8FgwzALfnmBrRA?w=500&auto=format",
        "channel_id": "builder"
    },
    Nouns: {
        "name": "Nouns",
        "parent_url": "chain://eip155:1/erc721:0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03",
        "image": "https://warpcast.com/~/channel-images/nouns.png",
        "channel_id": "nouns"
    },
    Orange: {
        "name": "Orange",
        "parent_url": "https://www.orangedao.xyz",
        "image": "https://warpcast.com/~/channel-images/orange.png",
        "channel_id": "orange-dao"
    },
    Kiwi_News: {
        "name": "Kiwi News",
        "parent_url": "chain://eip155:1/erc721:0xebb15487787cbf8ae2ffe1a6cca5a50e63003786",
        "image": "https://i.seadn.io/gcs/files/0b7457dd591cf6ac298d4bd62a68cdd4.png?auto=format&dpr=1&w=512",
        "channel_id": "kiwi-news"
    },
    Launchcaster: {
        "name": "Launchcaster",
        "parent_url": "chain://eip155:1/erc721:0x5f4336f57cf41821522f1777321462b108de55c26",
        "image": "https://i.seadn.io/gcs/files/8ac77581565e219f568849cdce1c0919.png?auto=format&dpr=1&w=512",
        "channel_id": "launchcaster"
    },
    Surveycaster: {
        "name": "Surveycaster",
        "parent_url": "chain://eip155:1/erc721:0xb58f8b1972c86aacd58f86ffae37ed31664c934d",
        "image": "https://i.seadn.io/gcs/files/b6affa5205c571cf3421d49ad7d778ba.png?auto=format&dpr=1&w=512",
        "channel_id": "surveycaster"
    },
    Unlonely: {
        "name": "Unlonely",
        "parent_url": "chain://eip155:1/erc721:0xc7e230ce8d67b2ad116208c69d616dd6bfc96a8d",
        "image": "https://i.seadn.io/gcs/files/40b68bc7d827a185cc044d1a4b872a20.png?auto=format&dpr=1&w=512",
        "channel_id": "unlonely"
    },
    Events: {
        "name": "Events",
        "parent_url": "chain://eip155:1/erc721:0x7ea3dff0fcd9a203f594c7474f7c6bd098af0427",
        "image": "https://i.seadn.io/gcs/files/79843c6a17f589934e651ffc811cc756.png?auto=format&dpr=1&w=512",
        "channel_id": "event-pass"
    },
    FarQuest: {
        "name": "FarQuest",
        "parent_url": "chain://eip155:1/erc721:0x427b8efee2d6453bb1c59849f164c867e4b2b376",
        "image": "https://warpcast.com/~/channel-images/farquest.png",
        "channel_id": "farquest"
    },
    Cabin: {
        "name": "Cabin",
        "parent_url": "https://cabin.city",
        "image": "https://warpcast.com/~/channel-images/cabin.png",
        "channel_id": "cabin-city"
    },
    SBC: {
        "name": "SBC",
        "parent_url": "https://cbr.stanford.edu/sbc23/",
        "image": "https://warpcast.com/~/channel-images/sbc.png",
        "channel_id": "sbc"
    },
    ETHG_NY: {
        "name": "ETHG NY",
        "parent_url": "https://ethglobal.com/events/newyork2023",
        "image": "https://warpcast.com/~/channel-images/ethg-ny.png",
        "channel_id": "ethg-ny"
    },
    EthCC: {
        "name": "EthCC",
        "parent_url": "chain://eip155:1/erc721:0x39d89b649ffa044383333d297e325d42d31329b2",
        "image": "https://i.seadn.io/gcs/files/b4dd8ef3c205737a672a167b57662acc.png?auto=format&dpr=1&w=512",
        "channel_id": "ethcc"
    },
    FarCon: {
        "name": "FarCon",
        "parent_url": "chain://eip155:1/erc721:0x2A9EA02E4c2dcd56Ba20628Fe1bd46bAe2C62746",
        "image": "https://i.seadn.io/gcs/files/fe246445104ccfc298417e5e5fc49505.jpg?w=500&auto=format",
        "channel_id": "farcon"
    },
    Parenting: {
        "name": "Parenting",
        "parent_url": "chain://eip155:8453/erc721:0xb7310fc4b4a31c4fb7adf90b8201546bb2bcb52c",
        "image": "https://ipfs.decentralized-content.com/ipfs/bafybeifl46eltwvlwof5fsusgk5vk4rq7duo4qw33xq4gbdjsq4a4kbcom",
        "channel_id": "parenting"
    },
    Science: {
        "name": "Science",
        "parent_url": "chain://eip155:8453/erc721:0xd953664a9b9e30fa7b3ccd00a2f9c21c7b75c5f0",
        "image": "https://ipfs.decentralized-content.com/ipfs/bafybeicwk3vf7oilmigaraj6sfnylb5upits56usthxrndnehb2gf4vty4",
        "channel_id": "science"
    },
    Rust: {
        "name": "Rust",
        "parent_url": "https://www.rust-lang.org",
        "image": "https://warpcast.com/~/channel-images/rust.png",
        "channel_id": "rust"
    },
    Nature: {
        "name": "Nature",
        "parent_url": "chain://eip155:7777777/erc721:0xf6a7d848603aff875e4f35025e5c568679ccc17c",
        "image": "https://ipfs.decentralized-content.com/ipfs/bafybeia4rvvtf5wulljp6ogdbbsjtflvuw5gcfwbugikwtfom2rq5c65a4",
        "channel_id": "nature"
    },
    Jobs: {
        "name": "Jobs",
        "parent_url": "chain://eip155:8453/erc721:0x5fcd7a54fdf08c8dbcb969bc1f021ae87affafa8",
        "image": "https://ipfs.decentralized-content.com/ipfs/bafkreie2uut3t5enmn6vtqainrmzwwy47evihl4dmxjqofwwjvqk6snbsu",
        "channel_id": "jobs"
    },
    Apple: {
        "name": "Apple",
        "parent_url": "https://www.apple.com",
        "image": "https://warpcast.com/~/channel-images/apple.png",
        "channel_id": "apple"
    },
    Network_States: {
        "name": "Network States",
        "parent_url": "https://thenetworkstate.com",
        "image": "https://warpcast.com/~/channel-images/network-states.png",
        "channel_id": "network-states"
    },
    Base: {
        "name": "Base",
        "parent_url": "https://onchainsummer.xyz",
        "image": "https://warpcast.com/~/channel-images/base.png",
        "channel_id": "onchain-summer"
    },
    RxE: {
        "name": "RxE",
        "parent_url": "chain://eip155:7777777/erc721:0x3312a43f15a9a9a1c6b7ee055e4b71041c2613e6",
        "image": "https://warpcast.com/~/channel-images/rex.png",
        "channel_id": "rust-x-ethereum"
    },
    farcastHER: {
        "name": "farcastHER",
        "parent_url": "chain://eip155:8453/erc721:0x1e5115dc60cdab3c1263a945201cb509ea7a8340",
        "image": "https://ipfs.decentralized-content.com/ipfs/bafkreifastwejsqeht6iwljuv2d5yqaabvkayktzfidxnb3nq4w653slai",
        "channel_id": "farcasther"
    },
    Devconnect: {
        "name": "Devconnect",
        "parent_url": "https://devconnect.org",
        "image": "https://warpcast.com/~/channel-images/devconnect.jpg",
        "channel_id": "devconnect"
    },
    Cricket: {
        "name": "Cricket",
        "parent_url": "https://www.cricketworldcup.com",
        "image": "https://warpcast.com/~/channel-images/cricket.png",
        "channel_id": "cricket"
    },
    Rugby: {
        "name": "Rugby",
        "parent_url": "https://www.rugbyworldcup.com",
        "image": "https://warpcast.com/~/channel-images/rugby.png",
        "channel_id": "rugby"
    },
    Bright_Moments: {
        "name": "Bright Moments",
        "parent_url": "https://www.brightmoments.io",
        "image": "https://warpcast.com/~/channel-images/bright-moments.jpg",
        "channel_id": "bright-moments"
    },
    Founders: {
        "name": "Founders",
        "parent_url": "https://farcaster.group/founders",
        "image": "https://warpcast.com/~/channel-images/founders.png",
        "channel_id": "founders"
    },
    PoolTogether: {
        "name": "PoolTogether",
        "parent_url": "https://pooltogether.com",
        "image": "https://warpcast.com/~/channel-images/pool-together.png",
        "channel_id": "pool-together"
    },
    Viem: {
        "name": "Viem",
        "parent_url": "https://viem.sh",
        "image": "https://warpcast.com/~/channel-images/viem.png",
        "channel_id": "viem"
    },
    Data: {
        "name": "Data",
        "parent_url": "https://farcaster.group/data",
        "image": "https://warpcast.com/~/channel-images/data.png",
        "channel_id": "data"
    },
    EthStaker: {
        "name": "EthStaker",
        "parent_url": "https://ethstaker.cc",
        "image": "https://warpcast.com/~/channel-images/eth-staker.png",
        "channel_id": "eth-staker"
    },
    ENS: {
        "name": "ENS",
        "parent_url": "https://ens.domains",
        "image": "https://warpcast.com/~/channel-images/ens.png",
        "channel_id": "ens"
    },
    Product: {
        "name": "Product",
        "parent_url": "https://farcaster.group/product",
        "image": "https://warpcast.com/~/channel-images/product.png",
        "channel_id": "product"
    },
    Basepaint: {
        "name": "Basepaint",
        "parent_url": "https://basepaint.xyz",
        "image": "https://warpcast.com/~/channel-images/basepaint.png",
        "channel_id": "basepaint"
    },
    Onchain_Gaming: {
        "name": "Onchain Gaming",
        "parent_url": "https://farcaster.group/onchain-gaming",
        "image": "https://warpcast.com/~/channel-images/onchain-gaming.png",
        "channel_id": "onchain-gaming"
    },
    Gitcoin: {
        "name": "Gitcoin",
        "parent_url": "https://www.gitcoin.co",
        "image": "https://warpcast.com/~/channel-images/gitcoin.jpg",
        "channel_id": "gitcoin"
    },
    Gnars: {
        "name": "Gnars",
        "parent_url": "chain://eip155:1/erc721:0x558bfff0d583416f7c4e380625c7865821b8e95c",
        "image": "https://i.seadn.io/gcs/files/18a26500ca1bb1ec29811ae2af6ac19e.png?auto=format&dpr=1&w=512",
        "channel_id": "gnars"
    },
    Recommend: {
        "name": "Recommend",
        "parent_url": "https://farcaster.group/recommend",
        "image": "https://warpcast.com/~/channel-images/recommendations.png",
        "channel_id": "recommendations"
    },
    Paragraph: {
        "name": "Paragraph",
        "parent_url": "https://paragraph.xyz",
        "image": "https://warpcast.com/~/channel-images/paragraph.png",
        "channel_id": "paragraph"
    },
    Milady: {
        "name": "Milady",
        "parent_url": "chain://eip155:1/erc721:0x5af0d9827e0c53e4799bb226655a1de152a425a5",
        "image": "https://i.seadn.io/gae/a_frplnavZA9g4vN3SexO5rrtaBX_cBTaJYcgrPtwQIqPhzgzUendQxiwUdr51CGPE2QyPEa1DHnkW1wLrHAv5DgfC3BP-CWpFq6BA?auto=format&dpr=1&w=512",
        "channel_id": "milady"
    },
    Gen_Art: {
        "name": "Gen Art",
        "parent_url": "chain://eip155:8453/erc721:0xe7a43b5942f15fddeb9733fdcc57c6232f1d5aa0",
        "image": "https://warpcast.com/~/channel-images/gen-art.png",
        "channel_id": "gen-art"
    },
    Lil_Nouns: {
        "name": "Lil Nouns",
        "parent_url": "chain://eip155:1/erc721:0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b",
        "image": "https://i.seadn.io/gae/NeMen42xORQc--X_rAm6d5HCcRxkL5ZqAFi8LCSdFoRLi3AVNvEJ4Eo_-kFMnk8TVtPsnFxrMZ-DQIy-qjHgZnw4UFZYhjOWTmI_0w?auto=format&dpr=1&w=512",
        "channel_id": "lil-nouns"
    },
    FarCats: {
        "name": "FarCats",
        "parent_url": "chain://eip155:1/erc721:0x9340204616750cb61e56437befc95172c6ff6606",
        "image": "https://ipfs.decentralized-content.com/ipfs/bafybeie2eyq6ezqkzxq7w5pbhlabr2ts2seynxieixy23xeijhor7rdjni",
        "channel_id": "farcats"
    },
    Classical: {
        "name": "Classical",
        "parent_url": "https://en.wikipedia.org/wiki/Johann_Sebastian_Bach",
        "image": "https://warpcast.com/~/channel-images/classical.png",
        "channel_id": "classical"
    },
    Opepen: {
        "name": "Opepen",
        "parent_url": "chain://eip155:1/erc721:0x6339e5e072086621540d0362c4e3cea0d643e114",
        "image": "https://i.seadn.io/gcs/files/b1c9ed2e584b4f6e418bf1ca15311844.jpg?auto=format&dpr=1&w=512",
        "channel_id": "opepen"
    },
    Checks: {
        "name": "Checks",
        "parent_url": "chain://eip155:1/erc721:0x34eebee6942d8def3c125458d1a86e0a897fd6f9",
        "image": "https://i.seadn.io/gcs/files/864dce41a43d14e0c083ad9434cb8261.png?auto=format&dpr=1&w=512",
        "channel_id": "checks"
    },
    Curta: {
        "name": "Curta",
        "parent_url": "https://www.curta.wtf",
        "image": "https://warpcast.com/~/channel-images/curta.jpg",
        "channel_id": "curta"
    },
    dev: {
        "name": "dev",
        "parent_url": "chain://eip155:1/erc721:0x7dd4e31f1530ac682c8ea4d8016e95773e08d8b0",
        "image": "https://ipfs.decentralized-content.com/ipfs/bafkreigbei45ni5zsliszzeivotgee5auj2ykkh6zrzjwvm4izviidusny",
        "channel_id": "dev"
    },
    Creators: {
        "name": "Creators",
        "parent_url": "https://farcaster.group/creators",
        "image": "https://warpcast.com/~/channel-images/creators.png",
        "channel_id": "creators"
    },
    Obsidian: {
        "name": "Obsidian",
        "parent_url": "https://obsidian.md",
        "image": "https://warpcast.com/~/channel-images/obsidian.jpg",
        "channel_id": "obsidian"
    },
    Green_Pill: {
        "name": "Green Pill",
        "parent_url": "https://farcaster.group/green-pill",
        "image": "https://warpcast.com/~/channel-images/green-pill.png",
        "channel_id": "green-pill"
    },
    Zora: {
        "name": "Zora",
        "parent_url": "chain://eip155:1/erc721:0xca21d4228cdcc68d4e23807e5e370c07577dd152",
        "image": "https://warpcast.com/~/channel-images/zora.png",
        "channel_id": "zora"
    },
    Spanish: {
        "name": "Spanish",
        "parent_url": "https://farcaster.group/spanish",
        "image": "https://warpcast.com/~/channel-images/spanish.png",
        "channel_id": "spanish"
    },
    Rainbow: {
        "name": "Rainbow",
        "parent_url": "https://rainbow.me",
        "image": "https://warpcast.com/~/channel-images/rainbow.png",
        "channel_id": "rainbow"
    },
    Chinese: {
        "name": "Chinese",
        "parent_url": "https://farcaster.group/chinese",
        "image": "https://warpcast.com/~/channel-images/chinese.png",
        "channel_id": "chinese"
    },
    Aburra: {
        "name": "Aburra",
        "parent_url": "https://farcaster.group/aburra",
        "image": "https://warpcast.com/~/channel-images/aburra.jpg",
        "channel_id": "aburra"
    },
    Crypto_News: {
        "name": "Crypto News",
        "parent_url": "https://farcaster.group/crypto-news",
        "image": "https://warpcast.com/~/channel-images/crypto-news.png",
        "channel_id": "crypto-news"
    },
    Party: {
        "name": "Party",
        "parent_url": "https://www.party.app",
        "image": "https://warpcast.com/~/channel-images/party.jpg",
        "channel_id": "party"
    },
    College_Football: {
        "name": "College Football",
        "parent_url": "https://farcaster.group/college-football",
        "image": "https://warpcast.com/~/channel-images/college-football.png",
        "channel_id": "college-football"
    },
    German: {
        "name": "German",
        "parent_url": "https://farcaster.group/german",
        "image": "https://warpcast.com/~/channel-images/german.png",
        "channel_id": "german"
    },
    Japanese: {
        "name": "Japanese",
        "parent_url": "https://farcaster.group/japanese",
        "image": "https://warpcast.com/~/channel-images/japanese.png",
        "channel_id": "japanese"
    },
    Snow: {
        "name": "Snow",
        "parent_url": "https://farcaster.group/snow",
        "image": "https://warpcast.com/~/channel-images/snow.png",
        "channel_id": "snow"
    },
    Gadgets: {
        "name": "Gadgets",
        "parent_url": "https://farcaster.group/gadgets",
        "image": "https://warpcast.com/~/channel-images/gadgets.png",
        "channel_id": "gadgets"
    },
    Lisbon: {
        "name": "Lisbon",
        "parent_url": "https://farcaster.group/lisbon",
        "image": "https://warpcast.com/~/channel-images/lisbon.png",
        "channel_id": "lisbon"
    },
    Paris: {
        "name": "Paris",
        "parent_url": "https://farcaster.group/paris",
        "image": "https://warpcast.com/~/channel-images/paris.png",
        "channel_id": "paris"
    },
    Trading: {
        "name": "Trading",
        "parent_url": "https://farcaster.group/trading",
        "image": "https://warpcast.com/~/channel-images/trading.png",
        "channel_id": "trading"
    },
    Berlin: {
        "name": "Berlin",
        "parent_url": "https://farcaster.group/berlin",
        "image": "https://warpcast.com/~/channel-images/berlin.png",
        "channel_id": "berlin"
    },
    Chicago: {
        "name": "Chicago",
        "parent_url": "https://farcaster.group/chicago",
        "image": "https://warpcast.com/~/channel-images/chicago.png",
        "channel_id": "chicago"
    },
    Shower_Thoughts: {
        "name": "Shower Thoughts",
        "parent_url": "https://farcaster.group/shower-thoughts",
        "image": "https://warpcast.com/~/channel-images/shower-thoughts.png",
        "channel_id": "shower-thoughts"
    },
    MMA: {
        "name": "MMA",
        "parent_url": "https://farcaster.group/mma",
        "image": "https://warpcast.com/~/channel-images/mma.png",
        "channel_id": "mma"
    },
    Economics: {
        "name": "Economics",
        "parent_url": "https://farcaster.group/economics",
        "image": "https://warpcast.com/~/channel-images/economics.png",
        "channel_id": "economics"
    },
    DeFi: {
        "name": "DeFi",
        "parent_url": "https://farcaster.group/defi",
        "image": "https://warpcast.com/~/channel-images/defi.png",
        "channel_id": "defi"
    },
    Wellness: {
        "name": "Wellness",
        "parent_url": "https://farcaster.group/wellness",
        "image": "https://warpcast.com/~/channel-images/wellness.png",
        "channel_id": "wellness"
    },
    Poetry: {
        "name": "Poetry",
        "parent_url": "https://farcaster.group/poetry",
        "image": "https://warpcast.com/~/channel-images/poetry.png",
        "channel_id": "poetry"
    },
    Aussie: {
        "name": "Aussie",
        "parent_url": "https://farcaster.group/aussie",
        "image": "https://warpcast.com/~/channel-images/aussie.png",
        "channel_id": "aussie"
    },
    Writers: {
        "name": "Writers",
        "parent_url": "https://farcaster.group/writers",
        "image": "https://warpcast.com/~/channel-images/writers.png",
        "channel_id": "writers"
    },
    Gardening: {
        "name": "Gardening",
        "parent_url": "https://farcaster.group/gardening",
        "image": "https://warpcast.com/~/channel-images/gardening.png",
        "channel_id": "gardening"
    },
    Engineering: {
        "name": "Engineering",
        "parent_url": "https://farcaster.group/engineering",
        "image": "https://warpcast.com/~/channel-images/engineering.png",
        "channel_id": "engineering"
    },
    Korean: {
        "name": "Korean",
        "parent_url": "https://farcaster.group/korean",
        "image": "https://warpcast.com/~/channel-images/korean.png",
        "channel_id": "korean"
    },
    Surfing: {
        "name": "Surfing",
        "parent_url": "https://farcaster.group/surfing",
        "image": "https://warpcast.com/~/channel-images/surfing.png",
        "channel_id": "surfing"
    },
    MechKey: {
        "name": "MechKey",
        "parent_url": "https://farcaster.group/mech-kb",
        "image": "https://warpcast.com/~/channel-images/mech-kb.png",
        "channel_id": "mech-kb"
    },
    Random: {
        "name": "Random",
        "parent_url": "https://farcaster.group/random",
        "image": "https://warpcast.com/~/channel-images/random.png",
        "channel_id": "random"
    },
    MLB: {
        "name": "MLB",
        "parent_url": "https://farcaster.group/mlb",
        "image": "https://warpcast.com/~/channel-images/mlb.jpg",
        "channel_id": "mlb"
    },
    Uniswap: {
        "name": "Uniswap",
        "parent_url": "https://uniswap.org",
        "image": "https://warpcast.com/~/channel-images/uniswap.jpg",
        "channel_id": "uniswap"
    },
    Turkish: {
        "name": "Turkish",
        "parent_url": "https://farcaster.group/turkish",
        "image": "https://warpcast.com/~/channel-images/turkish.png",
        "channel_id": "turkish"
    },
    RWA: {
        "name": "RWA",
        "parent_url": "https://farcaster.group/rwa",
        "image": "https://warpcast.com/~/channel-images/rwa.png",
        "channel_id": "rwa"
    },
    London: {
        "name": "London",
        "parent_url": "https://farcaster.group/london",
        "image": "https://warpcast.com/~/channel-images/london.png",
        "channel_id": "london"
    },
    Daily_Fantasy: {
        "name": "Daily Fantasy",
        "parent_url": "https://farcaster.group/daily-fantasy",
        "image": "https://warpcast.com/~/channel-images/daily-fantasy.png",
        "channel_id": "daily-fantasy"
    },
    Vietnamese: {
        "name": "Vietnamese",
        "parent_url": "https://farcaster.group/vietnamese",
        "image": "https://warpcast.com/~/channel-images/vietnamese.png",
        "channel_id": "vietnamese"
    },
    SuperRare: {
        "name": "SuperRare",
        "parent_url": "https://superrare.com",
        "image": "https://warpcast.com/~/channel-images/superrare.jpg",
        "channel_id": "superrare"
    },
    Foundation: {
        "name": "Foundation",
        "parent_url": "https://foundation.app",
        "image": "https://warpcast.com/~/channel-images/foundation.jpg",
        "channel_id": "foundation"
    },
    Tokyo: {
        "name": "Tokyo",
        "parent_url": "https://farcaster.group/tokyo",
        "image": "https://warpcast.com/~/channel-images/tokyo.png",
        "channel_id": "tokyo"
    },
    Rarible: {
        "name": "Rarible",
        "parent_url": "https://rarible.com",
        "image": "https://warpcast.com/~/channel-images/rarible.jpg",
        "channel_id": "rarible"
    },
    CoCreated: {
        "name": "CoCreated",
        "parent_url": "https://app.cocreated.xyz",
        "image": "https://app.cocreated.xyz/icon-512x512.png",
        "channel_id": "cocreated"
    },
    Bounties: {
        "name": "Bounties",
        "parent_url": "https://warpcast.com/~/channel/bounties",
        "image": "https://warpcast.com/~/channel-images/bounties.png",
        "channel_id": "bounties"
    }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    FarcasterKitProvider: FarcasterKitProvider,
    channels: channels,
    useCast: useCast,
    useLatestCasts: useLatestCasts,
    useReplies: useReplies,
    useSearch: useSearch,
    useUser: useUser
});
