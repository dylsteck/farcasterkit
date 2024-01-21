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
var farcasterkit_react_native_exports = {};
__export(farcasterkit_react_native_exports, {
    NeynarContext: function() {
        return NeynarContext;
    },
    NeynarProvider: function() {
        return NeynarProvider;
    },
    useLatestCasts: function() {
        return useLatestCasts;
    },
    useLogin: function() {
        return useLogin;
    },
    useReaction: function() {
        return useReaction;
    }
});
module.exports = __toCommonJS(farcasterkit_react_native_exports);
// NeynarProvider.tsx
var import_async_storage = __toESM(require("@react-native-async-storage/async-storage"));
var import_react = __toESM(require("react"));
var import_infinite = __toESM(require("swr/infinite"));
var NeynarContext = (0, import_react.createContext)(void 0);
var NeynarProvider = function(param) {
    var children = param.children, apiKey = param.apiKey, fcKitApiUrl = param.fcKitApiUrl;
    if (!apiKey) {
        throw new Error("API key is required for NeynarProvider");
    }
    var API_KEY = apiKey;
    var API_URL = fcKitApiUrl ? fcKitApiUrl : "https://api.farcasterkit.com";
    var _ref = _sliced_to_array((0, import_react.useState)(null), 2), farcasterUser = _ref[0], setFarcasterUser = _ref[1];
    (0, import_react.useEffect)(function() {
        var fetchData = function() {
            var _ref = _async_to_generator(function() {
                var storedData, user;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                import_async_storage.default.getItem("FARCASTER_USER")
                            ];
                        case 1:
                            storedData = _state.sent();
                            if (storedData) {
                                user = JSON.parse(storedData);
                                setFarcasterUser(user);
                            }
                            return [
                                2
                            ];
                    }
                });
            });
            return function fetchData() {
                return _ref.apply(this, arguments);
            };
        }();
        fetchData();
    }, []);
    var postReaction = function() {
        var _ref = _async_to_generator(function(type, hash) {
            var error;
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
                            fetch("https://api.neynar.com/v2/farcaster/reaction", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                    "api_key": API_KEY
                                },
                                body: JSON.stringify({
                                    signer_uuid: farcasterUser === null || farcasterUser === void 0 ? void 0 : farcasterUser.signer_uuid,
                                    reaction_type: type,
                                    target: hash
                                })
                            })
                        ];
                    case 1:
                        _state.sent();
                        return [
                            3,
                            3
                        ];
                    case 2:
                        error = _state.sent();
                        console.error("Failed to post reaction", error);
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
        return function postReaction(type, hash) {
            return _ref.apply(this, arguments);
        };
    }();
    return /* @__PURE__ */ import_react.default.createElement(NeynarContext.Provider, {
        value: {
            farcasterUser: farcasterUser,
            setFarcasterUser: setFarcasterUser,
            postReaction: postReaction,
            apiKey: apiKey,
            fcKitApiUrl: fcKitApiUrl
        }
    }, children);
};
var useLogin = function() {
    var context = (0, import_react.useContext)(NeynarContext);
    if (!context) {
        throw new Error("useLogin must be used within a NeynarProvider");
    }
    return context;
};
var useReaction = function() {
    var context = (0, import_react.useContext)(NeynarContext);
    if (!context) {
        throw new Error("useReaction must be used within a NeynarProvider");
    }
    return context.postReaction;
};
var useLatestCasts = function() {
    var type = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "home", parentUrl = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    var _data__next, _data_;
    var context = (0, import_react.useContext)(NeynarContext);
    var apiKey = context === null || context === void 0 ? void 0 : context.apiKey;
    if (!apiKey) {
        throw new Error("API key is missing in NeynarContext: ".concat(apiKey));
    }
    var getKey = function(pageIndex, previousPageData) {
        var _previousPageData_next, _previousPageData_next1, _previousPageData_next2;
        var homeCastsUrl = "https://api.neynar.com/v2/farcaster/feed?feed_type=following&fid=616&limit=25&cursor=".concat((previousPageData === null || previousPageData === void 0 ? void 0 : (_previousPageData_next = previousPageData.next) === null || _previousPageData_next === void 0 ? void 0 : _previousPageData_next.cursor) || "");
        var trendingCastsUrl = parentUrl.length > 0 ? "https://api.neynar.com/v2/farcaster/feed?feed_type=filter&filter_type=parent_url&fid=616&parent_url=".concat(parentUrl, "&with_recasts=true&limit=25&cursor=").concat((previousPageData === null || previousPageData === void 0 ? void 0 : (_previousPageData_next1 = previousPageData.next) === null || _previousPageData_next1 === void 0 ? void 0 : _previousPageData_next1.cursor) || "") : "https://api.neynar.com/v2/farcaster/feed?feed_type=filter&filter_type=global_trending&fid=616&with_recasts=true&limit=25&cursor=".concat((previousPageData === null || previousPageData === void 0 ? void 0 : (_previousPageData_next2 = previousPageData.next) === null || _previousPageData_next2 === void 0 ? void 0 : _previousPageData_next2.cursor) || "");
        if (previousPageData && !previousPageData.next) return null;
        return type === "home" && parentUrl.length === 0 ? homeCastsUrl : trendingCastsUrl;
    };
    var fetcher = function(url) {
        return fetch(url, {
            headers: {
                "Accept": "application/json",
                "api_key": apiKey
            }
        }).then(function(res) {
            return res.json();
        });
    };
    var _ref = (0, import_infinite.default)(getKey, fetcher), data = _ref.data, size = _ref.size, setSize = _ref.setSize, error = _ref.error;
    var casts = data ? data.flatMap(function(page) {
        return page.casts;
    }) : [];
    var isLoading = !data && !error;
    var isReachingEnd = data ? ((_data_ = data[data.length - 1]) === null || _data_ === void 0 ? void 0 : (_data__next = _data_.next) === null || _data__next === void 0 ? void 0 : _data__next.cursor) == null : false;
    var loadMore = function() {
        if (!isReachingEnd) {
            setSize(size + 1);
        }
    };
    return {
        casts: casts,
        isLoading: isLoading,
        isReachingEnd: isReachingEnd,
        loadMore: loadMore
    };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    NeynarContext: NeynarContext,
    NeynarProvider: NeynarProvider,
    useLatestCasts: useLatestCasts,
    useLogin: useLogin,
    useReaction: useReaction
});
