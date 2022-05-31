var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var SUCCESS_MSG = "Success. The device will reboot to the new firmware in 5 seconds";
var HOME_ERR = "You must stow your TV before performing firmware update";
var LAST_FUNCTIONS = [
    "NOTHING / STOPPED",
    "UDP_STOW",
    "UDP_MEM",
    "TV_ON",
    "TV_OFF",
    "REMOTE_MEM_1",
    "REMOTE_MEM_2",
    "REMOTE_STOW",
    "REMOTE_UP",
    "REMOTE_DOWN",
    "REMOTE_LEFT",
    "REMOTE_RIGHT",
    "UDP_UP",
    "UDP_DOWN",
    "UDP_LEFT",
    "UDP_RIGHT"
];
var inUpdate = false;
function log() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var timestamp = '[' + new Date().toISOString() + '] ';
    args[0] = timestamp + args[0];
    console.log.apply(console, args);
}
function successProgram(msg) {
    setProgress(100.0);
    var txt = document.getElementById('progText');
    txt.innerText = msg;
}
function error(msg) {
    window.alert(msg);
    setProgress(-1);
}
function delay(t) {
    return new Promise(function (resolve) {
        setTimeout(resolve, t);
    });
}
function get_crc32(initial, view) {
    var crc32_table = (function () {
        var crcTable = [];
        for (var i = 0; i < 256; ++i) {
            var c = i * 16777216;
            for (var j = 8; j > 0; --j) {
                c = c & 0x80000000 ? (c * 2) ^ 0x04C11DB7 : (c * 2);
            }
            crcTable[i] = c >>> 0;
        }
        return crcTable;
    })();
    var crc = initial;
    var len = view.length * 4;
    for (var i = 0; i < len; ++i) {
        var b = void 0;
        var x = Math.floor(i / 4);
        if ((i & 3) === 0)
            b = (view[x] >>> 24);
        else if ((i & 3) === 1)
            b = (view[x] >>> 16);
        else if ((i & 3) === 2)
            b = (view[x] >>> 8);
        else
            b = (view[x] >>> 0);
        b = b & 0xFF;
        crc = (((crc * 256) & 0xFFFFFFFF) ^ crc32_table[(((crc >>> 24) & 0xFF) ^ b) & 0xFF]) >>> 0;
    }
    return crc;
}
function getImageLength(curPage) {
    if (curPage === "B") {
        return 512 * 1024 - 4;
    }
    else if (curPage === "A") {
        return 480 * 1024 - 4;
    }
    else {
        return 0;
    }
}
function isHomed() {
    var txt = document.getElementById('cazim');
    if (!txt || Math.abs(+txt.value) >= 0.01)
        return false;
    txt = document.getElementById('celev');
    if (!txt || Math.abs(+txt.value) >= 0.01)
        return false;
    return true;
}
function setProgress(percent, name) {
    var p = document.getElementById('progDiv');
    if (percent < 0) {
        p.style.display = 'none';
    }
    else {
        p.style.display = 'initial';
    }
    percent = percent * 98.0 / 100.0 + 2.0;
    var txt = document.getElementById('progText');
    txt.innerText = "Programming " + name + " - " + Math.round(percent) + "%";
    var prog = document.getElementById('progBar');
    prog.value = percent / 100.0 * prog.max;
}
function enter() {
    if (inUpdate) {
        console.log("enter fail");
        return true;
    }
    inUpdate = true;
    var nodes = document.getElementById("myButtons").querySelectorAll('a,input');
    for (var i = 0; i < nodes.length; i++) {
        nodes[i].style.backgroundColor = "#CCCCCC";
        nodes[i].disabled = true;
    }
    console.log("enter");
    return false;
}
function exit() {
    var nodes = document.getElementById("myButtons").querySelectorAll('a,input');
    for (var i = 0; i < nodes.length; i++) {
        nodes[i].disabled = false;
        nodes[i].style.backgroundColor = null;
    }
    inUpdate = false;
    console.log("exit");
}
function localFileChanged(o) {
    if (!o.files.length || !o.files[0])
        return;
    var f = o.files[0];
    o.value = null;
    if (!isHomed()) {
        return error(HOME_ERR);
    }
    if (enter())
        return;
    var reader = new FileReader();
    reader.onload = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var contents, view, pos, res, curPage, nextPage, length, l4, qlen, datastr, stat, rem, x, crc;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        contents = e.target['result'];
                        view = new Uint32Array(contents);
                        pos = 0;
                        setProgress(0.0, f.name);
                        return [4, refreshVariable(["curfwpage"], 0, "")];
                    case 1:
                        res = _a.sent();
                        if (!res.ok)
                            return [2];
                        curPage = res.resp[0];
                        nextPage = { A: "B", B: "A" }[curPage];
                        if (!nextPage) {
                            exit();
                            return [2, error("Invalid image returned: " + curPage)];
                        }
                        length = getImageLength(nextPage);
                        if (length !== view.length * 4) {
                            console.error("length=" + length + ", cur=" + view.length * 4);
                            exit();
                            return [2, error("Invalid image selected. You should choose '_img" + nextPage + "'")];
                        }
                        return [4, refreshVariable(["qavail", "update_percent", "update_status"], 0, "localupdate=" + length)];
                    case 2:
                        res = _a.sent();
                        l4 = length / 4;
                        _a.label = 3;
                    case 3:
                        if (!true) return [3, 14];
                        if (!res.ok) {
                            exit();
                            return [2, error("Upload failed: " + JSON.stringify(res.error))];
                        }
                        qlen = res.resp[0];
                        datastr = "";
                        stat = res.resp[2];
                        if (!(stat == 4)) return [3, 5];
                        successProgram(SUCCESS_MSG);
                        return [4, delay(5000)];
                    case 4:
                        _a.sent();
                        location.reload(true);
                        return [2];
                    case 5:
                        if (stat == 2 || stat == 3) {
                            exit();
                            return [2, error("Failure code returned: " + stat)];
                        }
                        _a.label = 6;
                    case 6:
                        setProgress(res.resp[1] / 10.0, f.name);
                        if (!(qlen <= 0)) return [3, 8];
                        log("Not ready to write:", res.resp);
                        if (qlen < 0) {
                            log("Update not ready yet");
                        }
                        return [4, delay(5000)];
                    case 7:
                        _a.sent();
                        return [3, 12];
                    case 8:
                        rem = Math.min(qlen, l4 - pos, 32);
                        if (!(pos < l4)) return [3, 9];
                        log("pos=" + pos + ", tot=" + l4 + ", sending=" + rem);
                        datastr += "data=" + pos.toString(16) + ",";
                        for (x = 0; x < rem; ++x) {
                            datastr += "" + view[pos].toString(16) + ",";
                            pos++;
                        }
                        datastr = datastr.substring(0, datastr.length - 1);
                        return [3, 12];
                    case 9:
                        if (!(pos == l4)) return [3, 10];
                        crc = get_crc32(0xFFFFFFFF, view);
                        datastr += "data=" + pos.toString(16) + "," + crc.toString(16);
                        pos++;
                        return [3, 12];
                    case 10: return [4, delay(1000)];
                    case 11:
                        _a.sent();
                        _a.label = 12;
                    case 12: return [4, refreshVariable(["qavail", "update_percent", "update_status"], 0, datastr)];
                    case 13:
                        res = _a.sent();
                        return [3, 3];
                    case 14: return [2];
                }
            });
        });
    };
    reader.readAsArrayBuffer(f);
    return false;
}
function setUpdateHtml(msg, avail) {
    document.getElementById('updateMsg').innerText = msg;
    var el = document.getElementById("remoteButton");
    if (!avail) {
        el.onclick = function () { return checkRemoteUpdate(true); };
        el.innerText = "Check for update";
    }
    else {
        el.onclick = function () { return beginRemoteUpdate(); };
        el.innerText = "Begin update";
    }
}
function beginRemoteUpdate() {
    return __awaiter(this, void 0, void 0, function () {
        var first, resp, stat;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    first = true;
                    if (!isHomed()) {
                        return [2, error(HOME_ERR)];
                    }
                    if (enter())
                        return [2];
                    _a.label = 1;
                case 1:
                    if (!true) return [3, 7];
                    return [4, delay(100)];
                case 2:
                    _a.sent();
                    return [4, refreshVariable(["latest_version", "update_percent", "update_status"], 0, first ? "remoteupdate" : null)];
                case 3:
                    resp = _a.sent();
                    first = false;
                    if (!resp.ok) {
                        exit();
                        return [2, error("Updated failed: " + JSON.stringify(resp.error))];
                    }
                    setProgress(resp.resp[1] / 10.0, "Server Version " + resp.resp[0]);
                    stat = resp.resp[2];
                    if (!(stat == 4)) return [3, 5];
                    successProgram(SUCCESS_MSG);
                    return [4, delay(5000)];
                case 4:
                    _a.sent();
                    location.reload(true);
                    return [2];
                case 5:
                    if (stat == 2 || stat == 3) {
                        exit();
                        return [2, error("Failure code returned: " + stat)];
                    }
                    _a.label = 6;
                case 6: return [3, 1];
                case 7: return [2];
            }
        });
    });
}
function checkRemoteUpdate(user, again) {
    return __awaiter(this, void 0, void 0, function () {
        var resp, p, d, s;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (user) {
                        if (enter())
                            return [2];
                        setUpdateHtml("Checking for update...", false);
                    }
                    return [4, refreshVariable(["version", "curfwpage", "latest_version"], 0, "checkupdate")];
                case 1:
                    resp = _a.sent();
                    if (!user) return [3, 4];
                    return [4, delay(1000)];
                case 2:
                    _a.sent();
                    return [4, refreshVariable(["version", "curfwpage", "latest_version"], 0, "checkupdate")];
                case 3:
                    resp = _a.sent();
                    _a.label = 4;
                case 4:
                    if (resp.ok) {
                        p = resp.resp[1];
                        d = resp.resp[0];
                        s = resp.resp[2];
                    }
                    else {
                        p = 0;
                        d = 0;
                        s = 0;
                    }
                    log("checkRemoteUpdate: Local=" + d + "(" + p + "), Server=" + s);
                    if (!(s > d)) return [3, 5];
                    setUpdateHtml("A software update is available: version " + s, true);
                    return [3, 11];
                case 5:
                    if (!(s == 0)) return [3, 10];
                    if (!!again) return [3, 8];
                    return [4, delay(1000)];
                case 6:
                    _a.sent();
                    return [4, checkRemoteUpdate(false, true)];
                case 7:
                    _a.sent();
                    return [3, 9];
                case 8:
                    setUpdateHtml("There are currently no software updates available", false);
                    _a.label = 9;
                case 9: return [3, 11];
                case 10:
                    setUpdateHtml("You are on the latest version", false);
                    _a.label = 11;
                case 11:
                    if (user)
                        exit();
                    return [2];
            }
        });
    });
}
function refreshVariable(varArray, refreshRate, extra) {
    return new Promise(function (resolve) {
        try {
            var i;
            var req = new XMLHttpRequest();
            req.onreadystatechange = function () {
                if (req.readyState == 4) {
                    var r = this.responseText;
                    if (r) {
                        var resp = void 0;
                        try {
                            resp = JSON.parse(this.responseText);
                            log(JSON.stringify(varArray) + " = " + JSON.stringify(resp));
                            if (varArray.length != resp.length) {
                                throw new Error("Unexpected response length did not match request");
                            }
                            for (i = 0; i < varArray.length; ++i) {
                                var varName = varArray[i];
                                var o = document.getElementById(varName);
                                if (o) {
                                    if (varName === "temp") {
                                        if (resp[i] === "Normal") {
                                            o.style.color = "green";
                                            o.style.fontWeight = "normal";
                                        }
                                        else {
                                            o.style.color = "red";
                                            o.style.fontWeight = "bold";
                                        }
                                    }
                                    if (varName === "last_function") {
                                        resp[i] = LAST_FUNCTIONS[resp[i]];
                                    }
                                    if (o.tagName === "INPUT") {
                                        o.value = resp[i];
                                    }
                                    else {
                                        o.innerText = resp[i];
                                    }
                                }
                            }
                            resolve({ ok: true, resp: resp });
                        }
                        catch (e) {
                            console.error("Error: " + this.responseText, e);
                            resolve({ ok: false, error: e });
                        }
                    }
                }
            };
            var url = "ajax.shtml?var=";
            for (i = 0; i < varArray.length; ++i)
                url += varArray[i] + ",";
            url = url.substring(0, url.length - 1);
            if (extra) {
                url += "&" + extra;
            }
            req.open('GET', url, true);
            req.send(null);
            if (refreshRate) {
                setInterval(refreshVariable, refreshRate, varArray, 0);
            }
        }
        catch (e) {
            resolve({ ok: false, error: e });
        }
    });
}
